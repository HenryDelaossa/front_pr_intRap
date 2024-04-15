import { ROUTES_DOM } from "../../helpers/vars";
import {
  getUsuarioByDocumento,
  setUsuarioData,
} from "../../services/usuarioService";
import useNotification from "../../shared/Hooks/useNotificationContext";
import { useNavigate } from "react-router-dom";

const useLoginPage = () => {
  // hooks
  const navigate = useNavigate();
  const { handleNotification } = useNotification();

  const handleSubmit = async (values) => {
    try {
      const user = await getUsuarioByDocumento(values?.documento);
      if (!user)
        throw new Error("No existe  usuario con este numero de documento");

      await setUsuarioData(user);
      return navigate(`/${ROUTES_DOM.MICUENTA}`, { replace: true });
    } catch (error) {
      handleNotification({
        msg: error?.message || "error",
        type: "error",
      });
    }
  };

  return { handleSubmit };
};

export default useLoginPage;
