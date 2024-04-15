import axios from "axios";

const axiosTasaCambio = axios.create({
  baseURL: "https://api.frankfurter.app",
});
export default axiosTasaCambio;
