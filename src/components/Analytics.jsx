import React from 'react'
import { useState } from 'react'
import { Box, CssBaseline, Card, CardContent, Typography, Stack, Button, IconButton } from '@mui/material'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Groups2Icon from '@mui/icons-material/Groups2';
import PercentRoundedIcon from '@mui/icons-material/PercentRounded';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const drawerWidth = 250;


const AnalyticsCard = ({ title, value, percentage, icon, iconBg, text }) => {
  return (
    <Card
      sx={{
        height: '100%',
        borderRadius: 4,
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap: 'wrap',
        p: 2,
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Stack direction="column" textAlign="center" spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <Box display="flex" justifyContent="space-between" alignItems="center">
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
            <Box sx={{
              mt: 0.5,
              backgroundColor: percentage === '-3%' ? '#fef2f2' : '#dcfce7',
              color: percentage === '-3%' ? '#dc2626' : '#16a34a',
              borderRadius: 2,
              px: 1,
              py: 0.25,
              fontSize: 14,
              display: 'inline-block',
              fontWeight: 600,

            }}>{percentage}</Box>
          </Box>
          <Box>
            <Typography variant="h4" fontWeight="700" sx={{ lineHeight: 1.9 }}>
              {value}
            </Typography>
            <Typography variant="body2" color="text.primary" sx={{ lineHeight: 1.5, pb: 1 }}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5, pb: 1 }}>
              {text}
            </Typography>



          </Box>
        </Stack>
      </CardContent>
    </Card >
  );
};

const Analytics = () => {
  const [selectedMenu, setSelectedMenu] = useState('Analytics');

  const cardData = [
    {
      title: 'Total Events',
      value: '24',
      percentage: '+12%',
      text: 'vs last month',
      icon: <EventAvailableIcon sx={{ fontSize: 35 }} />,
      iconBg: 'linear-gradient(135deg, #667eea, #764ba2 100%)',
    },
    {
      title: 'Total Attendees',
      value: '1,247',
      percentage: '+8%',
      text: 'vs last month',
      icon: <Groups2Icon sx={{ fontSize: 35 }} />,
      iconBg: 'linear-gradient(135deg, #f093fb, #f5576c 100%)',
    },
    {
      title: 'Revenue',
      value: '$45,230',
      percentage: '+15%',
      text: 'vs last month',
      icon: <AttachMoneyIcon sx={{ fontSize: 35 }} />,
      iconBg: 'linear-gradient(135deg, #43e97b, #38f9d7 100%)',
    },
    {
      title: 'Attendance Rate',
      value: '87%',
      percentage: '-3%',
      text: 'vs last month',
      icon: <PercentRoundedIcon sx={{ fontSize: 35 }} />,
      iconBg: 'linear-gradient(135deg, #4facfe, #00f2fe 100%)',
    },
  ];

  return (
    <Box display="flex" minHeight="100vh>">
      <CssBaseline />
      <Topbar selectedMenu={selectedMenu} drawerWidth={drawerWidth} />
      <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} drawerWidth={drawerWidth} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
          ml: 30,
          mt: '64px',
          p: 3,
          display: 'flex',
          flexWrap: 'wrap',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            gap: 3,
            mb: 4,
          }}
        >
          {cardData.slice(0, 4).map((card, index) => (
            <Box
              key={index}
              sx={{
                flex: {
                  xs: '100%',
                  md: 3,
                },
                minWidth: {
                  xs: '100%',
                  md: 0,
                },
              }}>
              <AnalyticsCard
                value={card.value}
                title={card.title}
                percentage={card.percentage}
                text={card.text}
                icon={card.icon}
                iconBg={card.iconBg}
              />
            </Box>
          ))}
        </Box>

      </Box>
    </Box>

  );
};
export default Analytics;
