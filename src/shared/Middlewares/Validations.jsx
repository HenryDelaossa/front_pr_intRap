import { json, redirect } from "react-router-dom";
import { getLocaleStorageItem, throwErrorPage } from "../../helpers/functions";
import { KEYS_LOCALESTORAGE, ROUTES_DOM } from "../../helpers/vars";
import { getTasaCambio } from "../../services/tasaDeCambioService";

export const privateMdlwrLoader = async () => {
  try {
    /** obtencion data de usuario */
    const usuario = getLocaleStorageItem(KEYS_LOCALESTORAGE.USUARIO);
    if (!usuario) return redirect(ROUTES_DOM.HOME);
    const tasaCambio = await getTasaCambio();
    return json({ usuario, tasaCambio });
  } catch (error) {
    throwErrorPage(error);
  }
};

export const publicMidlwrLoader = () => {
  try {
    const usuario = getLocaleStorageItem(KEYS_LOCALESTORAGE.USUARIO);
    if (usuario) return redirect(`/${ROUTES_DOM.MICUENTA}`);
    return json({ usuario });
  } catch (error) {
    throwErrorPage(error);
  }
};

/* */
// function ValidationsComponent() {
//   const { usuario } = useLoaderData();
//   if (!usuario) {
//     return <Navigate to={"/"} />;
//   }
//   return <Outlet />;
// }
// export default ValidationsComponent;
