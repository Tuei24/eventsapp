
import React from 'react';
import { useEffect, useState } from 'react';
import { AppBar, Tooltip, Toolbar, Typography, Box, InputBase, IconButton, Badge, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Topbar = ({ selectedMenu, drawerWidth }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUserName(parsedUser.name || 'User');
      } catch (err) {
        console.error('Error parsing user from localStorage', err);
        setUserName('User');
      }
    } else {
      setUserName('User');
    }
  }, []);
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        backgroundColor: 'white',
        color: 'black',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" noWrap>
          <b>{selectedMenu}</b>
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#f8fafc',
              borderRadius: 2,
              px: 1,
              width: 300,
            }}
          >
            <SearchIcon sx={{ mr: 1 }} />
            <InputBase placeholder="Search events…" fullWidth />
          </Box>

          <IconButton size="large" aria-label="show 3 new notifications" color="inherit">
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Tooltip title={userName}>
              <Avatar alt={userName} />
            </Tooltip>
            <Typography variant="body1">{userName}</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
