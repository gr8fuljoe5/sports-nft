export default async function fetchData(URI) {
  const response = await fetch(URI);
  return await response.json();
}
