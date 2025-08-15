import React, { useState } from 'react';
import { Box, Button, Avatar, CssBaseline, Select, MenuItem, FormControl, Typography, Stack, Card, CardContent } from '@mui/material';
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
    const [status, setStatus] = useState('All Status');
    const [category, setCategory] = useState('All Categories');
    const [sort, setSort] = useState('Sort by Date');

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
            icon: <CalendarTodayRoundedIcon sx={{fontSize: '18px'}} />,
            name: 'July 25, 2024', 
         },
         {
            icon: <WatchLaterRoundedIcon sx={{fontSize: '20px'}} />,
            name: '9:00AM-6:00PM',  
        },
         { 
            icon: <LocationOnRoundedIcon sx={{fontSize: '20px'}}/>,
            name: 'San Fransisco, CA',  
        },
        {
            icon: <LocalOfferRoundedIcon sx={{fontSize: '20px'}}/>,
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

                            
                    <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
                    <FormControl size="small" sx={{ minWidth: 150 }}>
                    <Select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        sx={buttonStyles}
                    >
                    <MenuItem value="All Status">All Status</MenuItem>
                    <MenuItem value="Upcoming">Upcoming</MenuItem>
                    <MenuItem value="Ongoing">Ongoing</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                    </Select>
                    </FormControl>

                    <FormControl size="small" sx={{ minWidth: 150 }}>
                        <Select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        sx={buttonStyles}
                        >
                        <MenuItem value="All Categories">All Categories</MenuItem>
                        <MenuItem value="Technology">Technology</MenuItem>
                        <MenuItem value="Health">Health</MenuItem>
                        <MenuItem value="Business">Business</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl size="small" sx={{ minWidth: 150 }}>
                        <Select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        sx={buttonStyles}
                        >
                        <MenuItem value="Sort by Date">Sort by Date</MenuItem>
                        <MenuItem value="Newest First">Newest First</MenuItem>
                        <MenuItem value="Oldest First">Oldest First</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>

                    <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
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
                            padding: '1rem 0.5rem',
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
                            flexWrap:'wrap',
                            gap: 2,
                            mt: 2,
                            pl: 1,

                            }}>
                          {eventDetails.map((details, index) => (
                            <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap:'wrap',
                               }}>
                               {details.icon}
                            <Typography
                              sx={{
                                  pl: 1,
                                  backgroundColor: details.name === 'TECHNOLOGY' ? '#F2E3FC' : 'transparent',
                                  borderRadius: details.name === 'TECHNOLOGY' ? 2 : 0,
                                  color: details.name === 'TECHNOLOGY' ? '#8251A8' : 'inherit',
                                  fontWeight: details.name === 'TECHNOLOGY' ? 600 : 'normal',
                                  px: 0.5 ,
                                  py: 0.5,
                                  fontSize: '13px'
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
                                alignItems: 'center',
                                flexWrap:'wrap',
                                gap: 1,
                            
                               }}>
                                <Typography variant="h5" fontWeight={600} >{statistics.value}</Typography>
                                <Typography variant="body2" fontSize="13px" >{statistics.title}</Typography>
                               </Box>

                        ))}
                        </Box>

                        <Box display="flex" alignItems="center" flexWrap="wrap"  >
                            <Typography sx={{px: 1, py: 4}}>Join us for the biggest techonolgy conference of the year featuring keynotes from industry leaders, hands-on experience and networking opportunities</Typography>
                        </Box>
                             
                        <Box sx={{ 
                            display: 'flex',
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            flexWrap:'wrap',
                            gap: 2,
                            mt: 2
                            }}>
                            <Stack direction="row" alignItems="center" spacing={-2.0}>
                                <Avatar alt="Person 1" src="/avatar1.jpg"/>
                                <Avatar alt="Person 2" src="/avatar2.jpg"/>
                                <Avatar alt="Person 3" src="/avatar3.jpg"/>
                                <Avatar alt="Person 4" src="/avatar4.jpg"/>
                                <Avatar sx={{
                                        backgroundColor: '#EDEDED',
                                        color: '#999999',
                                        width: 40,
                                        height: 40,
                                        fontSize: '0.875rem',
                                        fontWeight: 400,
                                    }} >+228</Avatar>
                            </Stack>
                            <Button variant="outlined" sx={buttonStyles} >View all</Button>
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
                            padding: '1rem 0.5rem',
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
                            flexWrap:'wrap',
                            gap: 2,
                            mt: 2,
                            pl: 1,

                            }}>
                          {eventDetails.map((details, index) => (
                            <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap:'wrap',
                               }}>
                               {details.icon}
                            <Typography
                              sx={{
                                  pl: 1,
                                  backgroundColor: details.name === 'TECHNOLOGY' ? '#F2E3FC' : 'transparent',
                                  borderRadius: details.name === 'TECHNOLOGY' ? 2 : 0,
                                  color: details.name === 'TECHNOLOGY' ? '#8251A8' : 'inherit',
                                  fontWeight: details.name === 'TECHNOLOGY' ? 600 : 'normal',
                                  px: 0.5 ,
                                  py: 0.5,
                                  fontSize: '13px'
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
                                alignItems: 'center',
                                flexWrap:'wrap',
                                gap: 1,
                            
                               }}>
                                <Typography variant="h5" fontWeight={600} >{statistics.value}</Typography>
                                <Typography variant="body2" fontSize="13px" >{statistics.title}</Typography>
                               </Box>

                        ))}
                        </Box>

                        <Box display="flex" alignItems="center" flexWrap="wrap"  >
                            <Typography sx={{px: 1, py: 4}}>Join us for the biggest techonolgy conference of the year featuring keynotes from industry leaders, hands-on experience and networking opportunities</Typography>
                        </Box>
                             
                        <Box sx={{ 
                            display: 'flex',
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            flexWrap:'wrap',
                            gap: 2,
                            mt: 2
                            }}>
                            <Stack direction="row" alignItems="center" spacing={-2.0}>
                                <Avatar alt="Person 1" src="/avatar1.jpg"/>
                                <Avatar alt="Person 2" src="/avatar2.jpg"/>
                                <Avatar alt="Person 3" src="/avatar3.jpg"/>
                                <Avatar alt="Person 4" src="/avatar4.jpg"/>
                                <Avatar sx={{
                                        backgroundColor: '#EDEDED',
                                        color: '#999999',
                                        width: 40,
                                        height: 40,
                                        fontSize: '0.875rem',
                                        fontWeight: 400,
                                    }} >+228</Avatar>
                            </Stack>
                            <Button variant="outlined" sx={buttonStyles} >View all</Button>
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
                            padding: '1rem 0.5rem',
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
                            flexWrap:'wrap',
                            gap: 2,
                            mt: 2,
                            pl: 1,

                            }}>
                          {eventDetails.map((details, index) => (
                            <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap:'wrap',
                               }}>
                               {details.icon}
                            <Typography
                              sx={{
                                  pl: 1,
                                  backgroundColor: details.name === 'TECHNOLOGY' ? '#F2E3FC' : 'transparent',
                                  borderRadius: details.name === 'TECHNOLOGY' ? 2 : 0,
                                  color: details.name === 'TECHNOLOGY' ? '#8251A8' : 'inherit',
                                  fontWeight: details.name === 'TECHNOLOGY' ? 600 : 'normal',
                                  px: 0.5 ,
                                  py: 0.5,
                                  fontSize: '13px'
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
                                alignItems: 'center',
                                flexWrap:'wrap',
                                gap: 1,
                            
                               }}>
                                <Typography variant="h5" fontWeight={600} >{statistics.value}</Typography>
                                <Typography variant="body2" fontSize="13px" >{statistics.title}</Typography>
                               </Box>

                        ))}
                        </Box>

                        <Box display="flex" alignItems="center" flexWrap="wrap"  >
                            <Typography sx={{px: 1, py: 4}}>Join us for the biggest techonolgy conference of the year featuring keynotes from industry leaders, hands-on experience and networking opportunities</Typography>
                        </Box>
                             
                        <Box sx={{ 
                            display: 'flex',
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            flexWrap:'wrap',
                            gap: 2,
                            mt: 2
                            }}>
                            <Stack direction="row" alignItems="center" spacing={-2.0}>
                                <Avatar alt="Person 1" src="/avatar1.jpg"/>
                                <Avatar alt="Person 2" src="/avatar2.jpg"/>
                                <Avatar alt="Person 3" src="/avatar3.jpg"/>
                                <Avatar alt="Person 4" src="/avatar4.jpg"/>
                                <Avatar sx={{
                                        backgroundColor: '#EDEDED',
                                        color: '#999999',
                                        width: 40,
                                        height: 40,
                                        fontSize: '0.875rem',
                                        fontWeight: 400,
                                    }} >+228</Avatar>
                            </Stack>
                            <Button variant="outlined" sx={buttonStyles} >View all</Button>
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
                            padding: '1rem 0.5rem',
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
                            flexWrap:'wrap',
                            gap: 2,
                            mt: 2,
                            pl: 1,

                            }}>
                          {eventDetails.map((details, index) => (
                            <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap:'wrap',
                               }}>
                               {details.icon}
                            <Typography
                              sx={{
                                  pl: 1,
                                  backgroundColor: details.name === 'TECHNOLOGY' ? '#F2E3FC' : 'transparent',
                                  borderRadius: details.name === 'TECHNOLOGY' ? 2 : 0,
                                  color: details.name === 'TECHNOLOGY' ? '#8251A8' : 'inherit',
                                  fontWeight: details.name === 'TECHNOLOGY' ? 600 : 'normal',
                                  px: 0.5 ,
                                  py: 0.5,
                                  fontSize: '13px'
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
                                alignItems: 'center',
                                flexWrap:'wrap',
                                gap: 1,
                            
                               }}>
                                <Typography variant="h5" fontWeight={600} >{statistics.value}</Typography>
                                <Typography variant="body2" fontSize="13px" >{statistics.title}</Typography>
                               </Box>

                        ))}
                        </Box>

                        <Box display="flex" alignItems="center" flexWrap="wrap"  >
                            <Typography sx={{px: 1, py: 4}}>Join us for the biggest techonolgy conference of the year featuring keynotes from industry leaders, hands-on experience and networking opportunities</Typography>
                        </Box>
                             
                        <Box sx={{ 
                            display: 'flex',
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            flexWrap:'wrap',
                            gap: 2,
                            mt: 2
                            }}>
                            <Stack direction="row" alignItems="center" spacing={-2.0}>
                                <Avatar alt="Person 1" src="/avatar1.jpg"/>
                                <Avatar alt="Person 2" src="/avatar2.jpg"/>
                                <Avatar alt="Person 3" src="/avatar3.jpg"/>
                                <Avatar alt="Person 4" src="/avatar4.jpg"/>
                                <Avatar sx={{
                                        backgroundColor: '#EDEDED',
                                        color: '#999999',
                                        width: 40,
                                        height: 40,
                                        fontSize: '0.875rem',
                                        fontWeight: 400,
                                    }} >+228</Avatar>
                            </Stack>
                            <Button variant="outlined" sx={buttonStyles} >View all</Button>
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