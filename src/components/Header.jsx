import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl2, setAnchorEl2] = useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
  };

  let navigate = useNavigate();
  return (
    <>
      <AppBar position="static" className="nav">
        <Toolbar>
          <Typography
            variant="h6"
            onClick={() => {
              navigate("/");
            }}
          >
            Bank Logo
          </Typography>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ color: "white", ml: 20 }}
          >
            Accounts
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link style={{ textDecoration: "none" }} to="/deposit">
                Make a deposit
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link style={{ textDecoration: "none" }} to="/withdrawal">
                Make a withdrawal
              </Link>
            </MenuItem>
          </Menu>
          <Button
            id="basic-button2"
            aria-controls={open2 ? "basic-menu2" : undefined}
            aria-haspopup="true"
            aria-expanded={open2 ? "true" : undefined}
            onClick={handleClick2}
            sx={{ color: "white", ml: 3 }}
          >
            Credit Card
          </Button>
          <Menu
            id="basic-menu2"
            anchorEl={anchorEl2}
            open={open2}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button2",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link style={{ textDecoration: "none" }} to="/transaction">
                Transaction report
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link style={{ textDecoration: "none" }} to="/creditcard">
                Apply a credit card
              </Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
