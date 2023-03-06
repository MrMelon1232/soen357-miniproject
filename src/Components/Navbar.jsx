import { AppBar, Toolbar, IconButton, Stack, Button } from "@mui/material";
import { Link } from "react-scroll";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <AppBar id="navbar" position="sticky">
      <Toolbar>
        <IconButton>
          <img
            alt="logo"
            src={require("../images/logo/Fleur de Lys.png")}
            style={{ height: 50, width: 70 }}
          />
        </IconButton>
        <IconButton>
          <img
            alt="logo"
            src={require("../images/logo/logo_miniproject.png")}
            style={{ height: 30, width: 90 }}
          />
        </IconButton>
      </Toolbar>
      <Stack direction="row" justifyContent="flex-end" columnGap={2}>
        <Button id="nav-button" color="inherit">
          <Link
            id="link"
            to="Problem"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={closeMenu}
          >
            Problem
          </Link>
        </Button>
        <Button id="nav-button" color="inherit">
          <Link
            id="link"
            to="Research"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={closeMenu}
          >
            Research
          </Link>
        </Button>
        <Button id="nav-button" color="inherit">
          <Link
            id="link"
            to="Analysis"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={closeMenu}
          >
            Analysis
          </Link>
        </Button>
        <Button id="nav-button" color="inherit">
          <Link
            id="link"
            to="VisualDesign"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={closeMenu}
          >
            Visual Design
          </Link>
        </Button>
        <Button id="nav-button" color="inherit">
          <Link
            id="link"
            to="FinalDesign"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={closeMenu}
          >
            Final Design
          </Link>
        </Button>
      </Stack>
    </AppBar>
  );
};
export default Navbar;
