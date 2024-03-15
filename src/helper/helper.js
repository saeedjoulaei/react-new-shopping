const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join("");
};

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );
  return searchedProducts;
};
const filterProducts = (products, category) => {
  if (!category) return products;
  const filterdProducts = products.filter((p) => p.category === category);
  return filterdProducts;
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.categorie === "all") {
    const { categorie, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};
const getInitialQuery = (searchParams) => {
  const query = {};
  const categorie = searchParams.get("categorie");
  const search = searchParams.get("search");

  if (categorie) query.categorie = categorie;
  if (search) query.search = search;
  return query;
};
const sumProducts = (products) => {
  const itemsCounter = products.reduce((acc, cur) => acc + cur.quantity, 0);
  const total = products
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);
  return { itemsCounter, total };
};
const productQuantity = (state, id) => {
  const index = state.selectedItem.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItem[index].quantity;
  }
};
export {
  shortenText,
  searchProducts,
  filterProducts,
  createQueryObject,
  getInitialQuery,
  sumProducts,
  productQuantity,
};
