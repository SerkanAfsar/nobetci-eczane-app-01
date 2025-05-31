import { createClient } from "redis";

const client = createClient({
  url: process.env.STORAGE_REDIS_URL,
});

client.on("error", (err) => {
  console.error("Redis Client Error", err);
});

if (!client.isOpen) {
  await client.connect();
}

export default client;
