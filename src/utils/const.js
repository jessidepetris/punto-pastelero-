

export const NAME_APP = "Punto Pastelero";
export const DESCRIPTION =
  "Tienda online de productos para repostería y pastelería";
export const suma = (num1, num2) => {
  return num1 + num2;
};

export async function getData(categorias) {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${categorias}`
  );
  const data = await response.json();
  return data.results;
}