const contentful = require("contentful");

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=86400");
  const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: process.env.CONTENTFUL_SPACE_ID,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: process.env.CONTENTFUL_DELIVER_API_ACCESS_TOKEN,
  });
  // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
  const response = await client.getEntries();
  const items = response.items;
  const nftList = items.filter(
    (item) => item.sys.contentType.sys.id === "athlete"
  );
  const payload = [];
  nftList.forEach((item) => {
    payload.push(item.fields);
  });
  //@TODO: Add error handling
  res.status(200).json({ players: payload });
}
