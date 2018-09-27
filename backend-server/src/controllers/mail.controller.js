import { amqpConnection } from "../utils";

const mailController = {
  getMailList: async (req, res) => {
    try {
      const queue = "get_email_queue";

      const amqpClient = await amqpConnection();
      const { channel, q, corr } = amqpClient;

      const content = { id: "5", offset: "10" };

      channel.sendToQueue(queue, Buffer.from(JSON.stringify(content)), {
        correlationId: corr,
        replyTo: q.queue
      });

      console.log(`Sent ${JSON.stringify(content)}`);

      channel.consume(q.queue, msg => {
        const result = JSON.parse(msg.content);
        console.log(`Receive ${JSON.stringify(result)}`);
        res.send({
          mailList: result
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
