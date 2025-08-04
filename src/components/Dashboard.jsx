import React from 'react'
import { useState } from 'react'
import { Box, CssBaseline, Grid, Card, CardContent, Typography, Stack, Button } from '@mui/material'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Groups2Icon from '@mui/icons-material/Groups2';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BoltIcon from '@mui/icons-material/Bolt';
import AddIcon from '@mui/icons-material/Add';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import MailIcon from '@mui/icons-material/Mail';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import StyleIcon from '@mui/icons-material/Style';
import RestoreIcon from '@mui/icons-material/Restore';
import EditNoteIcon from '@mui/icons-material/EditNote';

import '../App.css'



const drawerWidth = 250;
const Bold = ({ children }) => <span style={{ fontWeight: 600 }}>{children}</span>

const DashboardCard = ({ title, value, percentage, icon, iconBg }) => (

  <Card
    sx={{
      height: '100%',
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
      <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
  const quickActions = [
    {
      icon: <AddIcon sx={{ fontSize: 35, fontWeight: 70 }} />,
      title: 'Create Event',
    },
    {
      icon: <PersonAddAlt1Icon sx={{ fontSize: 35 }} />,
      title: 'Add Attendee',
    },
    {
      icon: <MailIcon sx={{ fontSize: 35 }} />,
      title: 'Send Invites',
    },
    {
      icon: <FileDownloadRoundedIcon sx={{ fontSize: 35 }} />,
      title: 'Export Data',
    },
  ];


  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
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
          p: { xs: 2, sm: 3 },
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        <Grid container spacing={3} sx={{ mb: 4 }} >
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} >
              <DashboardCard
                value={card.value}
                title={card.title}
                percentage={card.percentage}
                icon={card.icon}
                iconBg={card.iconBg}
              />
            </Grid>
          ))}


          <Grid container spacing={3} >
            <Grid item xs={12} md={8}>

              <Card sx={{
                borderRadius: 4,
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
                pl: 3,
                pr: 20,
                height: '100%'
              }}  >

                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1rem 1.5rem',
                      mb: 3,
                      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',

                    }}>

                    <CalendarMonthIcon /><Typography variant="h6" fontWeight={600}  >
                      Upcoming Events
                    </Typography>
                    <Button sx={{
                      textTransform: 'none',
                      color: 'rgb(100, 116, 139)',
                      fontWeight: 500,
                      cursor: 'pointer',
                      padding: '0.5rem 1rem',
                      background: 'rgb(241, 245, 249)',
                      borderWidth: 'initial',
                      borderStyle: 'none',
                      borderColor: 'initial',
                      borderImage: 'initial',
                      borderRadius: '15px',

                    }}>View All </Button>
                  </Box>

                  <Stack spacing={5}>
                    {upcomingEvents.map((event, index) => (
                      <Box
                        key={index}
                        display="flex"
                        alignItems="center"
                        sx={{
                          flexDirection: { xs: 'column', sm: 'row' },
                          gap: { xs: 2, sm: 0 },
                          span: 8,

                        }}
                      >
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
                        <Box sx={{ flex: 1 }}>
                          <Typography fontWeight={600}>{event.title}</Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ py: 1 }}>
                            {event.location}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {event.time}
                          </Typography>
                        </Box>


                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{
                borderRadius: 4,
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
                display: 'flex',
                width: '100%',
                height: '100%',
              }} >
                <CardContent>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: '1.5rem',
                    borderBottom: '1px solid rgb(241, 245, 249)',

                  }}>
                    <BoltIcon /><Typography variant="h6" fontWeight={600}  >
                      Quick Actions
                    </Typography>

                  </Box>

                  <Grid container spacing={2}>
                    {quickActions.map((actions, index) => (
                      <Grid item xs={6} key={index}>
                        <Button variant="outlined"
                          sx={{

                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            cursor: 'pointer',
                            gap: '0.75rem',
                            padding: '1.5rem',
                            mt: 3,
                            background: 'rgb(248, 250, 252)',
                            color: 'black',
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderColor: 'rgb(226, 232, 240)',
                            borderRadius: '15px',


                          }}>
                          {actions.icon}
                          <Typography sx={{ textTransform: 'none' }} fontWeight={400}>
                            {actions.title}
                          </Typography>

                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Card sx={{
                borderRadius: 4,
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                height: '100%',
              }}>
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 3,
                    borderBottom: '1px solid rgba(241, 245, 249, 1)',
                  }}>
                    <StyleIcon sx={{ mr: 1 }} />
                    <Typography variant="h6" fontWeight={600}>
                      Event Categories
                    </Typography>
                  </Box>

                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    {[
                      { name: 'Technology', count: 12, color: 'rgb(102, 126, 234)' },
                      { name: 'Business', count: 8, color: 'rgb(240, 147, 251)' },
                      { name: 'Design', count: 6, color: 'rgb(79, 172, 254)' },
                      { name: 'Marketing', count: 4, color: 'rgb(67, 233, 123)' }
                    ].map((category) => (
                      <Box key={category.name} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        p: 2,
                        px: 3,
                        borderBottom: '1px solid rgba(241, 245, 249, 1)',
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '10px',
                            backgroundColor: category.color,
                            mr: 2,
                          }} />
                          <Typography fontWeight={600}>
                            {category.name}
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary" >
                          {category.count} events
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card sx={{
                borderRadius: 4,
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                height: '100%',


              }}>
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 3,
                    borderBottom: '1px solid rgba(241, 245, 249, 1)',
                  }}>
                    <RestoreIcon sx={{ mr: 1 }} />
                    <Typography variant="h6" fontWeight={600}>
                      Recent Activity
                    </Typography>
                  </Box>
                  <Box >
                    {[
                      {
                        icon: <PersonAddAlt1Icon sx={{ color: 'rgb(100, 116, 139)', fontSize: 20 }} />,
                        text: <Typography><Bold>Sarah Johnson</Bold> registered for Tech Conference 2024</Typography>,
                        time: '2 minutes ago'
                      },
                      {
                        icon: <EventAvailableIcon sx={{ color: 'rgb(100, 116, 139)', fontSize: 20 }} />,
                        text: <Typography>New event <Bold>Design Meetup</Bold> was created</Typography>,
                        time: '1 hour ago'
                      },
                      {
                        icon: <MailIcon sx={{ color: 'rgb(100, 116, 139)', fontSize: 20 }} />,
                        text: <Typography>Reminder emails sent for <Bold>Marketing Workshop</Bold></Typography>,
                        time: '3 hours ago'
                      },
                      {
                        icon: <EditNoteIcon sx={{ color: 'rgb(100, 116, 139)', fontSize: 20 }} />,
                        text: <Typography><Bold>Tech conference 2024</Bold> details updated</Typography>,
                        time: '5 hours ago'
                      }
                    ].map((activity, index) => (
                      <Box key={index} sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        p: 2,
                        borderRadius: 2,
                        borderBottom: '1px solid rgba(241, 245, 249, 1)',

                      }}>
                        <Box sx={{
                          mr: 2,
                          mt: 0.5,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(241, 245, 249, 1)',
                        }}>
                          {activity.icon}
                        </Box>
                        <Box>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {activity.text}
                          </Box>
                          <Typography fontSize="0.75rem" color="rgb(148, 163, 184)" sx={{ pt: 1 }}>
                            {activity.time}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>



          </Grid>

        </Grid>

      </Box>
    </Box >
  );
};

export default Dashboard;