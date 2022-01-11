const contentful = require("contentful");
export async function getLeagueData(team) {
  const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: process.env.CONTENTFUL_SPACE_ID,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: process.env.CONTENTFUL_DELIVER_API_ACCESS_TOKEN,
  });
  // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
  try {
    let response;
    response = await client.getEntries();
    const items = response.items;
    const teamList = items.filter(
      (item) => item.sys.contentType.sys.id === "Team"
    );

    const payload = [];
    teamList.forEach((item) => {
      payload.push(item.fields);
    });
    return payload;
  } catch (error) {
    return error;
  }
}
