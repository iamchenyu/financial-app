import { Box } from "@mui/material";
import { styled } from "@mui/system";

// Utility for creating styled components
// in this case, we are styling Box component in MUI
// we can also style html element such as 'div', 'button' and so on
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
