import {
  getLocaleStorageItem,
  setLocaleStorageItem,
} from "../helpers/functions";
import { KEYS_LOCALESTORAGE } from "../helpers/vars";

export const getUsuarios = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const usuarios = getLocaleStorageItem(KEYS_LOCALESTORAGE.USUARIOS);
        resolve(usuarios);
      } catch (error) {
        reject(false);
      }
    }, 2000);
  });
};

export const getUsuarioByDocumento = async (documento) => {
  try {
    const usuarios = await getUsuarios();
    const usuario = usuarios?.find((user) => user?.documento === documento);
    return usuario;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const setUsuarioData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const usuario = setLocaleStorageItem(KEYS_LOCALESTORAGE.USUARIO, data);
        resolve(usuario);
      } catch (error) {
        reject(false);
      }
    }, 2000);
  });
};
