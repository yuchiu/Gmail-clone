const amqp = require("amqplib");

const url = process.env.AMQP_URL || "amqp://guest:guest@localhost:5672";

const amqpCon = amqp.connect(url);

amqpCon.then(conn => conn.createChannel()).then(ch => {
  const queue = "email_rpc_queue";
  ch.assertQueue(queue, { durable: false });
  ch.prefetch(1000);
  ch.consume(queue, msg => {
    const content = msg.content.toString();
    const replyWord = "Hi There";
    console.log(content);
    ch.ack(msg);
    ch.sendToQueue(msg.properties.replyTo, Buffer.from(replyWord), {
      correlationId: msg.properties.correlationId
    });

    console.log(replyWord);
  });
});
