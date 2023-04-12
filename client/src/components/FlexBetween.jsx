//import BOX and STYLED from material-ui
import { Box } from "@mui/material";
import { styled } from "@mui/system";

//create a new component called FlexBetween
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;