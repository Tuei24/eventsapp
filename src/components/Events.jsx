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
import CreateNewEventForm from './CreateNewEventForm';

const drawerWidth = 250;

const EventsCard = ({ value, title }) => {
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
    const [openForm, setOpenForm] = useState(false);

    const cardData = [
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

    const technologyDetails = [
        {
            icon: <CalendarTodayRoundedIcon sx={{ fontSize: '18px' }} />,
            name: 'July 25, 2024',
        },
        {
            icon: <WatchLaterRoundedIcon sx={{ fontSize: '20px' }} />,
            name: '9:00AM-6:00PM',
        },
        {
            icon: <LocationOnRoundedIcon sx={{ fontSize: '20px' }} />,
            name: 'San Fransisco, CA',
        },
        {
            icon: <LocalOfferRoundedIcon sx={{ fontSize: '20px' }} />,
            name: 'TECHNOLOGY',
        },
    ];

    const technologyStatistics = [
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

    const marketingDetails = [
        {
            icon: <CalendarTodayRoundedIcon sx={{ fontSize: '18px' }} />,
            name: 'July 28, 2024',
        },
        {
            icon: <WatchLaterRoundedIcon sx={{ fontSize: '20px' }} />,
            name: '2:00PM-5:00PM',
        },
        {
            icon: <LocationOnRoundedIcon sx={{ fontSize: '20px' }} />,
            name: 'New York, NY',
        },
        {
            icon: <LocalOfferRoundedIcon sx={{ fontSize: '20px' }} />,
            name: 'MARKETING',
        },
    ];

    const marketingStatistics = [
        {
            value: '89',
            title: 'ATTENDEES',
        },
        {
            value: '74%',
            title: 'CAPACITY',
        },
        {
            value: '$4,250',
            title: 'REVENUE',
        }
    ];

    const designDetails = [
        {
            icon: <CalendarTodayRoundedIcon sx={{ fontSize: '18px' }} />,
            name: 'July 22, 2024',
        },
        {
            icon: <WatchLaterRoundedIcon sx={{ fontSize: '20px' }} />,
            name: '7:00PM-10:00PM',
        },
        {
            icon: <LocationOnRoundedIcon sx={{ fontSize: '20px' }} />,
            name: 'Los Angeles, CA',
        },
        {
            icon: <LocalOfferRoundedIcon sx={{ fontSize: '20px' }} />,
            name: 'DESIGN',
        },
    ];

    const designStatistics = [
        {
            value: '156',
            title: 'ATTENDEES',
        },
        {
            value: '95%',
            title: 'CAPACITY',
        },
        {
            value: '$7,800',
            title: 'REVENUE',
        }
    ];

    const businessDetails = [
        {
            icon: <CalendarTodayRoundedIcon sx={{ fontSize: '18px' }} />,
            name: 'July 15, 2024',
        },
        {
            icon: <WatchLaterRoundedIcon sx={{ fontSize: '20px' }} />,
            name: '8:00AM-7:00PM',
        },
        {
            icon: <LocationOnRoundedIcon sx={{ fontSize: '20px' }} />,
            name: 'Chicago, IL',
        },
        {
            icon: <LocalOfferRoundedIcon sx={{ fontSize: '20px' }} />,
            name: 'BUSINESS',
        },
    ];

    const businessStatistics = [
        {
            value: '312',
            title: 'ATTENDEES',
        },
        {
            value: '100%',
            title: 'CAPACITY',
        },
        {
            value: '$18,720',
            title: 'REVENUE',
        }
    ]


    const buttonStyles = {
        borderRadius: '0.5rem',
        background: '#f1f5f9',
        color: '#64748b',
        border: '1px solid #e2e8f0',
        padding: '0.5rem 1rem',
        fontSize: '0.875rem',
        cursor: 'pointer',

    };

    const buttonContainedStyles = {
        borderRadius: '0.5rem',
        background: 'linear-gradient(135deg, #667eea, #764ba2 100%)',
        border: 'none',
        color: 'white',
        padding: '0.75rem 1.5rem',
        fontWeight: 500,
    };

    return (
        <Box sx={{ display: 'flex', minHeight: '100' }}>
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
                                        flexWrap: 'wrap'
                                    }}>


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
                                        <Button variant="contained" startIcon={<AddIcon />} sx={buttonContainedStyles} onClick={() => setOpenForm(true)}>Create Event</Button>
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
                                        <Button sx={{ fontWeight: 600, fontSize: '0.75rem', borderRadius: '1rem', padding: '0.25rem 0.75rem', backgroundColor: '#dbeafe', color: '#1d4ed8' }}>UPCOMING</Button>
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
                                        mt: 2,
                                        pl: 1,

                                    }}>
                                    {technologyDetails.map((details, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                flexWrap: 'wrap',
                                            }}>
                                            {details.icon}
                                            <Typography
                                                sx={{
                                                    pl: 1,
                                                    backgroundColor: details.name === 'TECHNOLOGY' ? '#ede9fe' : 'transparent',
                                                    borderRadius: details.name === 'TECHNOLOGY' ? '1rem' : 0,
                                                    color: details.name === 'TECHNOLOGY' ? '#7c3aed' : 'inherit',
                                                    fontWeight: details.name === 'TECHNOLOGY' ? 600 : 'normal',
                                                    padding: '0.25rem 0.75rem',
                                                    fontSize: '0.75rem'
                                                }}
                                            >
                                                {details.name}
                                            </Typography>
                                        </Box>
                                    ))}

                                    {technologyStatistics.map((statistics, index) => (
                                        <Box key={index}
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                flexWrap: 'wrap',
                                                gap: 1,

                                            }}>
                                            <Typography variant="h5" fontWeight={600} >{statistics.value}</Typography>
                                            <Typography variant="body2" fontSize="13px" >{statistics.title}</Typography>
                                        </Box>

                                    ))}
                                </Box>

                                <Box display="flex" alignItems="center" flexWrap="wrap"  >
                                    <Typography sx={{ px: 1, py: 4 }}>Join us for the biggest technology conference of the year featuring keynotes from industry leaders, hands-on workshops, and networking opportunities.</Typography>
                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    gap: 2,
                                    mt: 2
                                }}>
                                    <Stack direction="row" alignItems="center" spacing={-2.0}>
                                        <Avatar alt="Person 1" src="/avatar1.jpg" />
                                        <Avatar alt="Person 2" src="/avatar2.jpg" />
                                        <Avatar alt="Person 3" src="/avatar3.jpg" />
                                        <Avatar alt="Person 4" src="/avatar4.jpg" />
                                        <Avatar sx={{
                                            backgroundColor: '#EDEDED',
                                            color: '#999999',
                                            width: 40,
                                            height: 40,
                                            fontSize: '0.875rem',
                                            fontWeight: 400,
                                        }} >+230</Avatar>
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
                                        <Typography variant="h6" fontWeight={600}>Marketing Workshop</Typography>
                                        <Button sx={{ fontWeight: 600, fontSize: '0.75rem', borderRadius: '1rem', padding: '0.25rem 0.75rem', backgroundColor: '#dbeafe', color: '#1d4ed8' }}>UPCOMING</Button>
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
                                        mt: 2,
                                        pl: 1,

                                    }}>
                                    {marketingDetails.map((details, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                flexWrap: 'wrap',
                                            }}>
                                            {details.icon}
                                            <Typography
                                                sx={{
                                                    pl: 1,
                                                    backgroundColor: details.name === 'MARKETING' ? '#dcfce7' : 'transparent',
                                                    borderRadius: details.name === 'MARKETING' ? '1rem' : 0,
                                                    color: details.name === 'MARKETING' ? '#16a34a' : 'inherit',
                                                    fontWeight: details.name === 'MARKETING' ? 600 : 'normal',
                                                    padding: '0.25rem 0.75rem',
                                                    fontSize: '0.75rem'
                                                }}
                                            >
                                                {details.name}
                                            </Typography>
                                        </Box>
                                    ))}

                                    {marketingStatistics.map((statistics, index) => (
                                        <Box key={index}
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                flexWrap: 'wrap',
                                                gap: 1,

                                            }}>
                                            <Typography variant="h5" fontWeight={600} >{statistics.value}</Typography>
                                            <Typography variant="body2" fontSize="13px" >{statistics.title}</Typography>
                                        </Box>

                                    ))}
                                </Box>

                                <Box display="flex" alignItems="center" flexWrap="wrap"  >
                                    <Typography sx={{ px: 1, py: 4 }}>Learn the latest marketing strategies and tactics from industry experts. Perfect for marketing professionals looking to enhance their skills.</Typography>
                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    gap: 2,
                                    mt: 2
                                }}>
                                    <Stack direction="row" alignItems="center" spacing={-2.0}>
                                        <Avatar alt="Person 1" src="/avatar1.jpg" />
                                        <Avatar alt="Person 2" src="/avatar2.jpg" />
                                        <Avatar alt="Person 3" src="/avatar3.jpg" />
                                        <Avatar alt="Person 4" src="/avatar4.jpg" />
                                        <Avatar sx={{
                                            backgroundColor: '#EDEDED',
                                            color: '#999999',
                                            width: 40,
                                            height: 40,
                                            fontSize: '0.875rem',
                                            fontWeight: 400,
                                        }} >+86</Avatar>
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
                                        <Typography variant="h6" fontWeight={600}>Design Meetup</Typography>#
                                        <Button sx={{ fontWeight: 600, fontSize: '0.75rem', borderRadius: '1rem', padding: '0.25rem 0.75rem', backgroundColor: '#dcfce7', color: '#16a34a' }}>ONGOING</Button>
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
                                        mt: 2,
                                        pl: 1,

                                    }}>
                                    {designDetails.map((details, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                flexWrap: 'wrap',
                                            }}>
                                            {details.icon}
                                            <Typography
                                                sx={{
                                                    pl: 1,
                                                    backgroundColor: details.name === 'DESIGN' ? '#dbeafe' : 'transparent',
                                                    borderRadius: details.name === 'DESIGN' ? '1rem' : 0,
                                                    color: details.name === 'DESIGN' ? '#2563eb' : 'inherit',
                                                    fontWeight: details.name === 'DESIGN' ? 600 : 'normal',
                                                    padding: '0.25rem 0.75rem',
                                                    fontSize: '0.75rem'
                                                }}
                                            >
                                                {details.name}
                                            </Typography>
                                        </Box>
                                    ))}

                                    {designStatistics.map((statistics, index) => (
                                        <Box key={index}
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                flexWrap: 'wrap',
                                                gap: 1,

                                            }}>
                                            <Typography variant="h5" fontWeight={600} >{statistics.value}</Typography>
                                            <Typography variant="body2" fontSize="13px" >{statistics.title}</Typography>
                                        </Box>

                                    ))}
                                </Box>

                                <Box display="flex" alignItems="center" flexWrap="wrap"  >
                                    <Typography sx={{ px: 1, py: 4 }}>Connect with fellow designers, share ideas, and explore the latest design trends in this interactive meetup session.</Typography>
                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    gap: 2,
                                    mt: 2
                                }}>
                                    <Stack direction="row" alignItems="center" spacing={-2.0}>
                                        <Avatar alt="Person 1" src="/avatar1.jpg" />
                                        <Avatar alt="Person 2" src="/avatar2.jpg" />
                                        <Avatar alt="Person 3" src="/avatar3.jpg" />
                                        <Avatar alt="Person 4" src="/avatar4.jpg" />
                                        <Avatar sx={{
                                            backgroundColor: '#EDEDED',
                                            color: '#999999',
                                            width: 40,
                                            height: 40,
                                            fontSize: '0.875rem',
                                            fontWeight: 400,
                                        }} >+153</Avatar>
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
                                        <Typography variant="h6" fontWeight={600}>Business Summit 2024</Typography>
                                        <Button sx={{ fontWeight: 600, fontSize: '0.75rem', borderRadius: '1rem', padding: '0.25rem 0.75rem', backgroundColor: '#f3f4f6', color: '#6b7280' }}>COMPLETED</Button>
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
                                        mt: 2,
                                        pl: 1,

                                    }}>
                                    {businessDetails.map((details, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                flexWrap: 'wrap',
                                            }}>
                                            {details.icon}
                                            <Typography
                                                sx={{
                                                    pl: 1,
                                                    backgroundColor: details.name === 'BUSINESS' ? '#fef3c7' : 'transparent',
                                                    borderRadius: details.name === 'BUSINESS' ? '1rem' : 0,
                                                    color: details.name === 'BUSINESS' ? '#d97706' : 'inherit',
                                                    fontWeight: details.name === 'BUSINESS' ? 600 : 'normal',
                                                    padding: '0.25rem 0.75rem',
                                                    fontSize: '0.75rem'
                                                }}
                                            >
                                                {details.name}
                                            </Typography>
                                        </Box>
                                    ))}

                                    {businessStatistics.map((statistics, index) => (
                                        <Box key={index}
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                flexWrap: 'wrap',
                                                gap: 1,

                                            }}>
                                            <Typography variant="h5" fontWeight={600} >{statistics.value}</Typography>
                                            <Typography variant="body2" fontSize="13px" >{statistics.title}</Typography>
                                        </Box>

                                    ))}
                                </Box>

                                <Box display="flex" alignItems="center" flexWrap="wrap"  >
                                    <Typography sx={{ px: 1, py: 4 }}>A comprehensive business summit featuring keynote speakers, panel discussions, and networking opportunities for business leaders.</Typography>
                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    gap: 2,
                                    mt: 2
                                }}>
                                    <Stack direction="row" alignItems="center" spacing={-2.0}>
                                        <Avatar alt="Person 1" src="/avatar1.jpg" />
                                        <Avatar alt="Person 2" src="/avatar2.jpg" />
                                        <Avatar alt="Person 3" src="/avatar3.jpg" />
                                        <Avatar alt="Person 4" src="/avatar4.jpg" />
                                        <Avatar sx={{
                                            backgroundColor: '#EDEDED',
                                            color: '#999999',
                                            width: 40,
                                            height: 40,
                                            fontSize: '0.875rem',
                                            fontWeight: 400,
                                        }} >+309</Avatar>
                                    </Stack>
                                    <Button variant="outlined" sx={buttonStyles} >View all</Button>
                                </Box>
                            </CardContent>

                        </Card>
                    </Box>
                </Box>



            </Box>
            <CreateNewEventForm open={openForm} onClose={() => setOpenForm(false)} />
        </Box>
    );
};
export default Events;