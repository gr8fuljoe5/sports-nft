const contentful = require("contentful");
export async function getSetsData(id) {
  const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: process.env.CONTENTFUL_SPACE_ID,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: process.env.CONTENTFUL_DELIVER_API_ACCESS_TOKEN,
  });
  // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.

  const query = id
    ? { "sys.id": id }
    : {
        "sys.contentType.sys.id": "set",
      };
  try {
    return await client.getEntries(query);
  } catch (error) {
    return error;
  }
}
