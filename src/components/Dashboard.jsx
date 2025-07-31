
import React from 'react'
import { useState } from 'react'
import { Box, CssBaseline, Grid, Card, CardContent, Typography, Container, Stack } from '@mui/material'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Groups2Icon from '@mui/icons-material/Groups2';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const drawerWidth = 240;

const DashboardCard = ({ title, value, percentage, icon, iconBg }) => (
  <Card
    sx={{
      height: '100%',
      width: '100%',
      borderRadius: 4,
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      px: 3,
      py: 2,
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
            fontSize: 24,
            flexShrink: 0,

          }}
        >
          {icon}
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="700" sx={{ lineHeight: 1.2 }}>
            {value}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
          <Box sx={{
            mt: 0.5,
            backgroundColor: '#dcfce7',
            color: '#16a34a',
            borderRadius: 2,
            px: 1,
            py: 0.25,
            fontSize: 11,
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
      icon: <EventAvailableIcon />,
      iconBg: 'linear-gradient(135deg, #667eea, #764ba2 100%)',
    },
    {
      title: 'Total Attendees',
      value: '1,247',
      percentage: '+8%',
      icon: <Groups2Icon />,
      iconBg: 'linear-gradient(135deg, #f093fb, #f5576c 100%)',
    },
    {
      title: 'Upcoming Events',
      value: '8',
      percentage: '0%',
      icon: <AccessTimeFilledIcon />,
      iconBg: 'linear-gradient(135deg, #4facfe, #00f2fe 100%)',
    },
    {
      title: 'Revenue',
      value: '$45,230',
      percentage: '+18%',
      icon: <AttachMoneyIcon />,
      iconBg: 'linear-gradient(135deg, #43e97b, #38f9d7 100%)',
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
          flexGrow: 2,
          // width: { sm: `calc(100% - ${drawerWidth}px)` },

        }}
      >
        <Container >
          <Grid container spacing={3}>
            {cardData.map((card, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} sx={{
                display: 'flex'
              }} >
                <Box sx={{ width: '100%' }}>
                  <DashboardCard
                    value={card.value}
                    title={card.title}
                    percentage={card.percentage}
                    icon={card.icon}
                    iconBg={card.iconBg}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box >
  );
};

export default Dashboard;