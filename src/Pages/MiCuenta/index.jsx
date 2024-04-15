import { useNavigation } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import MainSkeleton from "../../shared/Components/Loaders/LoaderComponent";
import Maintable from "../../shared/Components/Tables/MainTable";
import useMicuentaPage from "./useMicuentaPage";
const MiCuenta = () => {
  const { table } = useMicuentaPage();
  const navigation = useNavigation();

  if (navigation.state === "loading") return <MainSkeleton rows={20} />;
  return (
    <main>
      <section>
        <Typography variant="h6">Mis materias inscritas</Typography>
        <Box sx={{ padding: 12, minHeight: "70vh" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Maintable
                {...{ ...table, tableBodyData: table.tableBodyData() }}
              />
            </Grid>
          </Grid>
        </Box>
      </section>
    </main>
  );
};

export default MiCuenta;
