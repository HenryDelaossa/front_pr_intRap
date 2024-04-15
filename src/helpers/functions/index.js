/** localstorage */
export const getLocaleStorageItem = (key) => {
  const itemData = localStorage.getItem(key);
  return itemData ? JSON.parse(itemData) : null;
};

export const setLocaleStorageItem = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocaleStorageItem = (key) => {
  return localStorage.removeItem(key);
};

/**
 * La función `throwErrorPage` lanza un error con un mensaje personalizado y un código de estado.
 * @param error - El parámetro `error` es un objeto que contiene información sobre el error. Se
 * Normalmente tiene dos propiedades.
 */
export const throwErrorPage = (error) => {
  throw new Response(error["message"], { status: error["status"] || 509 });
};

export const crearArrayFromNumberProp = (numero) => {
  return [...Array(Number(numero)).keys()].map((num) => num + 1);
};

/**
 * La función "convertirObjeto" convierte recursivamente un objeto anidado en un objeto plano mediante
 * concatenando las claves con un prefijo.
 * @param objeto - El parámetro `objeto` es el objeto que desea convertir en un objeto plano.
 * @param [prefijo] - El parámetro `prefijo` se usa cuando se llama la función recursivamente.
 * @param [resultado] - El parámetro `resultado` se usa cuando se llama la función recursivamente.
 * @devuelve el objeto `resultado`, que contiene los pares clave-valor convertidos desde el parámetro de entrada
 * entrada `objeto`.
 */
export const convertirObjeto = (objeto, prefijo = "", resultado = {}) => {
  for (let clave in objeto) {
    if (typeof objeto[clave] === "object") {
      convertirObjeto(objeto[clave], prefijo + clave + ".", resultado);
    } else {
      resultado[prefijo + clave] = objeto[clave];
    }
  }
  return resultado;
};
