const contentful = require("contentful");

export default async function handler(req, res) {
  // res.setHeader("Cache-Control", "s-maxage=86400");
  const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: process.env.CONTENTFUL_SPACE_ID,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: process.env.CONTENTFUL_PREVIEW_API_ACCESS_TOKEN,
    host: "preview.contentful.com",
  });
  // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
  try {
    const response = await client.getEntries({
      "sys.contentType.sys.id": "set",
    });
    const items = response;
    //@TODO: Add error handling
    res.status(200).json({ content: items });
  } catch (error) {
    res.status(400).json({ error });
  }
}
