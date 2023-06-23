const fetchData = async (setProducts) => {
  const products = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );
  setProducts(products.products);
};

export { fetchData };
