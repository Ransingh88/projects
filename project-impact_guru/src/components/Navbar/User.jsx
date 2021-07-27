import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { FaSignOutAlt,FaUserPlus,FaUser } from 'react-icons/fa';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Link } from "react-router-dom";


export function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    };
    
    

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ color: "white" }}
      >
        <FaUser />
        <RiArrowDownSLine />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <FaSignOutAlt />
          &nbsp; Login
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FaUserPlus />
          <Link style={{textDecoration: "none", color: "black"}} to="/start-fundraiser">&nbsp; Signup</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
