import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { crearArrayFromNumberProp } from "../../../helpers/functions";

const MainSkeleton = ({ rows = 10 }) => {
  return (
    <Box
      sx={{
        minWidth: "60vh",
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        p: 4,
      }}>
      {crearArrayFromNumberProp(rows).map((skelet) => (
        <Skeleton key={skelet} animation="wave" />
      ))}
    </Box>
  );
};

export default MainSkeleton;
