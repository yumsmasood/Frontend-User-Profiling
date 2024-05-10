import { Box } from "@mui/material";
import Login from "./login";

const AuthPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box sx={{ margin: "5px" }}>
        <Login />
      </Box>
    </Box>
  );
};

export default AuthPage;
