const articles = [
  {
    id: 1,
    title: "Article 1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquet aliquet, nisl nunc aliquet nunc, eget euismod nunc nisl eget aliquet aliquet.",
    approved: true,
  },
  {
    id: 2,
    title: "Article 2",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquet aliquet, nisl nunc aliquet nunc, eget euismod nunc nisl eget aliquet aliquet.",
    approved: false,
  },
];

let articlesData = {
  findAll: () => Promise.resolve(articles),
  create: ({ title, body, approved }) => {
    const id = articles[articles.length - 1].id + 1;
    const articleData = { id, title, body, approved };
    articles.push(articleData);
    return Promise.resolve(articles);
  },
};

module.exports = {
  Article: articlesData,
};
