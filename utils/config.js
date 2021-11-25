export const protocol =
  process.env.VERCEL_URL === "localhost:3000"
    ? "http://localhost:3000"
    : `https://${process.env.VERCEL_URL}`;
