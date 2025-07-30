// Sidebar.jsx
import React from 'react';
import { Drawer, Toolbar, Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventNoteIcon from '@mui/icons-material/EventNote';
import GroupsIcon from '@mui/icons-material/Groups';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Sidebar = ({ selectedMenu, setSelectedMenu, drawerWidth }) => {
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon sx={{ color: 'white' }} /> },
    { text: 'Calender', icon: <CalendarTodayIcon sx={{ color: 'white' }} /> },
    { text: 'Events', icon: <EventNoteIcon sx={{ color: 'white' }} /> },
    { text: 'Attendees', icon: <GroupsIcon sx={{ color: 'white' }} /> },
    { text: 'Analytics', icon: <AnalyticsIcon sx={{ color: 'white' }} /> },
    { text: 'Settings', icon: <SettingsApplicationsIcon sx={{ color: 'white' }} /> },
  ];

  const handleMenuClick = (text) => {
    setSelectedMenu(text);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >

      <Box sx={{
        overflow: 'auto',
        height: '100%',
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
      }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: 2,
            borderBottom: '1px solid rgba(255,255,255,0.2)',
            padding: '2rem 1.5rem',
          }}
        >
          <CalendarMonthIcon sx={{ mr: 1, color: 'white' }} />
          <Typography variant="h5" fontWeight="bold" >
            EventHub
          </Typography>
        </Box>

        <List sx={{ padding: '1rem 0' }}>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              selected={selectedMenu === item.text}
              onClick={() => handleMenuClick(item.text)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
