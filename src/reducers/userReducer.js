const initialUsers = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    password: "sharma850",
    thumbnail: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    password: "sharma850",
    thumbnail: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    password: "sharma850",
    phone: "1-770-456-342",
    thumbnail: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    password: "sharma850",
    thumbnail: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    password: "sharma850",
    phone: "(254)954-1289",
    thumbnail: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    thumbnail: "https://randomuser.me/api/portraits/women/8.jpg",
    phone: "1-477-935-8478 x6430",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    password: "sharma850",
    thumbnail: "https://randomuser.me/api/portraits/men/7.jpg",
    phone: "210.067.6132",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    password: "sharma850",
    thumbnail: "https://randomuser.me/api/portraits/men/15.jpg",
    phone: "586.493.6943 x140",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    password: "sharma850",
    thumbnail: "https://randomuser.me/api/portraits/women/12.jpg",
    phone: "(775)976-6794 x41206",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    password: "sharma850",
    thumbnail: "https://randomuser.me/api/portraits/women/14.jpg",
    phone: "024-648-3804",
  },
];

export const userReducer = (users = initialUsers, action) => {
  switch (action.type) {
    case "ADD_USER":
      const { user } = action.payload;
      user.id = users.at(-1).id + 1;
      return [...users, user];
    default:
      return users;
  }
};
