export default async function getDogs() {
  const res = await fetch(`https://dog.ceo/api/breeds/image/random`, {
    next: {
      revalidate: 5,
    },
  });
  const data = await res.json();
  return data;
}
