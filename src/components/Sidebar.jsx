
import React from 'react';
import { Drawer, Toolbar, Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventNoteIcon from '@mui/icons-material/EventNote';
import GroupsIcon from '@mui/icons-material/Groups';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useNavigate } from 'react-router-dom';



const Sidebar = ({ selectedMenu, setSelectedMenu, drawerWidth }) => {
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon sx={{ color: 'white' }} />, link: '/Admin/Dashboard' },
    { text: 'Calendar', icon: <CalendarTodayIcon sx={{ color: 'white' }} />, link: '/Admin/Calendar' },
    { text: 'Events', icon: <EventNoteIcon sx={{ color: 'white' }} />, link: '/Admin/Events' },
    { text: 'Attendees', icon: <GroupsIcon sx={{ color: 'white' }} />, link: '/Admin/Attendees' },
    { text: 'Analytics', icon: <AnalyticsIcon sx={{ color: 'white' }} />, link: '/Admin/Analytics' },
    { text: 'Settings', icon: <SettingsApplicationsIcon sx={{ color: 'white' }} />, link: '/Admin/Settings' },
  ];

  let navigate = useNavigate();


  const handleMenuClick = (text, link) => {
    console.log(link, "linkkkkkk hereeeee")
    setSelectedMenu(text);
    navigate(link)


  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        position: 'fixed',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >


      <Box sx={{
        overflow: 'auto',
        height: '100%',
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
      }}
      >

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: 2,
            borderBottom: '1px solid rgba(255,255,255,0.2)',
            padding: '2rem 1.5rem',
          }}>

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
              onClick={() => handleMenuClick(item.text, item.link)}

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
