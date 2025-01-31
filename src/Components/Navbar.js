import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

function Navbar(props) {
  const drawerWidth = 240;
  const navItems = ["My Work", "Experience", "Skills", "360"];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      style={{ backgroundColor: "rgb(247,247,247)" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          {/* <img
            src={logo}
            style={{ width: "150px", height: "50px", cursor: "pointer" }}
            alt="HD LOGO"
          ></img> */}
          <h1 style={{ color: "#2d3436" }}>HD Design</h1>
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link
              to={
                item === "My Work"
                  ? "/myWork"
                  : item === "Skills"
                  ? "/skills"
                  : item === "360"
                  ? "/360"
                  : item === "Experience"
                  ? "/experience"
                  : "/test"
              }
              style={{ textDecoration: "none", color: "#464646" }}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div className="navbar">
      <AppBar component="nav" style={{ backgroundColor: "#2d3436" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            {" "}
            <MenuIcon style={{ color: "white" }} />
            <h1>HD Design</h1>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              {/* <img
                src={logo}
                style={{
                  width: "150px",
                  height: "50px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
                alt="HD LOGO"
              ></img> */}
              <h1
                style={{
                  color: "white",
                }}
              >
                HD Design
              </h1>
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link
                to={
                  item === "My Work"
                    ? "/myWork"
                    : item === "Skills"
                    ? "/skills"
                    : item === "360"
                    ? "/360"
                    : item === "Experience"
                    ? "/experience"
                    : "/test"
                }
              >
                <Button
                  key={item}
                  sx={{ color: "white" }}
                  className="listItembtn"
                >
                  {item}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  );
}

export default Navbar;
