import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 5%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="30px" color="primary">
          Star Stalker
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "92%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Star Stalker, base your entire personality on these people!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;