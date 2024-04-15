import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  publicMidlwrLoader,
  privateMdlwrLoader,
} from "../shared/Middlewares/Validations";
import MainSkeleton from "../shared/Components/Loaders/LoaderComponent";
import MainLayout from "../shared/Layouts/Main/MainLayuot";
import MiCuenta from "../Pages/MiCuenta";
import RegistroEstudiantil from "../Pages/RegistroEstudiantil";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Detalle from "../Pages/Detalle";
import { ROUTES_DOM, ROUTE_IDS } from "../helpers/vars";
import ErrorPage from "../shared/Components/Errors/ErrorPage";
import PublicLayout from "../shared/Layouts/Public/PublicLayout";

const routes = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        id: "home",
        loader: publicMidlwrLoader,
        children: [
          {
            element: <PublicLayout />,
            children: [
              {
                path: ROUTES_DOM.HOME,
                element: <Home />,
              },
              {
                path: ROUTES_DOM.LOGIN,
                element: <Login />,
              },
              {
                path: ROUTES_DOM.REGISTRO,
                element: <RegistroEstudiantil />,
              },
            ],
          },
        ],
      },
      {
        id: ROUTE_IDS.LOGGEDUSER,
        loader: privateMdlwrLoader,
        children: [
          {
            element: <MainLayout />,
            children: [
              {
                path: ROUTES_DOM.MICUENTA,
                element: <MiCuenta />,
              },
              {
                path: ROUTES_DOM.DETALLE,
                element: <Detalle />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

const RouterComponent = () => {
  return <RouterProvider router={routes} fallbackElement={<MainSkeleton />} />;
};

export default RouterComponent;
