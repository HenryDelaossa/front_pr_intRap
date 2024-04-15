import { Button, CircularProgress } from "@mui/material";
import { pink } from "@mui/material/colors";
const CustomButton = ({
  name,
  type,
  isSubmitting,
  disabledButton,
  ...props
}) => {
  return (
    <Button
      disableFocusRipple
      disableRipple
      fullWidth
      type={type}
      variant="contained"
      disabled={disabledButton || isSubmitting}
      sx={{ background: pink[900] }}
      {...props}>
      {isSubmitting ? <CircularProgress size={25} /> : name}
    </Button>
  );
};

export default CustomButton;
