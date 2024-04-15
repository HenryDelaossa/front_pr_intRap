import { Box, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
const MiniDashBoard = ({ data }) => {
  const [renderData, setRenderData] = useState(null);
  useEffect(() => {
    setRenderData(data);
  }, [data]);
  return (
    <Box>
      <Grid container>
        {renderData?.map(({ key, val }, index) => (
          <Grid key={index} item xs={12} sx={{ display: "flex" }}>
            <>
              <Typography sx={{ m: 0 }} variant="body1">
                {`${String(key).toUpperCase()}: `}
              </Typography>
              <Typography
                variant="caption"
                sx={{ paddingTop: 0.5, fontWeight: "bold" }}>
                {typeof val === "object"
                  ? val?.nombre || val?.map((elem) => elem?.nombre).join(", ")
                  : val}
              </Typography>
            </>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MiniDashBoard;
