export const protocol = () => {
  return process.env.VERCEL_URL === "localhost:3000" ? "http://" : "https://";
};
