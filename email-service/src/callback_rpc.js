import amqp from "amqplib/callback_api";

const url = process.env.AMQP_URL || "amqp://guest:guest@localhost:5672";
function fibonacci(n) {
  if (n === 0 || n === 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

amqp.connect(
  url,
  (err, conn) => {
    if (err) {
      console.error("Error connecting:", err.stack);
    } else {
      console.log(`connected to ${url}`);
      conn.createChannel((createChannelErr, channel) => {
        if (createChannelErr) {
          console.log("error creating channel", createChannelErr);
        } else {
          const q = "email_rpc_queue";

          channel.assertQueue(q, { durable: false });
          channel.prefetch(1);
          console.log(" [x] Awaiting RPC requests");
          channel.consume(q, msg => {
            const n = parseInt(msg.content.toString(), 10);

            console.log(" [.] fib(%d)", n);

            const r = fibonacci(n);

            channel.sendToQueue(
              msg.properties.replyTo,
              Buffer.from(r.toString()),
              {
                correlationId: msg.properties.correlationId
              }
            );

            channel.ack(msg);
          });
        }
      });
    }
  }
);
