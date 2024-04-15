import { Typography, Divider, Box } from "@mui/material";
import { pink } from "@mui/material/colors";

const Footer = () => {
  return (
    <footer>
      <Box>
        <Divider
          sx={{ background: pink[900], margin: "0 auto" }}
          orientation="horizontal"
        />
        <Typography variant="caption" sx={{ fontWeight: "bold" }}>
          @by HenryOssa
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
