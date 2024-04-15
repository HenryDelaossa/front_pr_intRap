import { Box, Typography } from "@mui/material";
import FormLogin from "./FormLogin";
import useLoginPage from "./useLoginPage";

const Login = () => {
  const { handleSubmit } = useLoginPage();
  return (
    <main>
      <section style={{ minHeight: "80vh" }}>
        <Box sx={{ padding: 0 }}>
          <Typography sx={{ marginTop: 2 }}>Iniciar sesion</Typography>
          <FormLogin handleSubmit={handleSubmit} />
        </Box>
      </section>
    </main>
  );
};

export default Login;
