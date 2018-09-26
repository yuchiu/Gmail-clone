const amqp = require("amqplib");
const uuid = require("uuid/v4");

const url = process.env.AMQP_URL || "amqp://guest:guest@localhost:5672";

const amqpCon = amqp.connect(url);

amqpCon.then(conn => conn.createChannel()).then(ch => {
  ch.assertQueue("", {
    exclusive: true,
    expires: 5000,
    autodelete: true
  }).then(q => {
    const corr = uuid();
    const queue = "email_rpc_queue";
    const content = "Hello World";

    ch.sendToQueue(queue, Buffer.from(content), {
      correlationId: corr,
      replyTo: q.queue
    });

    console.log(`Sent ${content}`);

    ch.consume(q.queue, msg => {
      const result = msg.content.toString();
      console.log(`Receive ${result}`);
    });
  });
});
