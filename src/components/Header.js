import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import { Button, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { AppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DrawerTab } from './DrawerTab';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../App.css';

const Header = ({ mode, setMode }) => {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Toolbar>
          <Typography sx={{ fontSize: '1.5rem' }}>Fit Health</Typography>

          {isMatch ? (
            <>
              <DrawerTab mode={mode} setMode={setMode} />
            </>
          ) : (
            <>
              <Button
                color="inherit"
                variant="text"
                sx={{ marginLeft: '5px', fontSize: '15px' }}
                startIcon={<HomeIcon />}
                onClick={() => navigate('/')}
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                Home
              </Button>
              <Button
                color="inherit"
                sx={{ marginLeft: '5px', fontSize: '15px' }}
                variant="text"
                onClick={() => navigate('/health-experts')}
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <PersonOutlinedIcon />
                Find Health Experts and Tests
              </Button>

              <Button
                color="inherit"
                variant="text"
                sx={{ marginLeft: '5px', fontSize: '15px' }}
                startIcon={<LoginIcon />}
                onClick={() => navigate('/signup')}
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                Login / signup
              </Button>
              <ShoppingCartIcon
                id="shopping-icon"
                sx={{ marginLeft: 'auto' }}
              />
              <Button
                sx={{ marginLeft: '16px' }}
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                value={value}
                onChange={(e, value) => setValue(value)}
                color="inherit"
                startIcon={
                  mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />
                }
              >
                {mode === 'light' ? 'dark' : 'light'} mode
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
