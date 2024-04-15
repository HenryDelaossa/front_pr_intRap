import { NavLink } from "react-router-dom";
import {
  Tooltip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const MenuItemList = ({ to, icon, name }) => {
  return (
    <NavLink to={to}>
      <Tooltip placement="right-start" title={name}>
        <ListItemButton
          sx={{
            minHeight: 48,
            px: 2.5,
          }}>
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}>
            {icon}
          </ListItemIcon>
          <ListItemText primary={name} />
        </ListItemButton>
      </Tooltip>
    </NavLink>
  );
};

export default MenuItemList;
