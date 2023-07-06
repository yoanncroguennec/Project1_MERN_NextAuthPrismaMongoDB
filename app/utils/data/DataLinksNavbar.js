const person = {
  job: "Développeur",
  name: "Croguennec Yoann",
  age: 37,
  email: "yoann.croguennec@gmail.com"
};

export const linksNavbar = [
  {
    pathname: "/",
    name: "Accueil",
  },
  {
    pathname: "/callApiExterne/listUsers",
    name: "Liste Users",
  },
  {
    pathname: "/callApiExterne/listDogs",
    name: "Liste des chiens",
  },
  // {
  //   pathname: "/listPizzas",
  //   name: "Liste Pizzas",
  // },
  {
    pathname: "/contact",
    name: "Contact",
    query: { person: JSON.stringify(person) },
  },
];
