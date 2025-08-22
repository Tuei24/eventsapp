import React from 'react'
import { useState } from 'react'
import { Box, CssBaseline, Card, CardContent, Typography, Stack, Button, IconButton } from '@mui/material'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Groups2Icon from '@mui/icons-material/Groups2';
import PercentRoundedIcon from '@mui/icons-material/PercentRounded';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';


const drawerWidth = 250;


const AnalyticsCard = ({ title, value, percentage, icon, iconBg, text }) => (

  <Card
    sx={{
      height: '100%',
      borderRadius: 4,
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flexWrap: 'wrap',
      px: 2,
    }}
  >
    <CardContent sx={{ p: 0 }}>
      <Stack direction="column" textAlign="flex-start" spacing={1}  >
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
            px: 0.5,
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
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
            {text}
          </Typography>
        </Box>
      </Stack>
    </CardContent>
  </Card >
);


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

  const buttonStyles = {
    borderRadius: '0.5rem',
    background: 'white',
    color: '#64748b',
    border: '1px solid #e2e8f0',
    padding: 0.25,
    fontSize: '0.875rem',
    cursor: 'pointer',
  };

  const data = [
    { label: 'Technology', value: '50', color: '#667eea' },
    { label: 'Business', value: '25', color: '#f093fb' },
    { label: 'Design', value: '15', color: '#4facfe' },
    { label: 'Marketing', value: '10', color: '#43e97b' },
  ];

  const settings = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    hideLegend: true,
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
          width: '100%',
          mt: '64px',
          ml: 30,
          p: 3,
          minHeight: 'calc(100vh - 64px)',
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
          }}>
          {cardData.map((card, index) => (
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
                }
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

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            width: '100%',
            mb: 4,
          }}>
          <Box sx={{ flex: { xs: '100%', md: 4 }, minWidth: 0 }}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                height: '100%',
              }}>
              <CardContent sx={{ p: 0 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 3,
                    borderBottom: '1px solid rgba(241, 245, 249, 1)',
                  }}>
                  <Box display="flex" alignItems="center" gap={2} flexWrap="wrap" >
                    <Typography variant="h6" fontWeight={600}>Event Registrations</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={0.5} flexWrap="wrap" sx={{ background: '#f1f5f9', px: 0.5, py: 0.5, borderRadius: 2 }}>
                    <Button variant="outlined" style={buttonStyles} sx={{ textTransform: 'none' }}>Week</Button>
                    <Button variant="outlined" style={buttonStyles} sx={{ textTransform: 'none' }}>Month</Button>
                    <Button variant="outlined" style={buttonStyles} sx={{ textTransform: 'none' }}>Year</Button>
                  </Box>
                </Box>

                <Box>
                  <LineChart
                    sx={{
                      '& .MuiAreaElement-root': {
                        fill: 'rgb(59, 130, 246, 0.2)',
                      }
                    }}
                    xAxis={[{
                      id: 'days',
                      data: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
                      scaleType: 'point'
                    }]}
                    series={[
                      {
                        id: 'registrations',
                        data: [12, 19, 15, 25, 22, 18, 24],
                        area: true,
                        color: '#3b82f6',

                      },
                    ]}
                    height={300}
                    grid={{ horizontal: true }}
                  />
                </Box>


              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: { xs: '100%', md: 4 }, minWidth: 0 }}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                height: '100%',
              }}>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 3,
                    borderBottom: '1px solid rgba(241, 245, 249, 1)',
                  }}>
                  <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
                    <Typography variant="h6" fontWeight={600}>
                      Revenue Trends
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                    {[
                      { name: 'Revenue', color: '#667eea' },
                      { name: 'Target', color: '#f093fb' },
                    ].map((category) => (
                      <Box
                        key={category.name}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          px: 2,
                          py: 1,
                          borderRadius: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: category.color,
                          }}
                        />
                        <Typography color="#64748b">{category.name}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>


                <Box>
                  <BarChart
                    xAxis={[{
                      id: 'months',
                      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jul'],
                      scaleType: 'band',
                    }]}
                    series={[{
                      id: 'revenue',
                      data: [12000, 15000, 18000, 16000, 20000, 22000],
                      color: '#667eea',
                    },
                    {
                      id: 'target',
                      data: [15000, 16000, 17000, 18000, 19000, 20000],
                      color: '#f093fb',
                    }]}
                    height={300}
                    borderRadius={10}
                    grid={{ horizontal: true }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: { xs: '100%', md: 4 }, minWidth: 0 }}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                height: '100%',
              }}>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 3,
                    borderBottom: '1px solid rgba(241, 245, 249, 1)',
                  }}>
                  <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
                    <Typography variant="h6" fontWeight={600}>Events by Category</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={0.5} flexWrap="wrap">
                    <Button variant="outlined" sx={{
                      border: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem',
                      cursor: 'pointer', borderRadius: '0.5rem', px: '0.125rem', py: '0.125rem'
                    }}>{<FileDownloadRoundedIcon />}</Button>
                  </Box>
                </Box>

                <Box sx={{ borderBottom: '1px solid rgba(241, 245, 249, 1)', pb: 3, pt: 3 }}>
                  <PieChart
                    series={[{ innerRadius: 70, outerRadius: 100, data }]}
                    {...settings}
                  />
                </Box>


                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, }}>
                  {[
                    { name: 'Technology', color: '#667eea', percentage: '50%' },
                    { name: 'Business', color: '#f093fb', percentage: '25%' },
                    { name: 'Design', color: '#4facfe', percentage: '15%' },
                    { name: 'Marketing', color: '#43e97b', percentage: '10%' },
                  ].map((category) => (
                    <Box
                      key={category.name}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 1,
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: 2,
                          backgroundColor: category.color,
                          display: 'flex',
                          alignItems: 'center',
                          mt: 2
                        }}
                      >
                        <Box display="flex" alignItems="center" gap={0.5} flexWrap="wrap">
                          <Typography color="#1e293b" pl={2}>{category.name}</Typography>
                        </Box>
                      </Box>
                      <Box display="flex" alignItems="center" gap={1} flexWrap="wrap" ></Box>
                      <Typography color="#64748b" fontWeight={600}>{category.percentage}</Typography>
                    </Box>
                  ))}
                </Box>


              </CardContent>
            </Card>
          </Box>

        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            width: '100%',
            mb: 4,
          }}>
          <Box sx={{ flex: { xs: '100%', md: 4 }, minWidth: 0 }}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                height: '100%',
              }}>
              <CardContent sx={{ p: 0 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 3,
                    borderBottom: '1px solid rgba(241, 245, 249, 1)',
                  }}>
                  <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
                    <Typography variant="h6" fontWeight={600}>Attendance Rates</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
                    <Typography variant="subtitle2" color="#16a34a" fontWeight={600}>87% Average</Typography>
                  </Box>
                </Box>

                <Box>
                  <LineChart

                    xAxis={[{
                      id: 'weeks',
                      data: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                      scaleType: 'point'
                    }]}
                    yAxis={[{
                      min: 70,
                      max: 100,
                      valueFormatter: (value) => `${value}%`
                    }]}

                    series={[
                      {
                        id: 'attendance',
                        data: [85, 92, 88, 87],
                        area: true,
                        color: '#16a34a',

                      },
                    ]}
                    height={300}
                    grid={{ horizontal: true }}
                    sx={{
                      '& .MuiAreaElement-root': {
                        fill: '#16a34a',
                        fillOpacity: 0.15,
                      },
                      '& .MuiLineElement-root': {
                        strokeWidth: 2,
                      }
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            width: '100%',
            mb: 4,
          }}>
          <Box sx={{ flex: { xs: '100%', md: 6 }, minWidth: 0 }}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                height: '100%',
              }}>
              <CardContent sx={{ p: 0 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    p: '1.5rem',
                    borderBottom: '1px solid rgba(241, 245, 249, 1)',
                  }}>
                  <Typography fontWeight={600} fontSize="1.125rem" marginBottom="0.25rem">Top Performing Events</Typography>
                  <Typography variant="body1" color="#64748b" fontSize="0.875rem">By attendance</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  {[
                    { name: 'Tech Conference 2024', number: 1, count: 234, percentage: '89%', color: '#f1f5f9;' },
                    { name: 'Business Summit', number: 2, count: 312, percentage: '100%', color: '#f1f5f9' },
                    { name: 'Design Meetup', number: 3, count: 156, percentage: '95%', color: '#f1f5f9;' },
                    { name: 'Marketing Workshop', number: 4, count: 89, percentage: '74%', color: '#f1f5f9' },
                  ].map((category) => (
                    <Box
                      key={category.name}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        p: 2,
                        px: 3,
                        borderBottom: '1px solid rgba(241, 245, 249, 1)',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>

                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            backgroundColor: category.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 600,
                            color: '#64748b',
                            mr: 2,
                          }}
                        >{category.number}</Box>
                        <Typography fontWeight={600} fontSize="0.975rem">{category.name}</Typography>
                      </Box>
                      <Typography variant="body2" color="#64748b" pl={6} pt={0.85} fontSize="0.85rem">
                        {category.count} events.{category.percentage} capacity
                      </Typography>
                    </Box>
                  ))}
                </Box>

              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: { xs: '100%', md: 6 }, minWidth: 0 }}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                height: '100%',
              }}>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    padding: '1.25rem',
                    borderBottom: '1px solid rgba(241, 245, 249, 1)',
                  }}>
                  <Typography fontSize="1.125rem" marginBottom="0.25rem" fontWeight={600}>Geographic Distribution</Typography>
                  <Typography variant="body1" color="#64748b" fontSize="0.875rem">Attendees by location</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  {[
                    { location: 'San Fransisco, CA', count: 3, },
                    { location: 'New York, NY', count: 2, },
                    { location: 'Los Angeles, CA', count: 2, },
                    { location: 'Chicago, IL', count: 1, },
                  ].map((category) => (
                    <Box
                      key={category.name}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        p: 2,
                        px: 3,
                        borderBottom: '1px solid rgba(241, 245, 249, 1)',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>


                        <Typography fontWeight={600} fontSize="0.975rem">{category.location}</Typography>
                      </Box>
                      <Typography variant="body2" color="#64748b" pt={0.85} fontSize="0.85rem">
                        {category.count} events
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 3,
          width: '100%',
          mb: 3,
        }}>
          <Box>
            <Typography fontSize="1.25rem" fontWeight={600} pl={2} >Key Insights</Typography>
          </Box>
          <Box>
            <Button sx={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              border: 'none',
              padding: '0.35rem 0.8rem',
              borderRadius: '0.5rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textTransform: 'none',
              fontSize: '0.875rem'
            }}>{<DescriptionRoundedIcon sx={{ fontSize: '0.975rem' }} />}Generate Report</Button>
          </Box>

        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            width: '100%',
            mb: 4,
          }}>
          <Box sx={{ flex: { xs: '100%', md: 4 }, minWidth: 0 }}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                height: '100%',
                borderLeft: '4px solid',
                borderLeftColor: '#16a34a'
              }}>
              <CardContent>
                <Box sx={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '1.125rem',
                  marginBottom: '1rem',
                  background: '#dcfce7',
                  color: '#16a34a'

                }} />
                <Typography fontSize="1.125rem" marginBottom="0.5rem" fontWeight={600}>Registration Growth</Typography>
                <Typography color="#64748b" lineHeight={1.6} fontSize="0.875rem" >Events registrations have increased by 15% compared to last month, with Technology events showing the hightest growth.</Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: { xs: '100%', md: 4 }, minWidth: 0 }}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                height: '100%',
                borderLeft: '4px solid',
                borderLeftColor: '#f59e0b'
              }}>
              <CardContent>
                <Box sx={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.125rem',
                  marginBottom: '1rem',
                  background: '#fef3c7',
                  color: '#f59e0b'

                }}>{<WarningRoundedIcon />}</Box>
                <Typography fontSize="1.125rem" marginBottom="0.5rem" fontWeight={600}>Attendance Rate Decline</Typography>
                <Typography color="#64748b" lineHeight={1.6} fontSize="0.875rem" >Overall attendance rate has dropped by 3%. Consider sending more reminder emails and improving event descriptions.</Typography>

              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: { xs: '100%', md: 4 }, minWidth: 0 }}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                height: '100%',
                borderLeft: '4px solid',
                borderLeftColor: '#3b82f6'
              }}>
              <CardContent>
                <Box sx={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.125rem',
                  marginBottom: '1rem',
                  background: '#dbeafe',
                  color: '#3b82f6',

                }}> {<LightbulbRoundedIcon />}</Box>
                <Typography fontSize="1.125rem" marginBottom="0.5rem" fontWeight={600}>Peak Registration Time</Typography>
                <Typography color="#64748b" lineHeight={1.6} fontSize="0.875rem" >Most registrations occur between 2-4 PM on weekdays. Schedule marketing campaigns during these hours for better results.</Typography>
              </CardContent>
            </Card>
          </Box>

        </Box>

      </Box>
    </Box >

  );
};
export default Analytics;
