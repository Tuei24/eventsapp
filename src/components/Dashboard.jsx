
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
  <Card sx={{
    height: '100%',
    width: '100%',
    display: 'flex',
    p: 2,
    borderRadius: 5,
  }}>
    <CardContent sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
      <Stack direction="row" alignItems="center" spacing={5} sx={{ width: '100%' }} >
        <Box sx={{
          backgroundImage: iconBg,
          backgroundSize: 'cover',
          color: '#fff',
          width: 70,
          height: 70,
          borderRadius: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>{icon}
        </Box>

        <Box>
          <Typography variant="h5" fontWeight="bold">
            {value}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
          <Box sx={{
            backgroundColor: '#dcfce7',
            color: '#16a34a',
            borderRadius: 3,
            px: 1.2,
            py: 0.3,
            mt: 1.5,
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
          flexGrow: 1,
          mt: 8,
          px: 4,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          py: 3,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
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
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;