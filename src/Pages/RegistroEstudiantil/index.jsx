import { Box, Typography } from "@mui/material";
import useRegistroEstudialtilPage from "./Hooks/useRegistroEstudiantilPage";
import FormRegistroEstudiantil from "./Forms/FormRegistroEstudiantil";

const RegistroEstudiantil = () => {
  const { handleSubmit, materias } = useRegistroEstudialtilPage();

  return (
    <main>
      <section>
        <Box sx={{ padding: 4, minHeight: "80vh" }}>
          <Typography variant="h4" sx={{ margin: "1rem 0" }}>
            Registro estudiantil
          </Typography>
          <FormRegistroEstudiantil {...{ handleSubmit, materias }} />
        </Box>
      </section>
    </main>
  );
};

export default RegistroEstudiantil;
