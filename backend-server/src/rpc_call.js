const amqp = require("amqplib/callback_api");

const url = process.env.AMQP_URL || "amqp://guest:guest@localhost:5672";

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Usage: rpc_client.js num");
  process.exit(1);
}

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
      conn.createChannel((createChannelErr, ch) => {
        if (createChannelErr) {
          console.log(`createChannelErr ${createChannelErr}`);
        } else {
          ch.assertQueue("", { exclusive: true }, (assertQueueErr, q) => {
            if (assertQueueErr) {
              console.log(`assertQueueErr${assertQueueErr}`);
            } else {
              const corr = generateUuid();
              const num = parseInt(args[0], 10);

              console.log(" [x] Requesting fib(%d)", num);

              ch.consume(
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

              ch.sendToQueue("rpc_queue", Buffer.from(num.toString()), {
                correlationId: corr,
                replyTo: q.queue
              });
            }
          });
        }
      });
    }
  }
);
