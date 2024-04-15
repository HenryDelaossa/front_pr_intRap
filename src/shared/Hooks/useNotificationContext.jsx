import { toast } from "react-toastify";
import { pink } from "@mui/material/colors";
const useNotification = () => {
  const handleNotification = ({ msg, type = "success" }) => {
    toast[type](msg, {
      progressStyle: { background: type === "error" ? "red" : pink[600] },
      progressClassName: "toast_succes_progress",
    });
  };
  return { handleNotification };
};

export default useNotification;
