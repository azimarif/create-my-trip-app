import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 2,
  };

  const titleStyles = {
    color: 'white',
    justifyContent: 'center',
    display: 'flex',
  };

  return (
    <AppBar position="static">
      <Toolbar sx={headerStyles}>
        <Link to={"/"}>
          <Typography variant="h6" component="div" sx={titleStyles}>
            Enchanting Travels
          </Typography>
        </Link>
        <Button variant="contained" onClick={() => navigate("/login")}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
