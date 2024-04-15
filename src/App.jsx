import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@mui/material/styles";
import RouterComponent from "./routes";
import defaultTheme from "./helpers/themes";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <ToastContainer
          position="top-left"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          icon={true}
          theme="light"
        />
        <RouterComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
