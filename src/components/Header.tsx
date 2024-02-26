import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const styles = {
  color: "white",
  margin: "0.5rem",
  textDecoration: "none",
};

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" mr={"auto"}>
          LEARNIT
        </Typography>
        <Link style={styles} to={"/"}>Home</Link>
        <Link style={styles} to={"/login"}>Login</Link>
      </Toolbar>
    </AppBar>
  );
};
