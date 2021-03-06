import mailList from "./mailList";
import amqpConnection from "./amqpConnection";

const queueName = "get_email_queue";
const emailService = async () => {
  const amqpClient = await amqpConnection(queueName);
  const { channel } = amqpClient;
  channel.consume(queueName, msg => {
    const content = JSON.parse(msg.content);
    const reply = JSON.stringify(mailList);
    console.log(content);
    channel.ack(msg);
    channel.sendToQueue(msg.properties.replyTo, Buffer.from(reply), {
      correlationId: msg.properties.correlationId
    });
  });
};

emailService();
