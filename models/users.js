const users = [
  {
    id: 1,
    username: "Andika",
    email: `andika@yopmail.com`,
  },
  {
    id: 2,
    username: "Kezia",
    email: `kezia@yopmail.com`,
  },
  {
    id: 3,
    username: "Bima",
    email: `bima@yopmail.com`,
  },
];

module.exports = {
  findAll: () => Promise.resolve(users),
  create: ({ username, email }) => {
    const id = users[users.length - 1].id + 1;
    const userData = { id, username, email };
    users.push(userData);
    return Promise.resolve(users);
  },
};
