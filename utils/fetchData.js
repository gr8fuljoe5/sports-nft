export default async function fetchData(URI) {
  const response = await fetch(URI);
  console.log("fetchData", response.json());
  return await response.json();
}
