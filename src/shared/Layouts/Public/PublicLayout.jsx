import { Link, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { pink } from "@mui/material/colors";
import Footer from "../../Components/Fotters/Footer";

const PublicLayout = () => {
  return (
    <>
      <header>
        <nav>
          <Box>
            <AppBar position="static" sx={{ background: pink[900] }}>
              <Toolbar
                sx={{ display: "flex", justifyContent: "space-between" }}>
                <Link to={"/"}>
                  <Typography variant="h6" component="div" color={"white"}>
                    Mi universidad
                  </Typography>
                </Link>
                <div>
                  <Tooltip title="Iniciar sesion">
                    <Link to={"/iniciar-sesion"}>
                      <IconButton>
                        <LoginIcon
                          sx={{ color: "white", marginRight: "1rem" }}
                        />
                      </IconButton>
                    </Link>
                  </Tooltip>
                  <Tooltip title="Registrarme">
                    <Link to={"/registro-estudiantil"}>
                      <IconButton>
                        <AppRegistrationIcon sx={{ color: "white" }} />
                      </IconButton>
                    </Link>
                  </Tooltip>
                </div>
              </Toolbar>
            </AppBar>
          </Box>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;
