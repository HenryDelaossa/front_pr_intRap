import { Box, Typography, Grid } from "@mui/material";
const Home = () => {
  return (
    <main>
      <section>
        <Box sx={{ p: 3, minHeight: "80vh" }}>
          <Typography variant="h2" fontWeight={"bold"}>
            Noticias
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography textAlign={"justify"}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deserunt optio nostrum dolor est pariatur qui incidunt? Nulla
                recusandae tempore, illum modi neque earum nostrum unde ipsum
                suscipit maiores quaerat! Molestias. Tenetur, unde aperiam esse
                excepturi, animi aut debitis pariatur perspiciatis doloremque
                quo quae neque. Id at qui eius officiis voluptas accusantium
                dolores enim nemo excepturi omnis labore, minus perferendis
                totam! Facere suscipit qui eius ea, sed repellat aut quia
                repellendus natus quod cumque explicabo. Esse, molestiae cumque
                ut voluptatem velit corporis. Velit ullam sequi porro deserunt
                vitae minima sus
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography textAlign={"justify"}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deserunt optio nostrum dolor est pariatur qui incidunt? Nulla
                recusandae tempore, illum modi neque earum nostrum unde ipsum
                suscipit maiores quaerat! Molestias. Tenetur, unde aperiam esse
                excepturi, animi aut debitis pariatur perspiciatis doloremque
                quo quae neque. Id at qui eius officiis voluptas accusantium
                dolores enim nemo excepturi omnis labore, minus perferendis
                totam! Facere suscipit qui eius ea, sed repellat aut quia
                repellendus natus quod cumque explicabo. Esse, molestiae cumque
                ut voluptatem velit corporis. Velit ullam sequi porro deserunt
                vitae minima sus
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </section>
    </main>
  );
};

export default Home;
