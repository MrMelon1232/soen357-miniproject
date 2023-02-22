import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Grid,
} from "@mui/material";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <AppBar position="static" id="navbar">
      <Toolbar>
        <IconButton></IconButton>
      </Toolbar>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
      ></Typography>
      <Stack direction="row" justifyContent="flex-end" spacing={2}>
        <Button color="inherit">
          <Link
            to="Problem"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeMenu}
          >
            Problem
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            to="Research"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
            onClick={closeMenu}
          >
            Research
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            to="Analysis"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
            onClick={closeMenu}
          >
            Analysis
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            to="VisualDesign"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
            onClick={closeMenu}
          >
            Visual Design
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            to="FinalDesign"
            spy={true}
            smooth={true}
            offset={100}
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
