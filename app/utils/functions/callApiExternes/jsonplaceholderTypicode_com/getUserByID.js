export default async function getUserByID(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
}
