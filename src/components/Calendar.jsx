import React, { useState } from 'react';
import { Box, Grid, Button, CssBaseline, Typography, Divider, IconButton, Card, CardContent } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const drawerWidth = 250;

const eventsToday = [
  { time: '9:00 AM', title: 'Team Standup', location: 'Video Call' },
  { time: '2:00 PM', title: 'Client Presentation', location: 'Conference Room A' },
  { time: '6:00 PM', title: 'Tech Conference 2024', location: 'San Francisco, CA' }
];

const upcomingEvents = [
  { date: '28 JUL', title: 'Marketing Workshop', time: '2:00 PM - 5:00 PM' },
  { date: '02 AUG', title: 'Design Meetup', time: '7:00 PM - 10:00 PM' }
];

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const Calendar = () => {
  const [selectedMenu, setSelectedMenu] = useState('Calender');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handlePrevMonth = () => {
    setCurrentMonth(prev => (prev === 0 ? 11 : prev - 1));
    if (currentMonth === 0) {
      setCurrentYear(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => (prev === 11 ? 0 : prev + 1));
    if (currentMonth === 11) {
      setCurrentYear(prev => prev + 1);
    }
  };

  const buttonStyles = {
    borderRadius: '10px',
    background: 'rgb(248, 250, 252)',
    color: 'black',
    border: '1px solid rgb(226, 232, 240)',
  };

  const buttonContainedStyles = {
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #667eea, #764ba2 100%)',
    color: 'white',
    px: 1,
    py: 1,
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <Topbar selectedMenu={selectedMenu} drawerWidth={drawerWidth} />
      <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} drawerWidth={drawerWidth} />

      <Box component="main" 
      sx={{ 
        flexGrow: 1, p: 3, 
        marginLeft: `${drawerWidth}px`, 
        marginTop: '64px' }}>
           <Box 
           sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            gap: 3,
            mb: 4,
            }}>
                 
        <Box
        sx={{
          flex: { xs: '100%', md: 12 },
          minWidth: { xs: '100%', md: '0' },
        }}>
          <Card
          sx={{
            borderRadius: 4,
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
            px: 3,
              }}
            >
               <CardContent>
                <Box
                sx={{   
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  flexWrap: 'wrap' }}>

          <Box display="flex" alignItems="center" gap={2}>
            <IconButton onClick={handlePrevMonth}><ArrowBackIosNewIcon fontSize="small" /></IconButton>
            <Typography variant="h6" fontWeight="bold">{monthNames[currentMonth]} {currentYear}</Typography>
            <IconButton onClick={handleNextMonth}><ArrowForwardIosIcon fontSize="small" /></IconButton>
          </Box>

          <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
            <Button variant="outlined" sx={buttonStyles}>Month</Button>
            <Button variant="outlined" sx={buttonStyles}>Week</Button>
            <Button variant="outlined" sx={buttonStyles}>Day</Button>
            <Button variant="contained" startIcon={<AddIcon />} sx={buttonContainedStyles}>Add Event</Button>
          </Box>
        </Box>
        </CardContent>
        </Card>
        </Box>
        </Box>

        <Box 
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          gap: 3,
          mb: 4,
        }}>
         
        <Box
        sx={{
          flex: { xs: '100%', md: 8 },
          minWidth: { xs: '100%', md: '0' },
        }}>
            <Card
            sx={{
              borderRadius: 4,
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              width: '100%',
              height: '100%', 
              
            }}>
              
              <CardContent sx={{ width: '100%', px: 2, py: 2 }}>
                
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar sx={{ maxWidth: '100%', mx: 'auto' }} />
                    </LocalizationProvider>
                
              </CardContent>
           </Card>
        </Box>

           <Box
            sx={{
              flex: { xs: '100%', md: 4 },
              minWidth: { xs: '100%', md: '0' },
            }}>
              <Card
            sx={{
              borderRadius: 4,
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              width: '100%',
              height: '100%',
              
            }}>
              <CardContent sx={{p: 3}}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', mb: 3, borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
                <Typography variant="h6" fontWeight={600}>Today's Events</Typography>
              </Box>
              {eventsToday.map((event, index) => (
                <Box key={index} display="flex" alignItems="center" sx={{ flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 2, sm: 0 } }} mb={2}>
                  <Box sx={{ background: 'linear-gradient(135deg, #667eea, #764ba2 100%)', color: 'white', borderRadius: 2, px: 2, py: 4, textAlign: 'center', mr: 2 }}>
                    <Typography variant="subtitle2">{event.time}</Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography fontWeight="bold">{event.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{event.location}</Typography>
                    <Divider sx={{ my: 1 }} />
                  </Box>
                </Box>
              ))}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', mb: 3, borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
                <Typography variant="h6" gutterBottom mt={4} fontWeight={600}>Upcoming This Week</Typography>
              </Box>
              {upcomingEvents.map((event, index) => (
                <Box key={index} sx={{ p: 2, my: 1, backgroundColor: '#f4f6ff' }}>
                  <Typography variant="caption" color="text.secondary">{event.date}</Typography>
                  <Typography fontWeight="bold">{event.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{event.time}</Typography>
                </Box>
              ))}
            </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;

