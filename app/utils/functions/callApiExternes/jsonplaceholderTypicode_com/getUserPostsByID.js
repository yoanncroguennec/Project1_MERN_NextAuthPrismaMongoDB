export default async function getUserPostsByID(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch user posts");
  }
  return res.json();
}
