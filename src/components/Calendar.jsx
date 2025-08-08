import React, { useState } from 'react';
import { Box, Grid, Paper, Button, CssBaseline, Typography, Divider, IconButton, Card, CardContent } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const drawerWidth = 250;

const eventsToday = [
  {
    time: '9:00 AM',
    title: 'Team Standup',
    location: 'Video Call',

  },
  {
    time: '2:00 PM',
    title: 'Client Presentation',
    location: 'Conference Room A',

  },
  {
    time: '6:00 PM',
    title: 'Tech Conference 2024',
    location: 'San Francisco, CA',

  }
];

const upcomingEvents = [
  { date: '28 JUL', title: 'Marketing Workshop', time: '2:00 PM - 5:00 PM' },
  { date: '02 AUG', title: 'Design Meetup', time: '7:00 PM - 10:00 PM' },
];

const Calendar = () => {
  const [selectedMenu, setSelectedMenu] = useState('Calender');
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);

  const handlePrevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const renderCalendarCells = () => {
    const totalCells = firstDay + daysInMonth;
    const cells = [];

    for (let i = 0; i < totalCells; i++) {
      if (i < firstDay) {
        cells.push(
          <Grid item xs={1.71} key={`empty-${i}`}>
            <Box height={60}></Box>
          </Grid>
        );
      } else {
        const day = i - firstDay + 1;
        cells.push(
          <Grid item xs={1.71} key={day}>
            <Box
              height={60}
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius={1}
              bgcolor={day === 15 ? '#eef1ff' : 'transparent'}
              color={day === 15 ? '#6C63FF' : 'inherit'}
            >
              {day}
            </Box>
          </Grid>
        );
      }
    }

    return cells;
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <Topbar selectedMenu={selectedMenu} drawerWidth={drawerWidth} />
      <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} drawerWidth={drawerWidth} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: `${drawerWidth}px`,
          marginTop: '64px'
        }}
      >
        <Paper
          elevation={1}
          sx={{
            p: 3,
            mb: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >

          <Box display="flex" alignItems="center" gap={2}>
            <IconButton onClick={handlePrevMonth}>
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <Typography variant="h6" fontWeight="bold">
              {monthNames[currentMonth]} {currentYear}
            </Typography>
            <IconButton onClick={handleNextMonth}>
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>


          <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
            <Button variant="outlined">Month</Button>
            <Button variant="outlined">Week</Button>
            <Button variant="outlined">Day</Button>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{ backgroundColor: '#6C63FF' }}
            >
              Add Event
            </Button>
          </Box>
        </Paper>

        <Grid container spacing={2}>

          <Grid item xs={12} md={8}>
            <Paper elevation={1} sx={{ p: 3 }}>
              <Grid container spacing={1}>
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
                  <Grid item xs={1.71} key={day}>
                    <Typography variant="subtitle2" align="center">{day}</Typography>
                  </Grid>
                ))}
                {renderCalendarCells()}
              </Grid>
            </Paper>
          </Grid>
        </Grid>


        <Grid item xs={12} md={4}>
          <Paper elevation={1} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Today's Events</Typography>
            {eventsToday.map((event, index) => (
              <Box key={index} mb={2}>
                <Typography variant="subtitle2" color="#6C63FF">{event.time}</Typography>
                <Typography fontWeight="bold">{event.title}</Typography>
                <Typography variant="body2" color="text.secondary">{event.location}</Typography>
                <Divider sx={{ my: 1 }} />
              </Box>
            ))}

            <Typography variant="h6" gutterBottom mt={4}>Upcoming This Week</Typography>
            {upcomingEvents.map((event, index) => (
              <Paper key={index} sx={{ p: 2, my: 1, backgroundColor: '#f4f6ff' }}>
                <Typography variant="caption" color="text.secondary">{event.date}</Typography>
                <Typography fontWeight="bold">{event.title}</Typography>
                <Typography variant="body2" color="text.secondary">{event.time}</Typography>
              </Paper>
            ))}
          </Paper>
        </Grid>

      </Box>
    </Box>


  );
};

export default Calendar;
