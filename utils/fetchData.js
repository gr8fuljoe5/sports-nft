export default async function fetchData(URI) {
  try {
    const response = await fetch(URI);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}
