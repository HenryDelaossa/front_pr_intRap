import { useEffect, useState } from "react";
import { Link, useRouteError } from "react-router-dom";

// Lista de que significan los HTTPERRORS
const HTTPERRORS = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  408: "Request Timeout",
  500: "Internal Server Error",
  509: "No Available",
};

/**
 * El componente ErrorPage muestra un mensaje de error con el código de estado y el mensaje, y proporciona un
 * enlace para volver a la página principal.
 * @returns Se devuelve el componente ErrorPage.
 */
const ErrorPage = () => {
  const error = useRouteError();
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setStatus(error.status);
    setMessage(error.data);
  }, [error]);

  return (
    <div id="error-page">
      <h1>¡Ooops!</h1>
      <p>
        Error: {status} {HTTPERRORS[status] || ""}
      </p>

      <p>
        <i>{message}</i>
      </p>
      <Link to={"/"}>Ir al Inicio</Link>
    </div>
  );
};

export default ErrorPage;
