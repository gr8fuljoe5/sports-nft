export const protocol = () => {
  return process.env.NODE_ENV !== "production" ? "http://" : "https://";
};
