export default async function fetchData(URI) {
  const response = await fetch(URI);
  // console.log("fetchData", response.json());
  const json = await response.json();
  console.log("json", json);
  return json;
}
