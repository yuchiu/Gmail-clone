const amqp = require("amqplib/callback_api");

const url = process.env.AMQP_URL || "amqp://guest:guest@localhost:5672";

function generateUuid() {
  return (
    Math.random().toString() +
    Math.random().toString() +
    Math.random().toString()
  );
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
          console.log(`createChannelErr ${createChannelErr}`);
        } else {
          channel.assertQueue("", { exclusive: true }, (assertQueueErr, q) => {
            if (assertQueueErr) {
              console.log(`assertQueueErr${assertQueueErr}`);
            } else {
              const corr = generateUuid();
              const num = parseInt(30, 10);

              console.log(" [x] Requesting fib(%d)", num);

              channel.consume(
                q.queue,
                msg => {
                  if (msg.properties.correlationId === corr) {
                    console.log(" [.] Got %s", msg.content.toString());
                    setTimeout(() => {
                      conn.close();
                      process.exit(0);
                    }, 500);
                  }
                },
                { noAck: true }
              );

              channel.sendToQueue(
                "email_rpc_queue",
                Buffer.from(num.toString()),
                {
                  correlationId: corr,
                  replyTo: q.queue
                }
              );
            }
          });
        }
      });
    }
  }
);
