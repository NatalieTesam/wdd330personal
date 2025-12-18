export async function getData(filename) {
  const response = await fetch(`../json/${filename}.json`);
  if (!response.ok) {
    throw new Error("Failed to load JSON");
  }
  return response.json();
}