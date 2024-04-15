import { useEffect, useState } from "react";
import { useRouteLoaderData, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import {
  KEYS_LOCALESTORAGE,
  ROUTES_DOM,
  ROUTE_IDS,
} from "../../../helpers/vars";
import { pink } from "@mui/material/colors";
import { removeLocaleStorageItem } from "../../../helpers/functions";
import useNotification from "../../Hooks/useNotificationContext";

const colorIcons = pink[900];
const menuItems = [
  {
    name: "Dashboard",
    to: "/mi-cuenta",
    icon: <DashboardIcon sx={{ color: colorIcons }} />,
  },
  {
    name: "Detalle",
    to: "/detalle",
    icon: <ReadMoreIcon sx={{ color: colorIcons }} />,
  },
];

const useMainLayout = () => {
  // data loader
  const { usuario } = useRouteLoaderData(ROUTE_IDS.LOGGEDUSER);
  // hook
  const { handleNotification } = useNotification();
  const navigate = useNavigate();
  //   states
  const [titleTopBar, setTitleTopBar] = useState("");
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    try {
      removeLocaleStorageItem(KEYS_LOCALESTORAGE.USUARIO);
      handleNotification({ msg: "cierre de sesion exitoso" });
      return navigate(ROUTES_DOM.HOME, { replace: true });
    } catch (error) {
      handleNotification({ msg: error.message, type: "error" });
    }
  };
  useEffect(() => {
    setTitleTopBar(`${usuario?.nombre || ""} ${usuario?.apellido || ""}`);
  }, [usuario]);

  return {
    titleTopBar,
    menuItems,
    open,
    handleDrawerClose,
    handleDrawerOpen,
    handleLogout,
  };
};

export default useMainLayout;
