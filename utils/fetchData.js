export default async function fetchData(URI) {
  const response = await fetch(URI);
  console.log("fetchData", response);
  return await response.json();
}
