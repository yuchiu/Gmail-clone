const amqp = require("amqplib");

const url = process.env.AMQP_URL || "amqp://guest:guest@localhost:5672";

const amqpCon = amqp.connect(url);

const mailList = [
  {
    id: "1",
    sender: "Thomas",
    subject: "travel aboard",
    isImportant: true,
    isSpam: false,
    body: "This rced to cut it short to show it on a row",
    timestamp: Date.now() + 1001
  },
  {
    id: "2",
    sender: "Medium",
    subject: "ALOHA WELCOME!",
    isImportant: false,
    isSpam: false,
    viewedAt: Date.now(),
    body:
      "This is my email, and it is suporced to cut it short to show it on a row",
    timestamp: Date.now() + 1002
  },
  {
    id: "3",
    sender: "Google Play",
    subject: "caramel so tasty",
    isImportant: true,
    isSpam: false,
    body:
      "This is my email, and it is super long so that we are forced to cut it short to show it on a row",
    timestamp: Date.now() + 1003
  },
  {
    id: "4",
    sender: "App Store",
    subject: "oh well, this is all lorem ipsum",
    isImportant: false,
    isSpam: false,
    body:
      "This is my email,  is my email, and it is super long so  is my email, and it is super long so  is my email, and it is st is super long so  is my email, and it is super long so  is my emt is super long so  is my email, and it is super long so  is my email, and it is sail, and it is super long so and it is super long so that we are forced to cut it short to show it on a row",
    timestamp: Date.now() + 1004
  }
];

amqpCon.then(conn => conn.createChannel()).then(channel => {
  const queue = "email_rpc_queue";
  channel.assertQueue(queue, { durable: false });
  channel.prefetch(1000);
  channel.consume(queue, msg => {
    const content = JSON.parse(msg.content);
    const reply = JSON.stringify(mailList);
    console.log(content);
    channel.ack(msg);
    channel.sendToQueue(msg.properties.replyTo, Buffer.from(reply), {
      correlationId: msg.properties.correlationId
    });

    console.log(reply);
  });
});
