import amqp from "amqplib";

export default async queueName => {
  const url = process.env.AMQP_URL || "amqp://guest:guest@localhost:5672";

  const amqpCon = await amqp.connect(url);

  const channel = await amqpCon.createChannel();

  channel.assertQueue(queueName, { durable: false });

  channel.prefetch(1000);

  return { channel };
};
