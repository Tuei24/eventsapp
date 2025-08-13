import React, { useState } from 'react';
import { Box, Button, CssBaseline, Typography, Stack, Card, CardContent } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const drawerWidth = 250;

const EventsCard= ({value,title}) =>{
    return(
    <Card
    sx={{
      height: '100%',
      borderRadius: 4,
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flexWrap: 'wrap',
      p:2,
    }}>
        <CardContent sx={{ p: 0 }}>
          <Stack direction="row" textAlign="center" spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <Box>
            <Typography variant="h4" fontWeight="700" sx={{ lineHeight: 1.9 }}>{value}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5, pb: 1 }}>{title}</Typography>
           </Box>
          </Stack>  
        </CardContent>
    </Card>
    );
};

const Events = () => {
    const [selectedMenu, setSelectedMenu] = useState('Events');

    const cardData=[
        {
            value: '24',
            title: 'TOTAL EVENTS',
        },
        {
            value: '8',
            title: 'UPCOMING',
        },
        {
            value: '2',
            title: 'ONGOING',
        },
        {
            value: '14',
            title: 'COMPLETED',
        },
    ];

     const eventDetails = [
         { 
            icon: <CalendarTodayRoundedIcon />,
            name: 'July 25, 2024', 
         },
         {
            icon: <WatchLaterRoundedIcon />,
            name: '9:00AM-6:00PM',  
        },
         { 
            icon: <LocationOnRoundedIcon />,
            name: 'San Fransisco, CA',  
        },
        {
            icon: <LocalOfferRoundedIcon />,
            name: 'TECHNOLOGY', 
        },
      ];

      const eventStatistics =[
        {
            value: '234',
            title: 'ATTENDEES',
        },
        {
            value: '89%',
            title: 'CAPACITY',  
        },
        {
            value: '$12,500',
            title: 'REVENUE',
        }
      ]
    

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
    px: 2,
    py: 1,
  };

    return (
        <Box sx={{display: 'flex', minHeight: '100'}}>
            <CssBaseline />
            <Topbar selectedMenu={selectedMenu} drawerWidth={drawerWidth} />
            <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} drawerWidth={drawerWidth} />
        
        <Box component="main"
        sx={{
             flexGrow: 1,
             marginLeft: 30, 
             marginTop: '64px',
             width: '100%', 
             display: 'flex',
             flexWrap: 'wrap',
             p: 3,
        }}>
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
                        }}>
                        <CardContent>
                            <Box
                            sx={{   
                               display: 'flex', 
                               justifyContent: 'space-between', 
                               alignItems: 'center', 
                               flexWrap: 'wrap' }}>

                            <Box display="flex" alignItems="flex-start" gap={2} flexWrap="wrap">
                                <Button variant="outlined" sx={buttonStyles}>All Status</Button>
                                <Button variant="outlined" sx={buttonStyles}>All Categories</Button>
                                <Button variant="outlined" sx={buttonStyles}>Sort by Date</Button>
                            </Box>

                            <Box display="flex" alignItems="flex-end" gap={2} flexWrap="wrap">
                                 <Button variant="outlined" startIcon={<FileDownloadRoundedIcon />} sx={buttonStyles}>Export</Button>
                                 <Button variant="contained" startIcon={<AddIcon />} sx={buttonContainedStyles}>Create Event</Button>
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
                }}
                >
            {cardData.slice(0,4).map((card, index)=> (
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
                <EventsCard
                value={card.value}
                title={card.title}
              />
               </Box>
            ))}
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
                flex: { xs: '100%', md: 12 },
                minWidth: { xs: '100%', md: '0' },
                }}>
                <Card
                sx={{
                    borderRadius: 4,
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
                    width: '100%',
                    height: '100%',
                    }}>
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
                            <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
                            <Typography variant="h6" fontWeight={600}>Tech Conference 2024</Typography>
                            <Button sx={{fontWeight: 600, borderRadius: 3, backgroundColor:'#DEECFC', color:'##1141C2' }}>UPCOMING</Button>
                            </Box>
                            <Box display="flex" alignItems="center" gap={2} flexWrap="wrap" >
                            <Button variant="outlined" sx={buttonStyles}>{<EditNoteRoundedIcon />}</Button>
                            <Button variant="outlined" sx={buttonStyles}>{<DeleteRoundedIcon />}</Button>
                            <Button variant="outlined" sx={buttonStyles}>{<MoreVertRoundedIcon />}</Button>
                            </Box>
                           </Box>
                           <Box 
                           sx={{ 
                            display: 'flex',
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: 2,
                            mt: 2
                            }}>
                          {eventDetails.map((details, index) => (
                            <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 1,
                                flexWrap:'wrap',
                               }}>
                               {details.icon}
                            <Typography
                              sx={{
                                  pl: 1,
                                  backgroundColor: details.name === 'TECHNOLOGY' ? '#F2E3FC' : 'transparent',
                                  borderRadius: details.name === 'TECHNOLOGY' ? 3 : 0,
                                  color: details.name === 'TECHNOLOGY' ? '#8251A8' : 'inherit',
                                  fontWeight: details.name === 'TECHNOLOGY' ? 600 : 'normal',
                                  px: details.name === 'TECHNOLOGY' ? 1 : 0,
                                  py: details.name === 'TECHNOLOGY' ? 0.5 : 0,
                                 }}
                            >
                                {details.name}
                            </Typography>
                            </Box>
                        ))}

                        {eventStatistics.map((statistics, index) =>(
                            <Box key={index}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                flexWrap:'wrap',
                                gap: 1,
                            
                               }}>
                                <Typography variant="h5" fontWeight={600} >{statistics.value}</Typography>
                                <Typography variant="body2" >{statistics.title}</Typography>
                               </Box>

                        ))}
                            </Box>
                    </CardContent>
                    </Card>
                </Box>
                </Box>
            
        </Box>
    </Box>
    );
};
export default Events;