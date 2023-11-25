import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
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
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { label: "Home", target: "home-section" },
  { label: "About Us", target: "about-section" },
  { label: "Services", target: "services-section" },
  { label: "Team", target: "team-section" },
  { label: "Contact Us", target: "contact-section" },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
   const LoginForMessage =()=>{
    navigate('/login')
   }
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map((items) => (
          <ListItem key={items} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ScrollLink
                to={items.target}
                spy={true}
                smooth={true}
                duration={500}
                offset={-64} // Adjust this offset based on your layout
              >
                <ListItemText primary={items.label} />
              </ScrollLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Desktop */}
      <AppBar component="nav" sx={{ background: "white" }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            padding: "8px 24px",
            mx: "50px",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: "block" } }}
          >
            <Toolbar>
              <Box
                component="img"
                sx={{
                  height: 64,
                }}
                alt="Your logo."
                src="https://techviochats.com/img/logo.png"
                onClick={handleScrollToTop}
              />
            </Toolbar>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
               
                sx={{
                  fontFamily: "sans-serif",
                  fontWeight: "600",
                  color: "#2a2424",
                  "&:hover": {
                    color: "blue",
                  },
                }}
              >
                <ScrollLink
                  to={item.target}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-64}
                >
                  {item.label}
                </ScrollLink>
              </Button>
            ))}
             <Button className="bg-info fw-bold text-black" onClick={LoginForMessage}
                >Login</Button>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "block", md: "none" },
              color: "black",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Mobile */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
