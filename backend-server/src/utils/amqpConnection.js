import amqp from "amqplib";
import uuid from "uuid/v4";

export default async () => {
  const url = process.env.AMQP_URL || "amqp://guest:guest@localhost:5672";

  const corr = uuid();

  const amqpCon = await amqp.connect(url);

  const channel = await amqpCon.createChannel();

  const q = await channel.assertQueue("", {
    exclusive: true,
    expires: 5000,
    autodelete: true
  });
  return { channel, q, corr };
};
