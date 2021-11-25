export default async function fetchData(URI) {
  try {
    const response = await fetch(URI);
    return await response.json();
  } catch (error) {
    return error;
  }
}
