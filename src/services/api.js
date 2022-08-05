export async function getCategories() {
  const urlApi = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const urlApi = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query} `;
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}