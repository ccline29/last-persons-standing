//import BOX and STYLED from material-ui
import { Box } from "@mui/material";
import { styled } from "@mui/system";

//uses BOX from MUI to apply styling and the theme param to access the theme object
const WidgetWrapper = styled(Box)(({ theme }) => ({
  padding: "1.5rem 1.5rem 0.75rem 1.5rem",
  backgroundColor: theme.palette.background.alt,
  borderRadius: "0.75rem",
}));

export default WidgetWrapper;