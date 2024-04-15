import { useNavigate } from "react-router-dom";
import materias from "../../../../jsons/materia_profesor.json";
import { valorCredito } from "../../../../jsons/vallorCredito.json";
import { setLocaleStorageItem } from "../../../helpers/functions";
import { KEYS_LOCALESTORAGE, ROUTES_DOM } from "../../../helpers/vars";
import { getUsuarios } from "../../../services/usuarioService";
import useNotification from "../../../shared/Hooks/useNotificationContext";

const useRegistroEstudialtilPage = () => {
  const { handleNotification } = useNotification();
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      // actualizar data de usuarios
      let usuarios = (await getUsuarios(KEYS_LOCALESTORAGE.USUARIOS)) || [];
      if (
        usuarios &&
        usuarios.some((user) => user?.documento === values?.documento)
      )
        throw new Error(
          "ya existe un usuario registrado con este numero de documento"
        );
      usuarios?.push(values);
      setLocaleStorageItem(KEYS_LOCALESTORAGE.USUARIOS, usuarios);
      handleNotification({ msg: "Registrado correctamente" });
      return navigate(ROUTES_DOM.LOGIN, { replace: true });
    } catch (error) {
      handleNotification({ msg: error.message || "Error", type: "error" });
    }
  };
  return { handleSubmit, materias: materias, valorCredito };
};

export default useRegistroEstudialtilPage;
