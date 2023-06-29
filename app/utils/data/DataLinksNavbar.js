const person = {
  name: "John Doe",
  age: 22,
};

export const linksNavbar = [
  {
    pathname: "/",
    name: "Accueil",
  },
  {
    pathname: "/callApiExterne/users",
    name: "Liste Users",
  },
  {
    pathname: "/callApiExterne/listDogs",
    name: "Liste des chiens",
  },
  {
    pathname: "/listPizzas",
    name: "Liste Pizzas",
  },
  {
    pathname: "about",
    name: "A propos",
    query: { person: JSON.stringify(person) },
  },
];
