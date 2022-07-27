import LoginIcon from '@mui/icons-material/Login';
import { Button } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React, { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../App.css';

export const DrawerTab = ({ mode, setMode }) => {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <Button
                  color="inherit"
                  variant="text"
                  startIcon={<HomeIcon />}
                  onClick={() => navigate('/')}
                >
                  Home
                </Button>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <Button
                  color="inherit"
                  variant="text"
                  onClick={() => navigate('/health-experts')}
                >
                  <PersonOutlinedIcon />
                  Find Health Experts and Tests
                </Button>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <Button
                  color="inherit"
                  variant="text"
                  startIcon={<LoginIcon />}
                  onClick={() => navigate('/signup')}
                >
                  Login / signup
                </Button>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <Button
                  style={{ marginLeft: 'auto' }}
                  onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                  color="inherit"
                  startIcon={
                    mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />
                  }
                >
                  {mode === 'light' ? 'dark' : 'light'} mode
                </Button>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <ShoppingCartIcon id="shopping-icon" sx={{ marginLeft: 'auto' }} />

      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuOutlinedIcon />
      </IconButton>
    </React.Fragment>
  );
};
