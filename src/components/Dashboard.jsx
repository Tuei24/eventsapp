
import React from 'react'
import { useState } from 'react'
import { Box, CssBaseline, Grid, Card, CardContent, Typography, Stack, Button } from '@mui/material'
import { Box, CssBaseline, Grid, Card, CardContent, Typography, Stack } from '@mui/material'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Groups2Icon from '@mui/icons-material/Groups2';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';



const drawerWidth = 250;

const DashboardCard = ({ title, value, percentage, icon, iconBg }) => (

  <Card
    sx={{
      height: '100%',
      width: '100%',
      borderRadius: 4,
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      pl: 3,
      pr: 15,
      pt: 3,

    }}
  >
    <CardContent sx={{ p: 0 }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Box
          sx={{
            background: iconBg,
            width: 60,
            height: 60,
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="700" sx={{ lineHeight: 1.9 }}>
            {value}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5, pb: 1 }}>
            {title}
          </Typography>
          <Box sx={{
            mt: 0.5,
            backgroundColor: percentage === '0%' ? '#f1f5f9' : '#dcfce7',
            color: percentage === '0%' ? '#64748b' : '#16a34a',
            borderRadius: 2,
            px: 1,
            py: 0.25,
            fontSize: 14,
            display: 'inline-block',
            fontWeight: 600,

          }}>{percentage}</Box>


        </Box>
      </Stack>
    </CardContent>
  </Card >
);

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState('Dashboard');

  const cardData = [
    {
      title: 'Total Events',
      value: '24',
      percentage: '+12%',
      icon: <EventAvailableIcon sx={{ fontSize: 35 }} />,
      iconBg: 'linear-gradient(135deg, #667eea, #764ba2 100%)',
    },
    {
      title: 'Total Attendees',
      value: '1,247',
      percentage: '+8%',
      icon: <Groups2Icon sx={{ fontSize: 35 }} />,
      iconBg: 'linear-gradient(135deg, #f093fb, #f5576c 100%)',
    },
    {
      title: 'Upcoming Events',
      value: '8',
      percentage: '0%',
      icon: <AccessTimeFilledIcon sx={{ fontSize: 35 }} />,
      iconBg: 'linear-gradient(135deg, #4facfe, #00f2fe 100%)',
    },
    {
      title: 'Revenue',
      value: '$45,230',
      percentage: '+15%',
      icon: <AttachMoneyIcon sx={{ fontSize: 35 }} />,
      iconBg: 'linear-gradient(135deg, #43e97b, #38f9d7 100%)',
    },
  ];

  const upcomingEvents = [
    {
      date: { day: '25', month: 'JUL' },
      title: 'Tech Conference 2024',
      location: 'San Francisco, CA',
      time: '9:00 AM – 6:00 PM',

    },
    {
      date: { day: '28', month: 'JUL' },
      title: 'Marketing Workshop',
      location: 'New York, NY',
      time: '2:00 PM – 5:00 PM',

    },
    {
      date: { day: '02', month: 'AUG' },
      title: 'Design Meetup',
      location: 'Los Angeles, CA',
      time: '7:00 PM – 10:00 PM',

    },
  ];


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Topbar selectedMenu={selectedMenu} drawerWidth={drawerWidth} />
      <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} drawerWidth={drawerWidth} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
          ml: 0,
          mt: '64px',
          p: 3,
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        <Grid container spacing={3} sx={{ height: '10vh' }} >
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <DashboardCard
                value={card.value}
                title={card.title}
                percentage={card.percentage}
                icon={card.icon}
                iconBg={card.iconBg}
              />
            </Grid>
          ))}
        </Grid>



        <Grid container spacing={3} sx={{ mt: 20, pr: 60 }}>
          <Grid item xs={12} md={8}>
            <Card sx={{
              pl: 3,
              pr: 20,
            }}>

              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    padding: '1rem 1.5rem',

                  }}>
                  <CalendarMonthIcon /><Typography variant="h6" fontWeight={600}  >
                    Upcoming Events
                  </Typography>
                </Box>
                <Stack spacing={5}>
                  {upcomingEvents.map((event, index) => (
                    <Box key={index} display="flex" justifyContent="space-between" >
                      <Box display="flex" alignItems="center">
                        <Box
                          sx={{
                            background: 'linear-gradient(135deg, #667eea, #764ba2 100%)',
                            color: 'white',
                            borderRadius: 2,
                            px: 2,
                            py: 1,
                            textAlign: 'center',
                            mr: 2,

                          }}
                        >
                          <Typography variant="h5" fontWeight="600">{event.date.day}</Typography>
                          <Typography variant="caption">{event.date.month}</Typography>
                        </Box>
                        <Box>
                          <Typography fontWeight={600}>{event.title}</Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ py: 1 }}>
                            {event.location}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {event.time}
                          </Typography>
                        </Box>
                      </Box>

                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
