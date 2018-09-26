const amqp = require("amqplib");
const uuid = require("uuid/v4");

const mailController = {
  getMailList: async (req, res) => {
    try {
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
          const content = { id: "5", offset: "10" };

          ch.sendToQueue(queue, Buffer.from(JSON.stringify(content)), {
            correlationId: corr,
            replyTo: q.queue
          });

          console.log(`Sent ${JSON.stringify(content)}`);

          ch.consume(q.queue, msg => {
            const result = JSON.parse(msg.content);
            console.log(`Receive ${JSON.stringify(result)}`);
            res.send({
              mailList: result
            });
          });
        });
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "server error"
      });
    }
  }
};

export default mailController;
