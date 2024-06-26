import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import React from "react";
import StacklineLogo from "./StacklineLogo";

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="medium"
                edge="start"
                color="primary"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <StacklineLogo/>
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Header