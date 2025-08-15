import React, { useState } from 'react';
import {
  Box, Button, Avatar, CssBaseline, Select, MenuItem, FormControl, Typography,
  Stack, Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow,
  Checkbox, TablePagination, IconButton, Tooltip
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import AddAttendeeForm from './AddAttendeeForm';

const drawerWidth = 250;

const AttendeesCard = ({ value, title }) => (
  <Card sx={{
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
      <Stack direction="row" textAlign="center" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" fontWeight="700">{value}</Typography>
          <Typography variant="body2" color="text.secondary">{title}</Typography>
        </Box>
      </Stack>
    </CardContent>
  </Card>
);

const getEventStyles = (eventName) => {
  switch (eventName) {
    case 'Tech Conference 2024':
      return { bg: '#e3f2fd', color: '#1976d2' }; // Blue
    case 'Marketing Workshop':
      return { bg: '#f3e5f5', color: '#9c27b0' }; // Purple
    case 'Design Meetup':
      return { bg: '#e8f5e9', color: '#2e7d32' }; // Green
    case 'Business Summit':
      return { bg: '#fff3e0', color: '#ef6c00' }; // Orange
    default:
      return { bg: '#eceff1', color: '#607d8b' }; // Gray
  }
};

const Attendees = () => {
  const [selectedMenu, setSelectedMenu] = useState('Attendees');
  const [status, setStatus] = useState('All Events');
  const [category, setCategory] = useState('All Status');
  const [sort, setSort] = useState('Sort by Date');
  const [openForm, setOpenForm] = useState(false);

  const [attendees, setAttendees] = useState([
    { id: 1, name: 'Sarah Johnson', title: 'Software Engineer', email: 'sarah.johnson@email.com', event: 'Tech Conference 2024', registrationDate: 'July 10, 2024', status: 'Confirmed' },
    { id: 2, name: 'Michael Chen', title: 'Product Manager', email: 'michael.chen@email.com', event: 'Marketing Workshop', registrationDate: 'July 12, 2024', status: 'Confirmed' },
    { id: 3, name: 'Emily Davis', title: 'UX Designer', email: 'emily.davis@email.com', event: 'Design Meetup', registrationDate: 'July 8, 2024', status: 'Pending' },
    { id: 4, name: 'David Wilson', title: 'Business Analyst', email: 'david.wilson@email.com', event: 'Business Summit', registrationDate: 'July 5, 2024', status: 'Confirmed' },
    { id: 5, name: 'Lisa Anderson', title: 'Marketing Director', email: 'lisa.anderson@email.com', event: 'Tech Conference 2024', registrationDate: 'July 14, 2024', status: 'Cancelled' },
    { id: 6, name: 'James Rodriguez', title: 'Frontend Developer', email: 'james.rodriguez@email.com', event: 'Design Meetup', registrationDate: 'July 16, 2024', status: 'Confirmed' },
  ]);

  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const cardData = [
    { value: '1247', title: 'TOTAL ATTENDEES' },
    { value: '1089', title: 'CONFIRMED' },
    { value: '158', title: 'PENDING' },
    { value: '87%', title: 'ATTENDEES RATE' },
  ];

  const buttonStyles = {
    borderRadius: '10px',
    background: 'rgb(242, 242, 242)',
    color: 'black',
    border: '0.5px solid rgb(237, 237, 237)',
  };

  const buttonContainedStyles = {
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #667eea, #764ba2 100%)',
    color: 'white',
    px: 2,
    py: 1,
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = attendees.map((a) => a.id);
      setSelected(newSelected);
    } else {
      setSelected([]);
    }
  };

  const handleClick = (id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <Topbar selectedMenu={selectedMenu} drawerWidth={drawerWidth} />
      <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, marginLeft: 30, marginTop: '64px', width: '100%', display: 'flex', flexWrap: 'wrap', p: 3 }}>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', gap: 3, mb: 4 }}>
          <Card sx={{ borderRadius: 4, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)', px: 3, width: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
                  <FormControl size="small" sx={{ minWidth: 150 }}>
                    <Select value={status} onChange={(e) => setStatus(e.target.value)} sx={buttonStyles}>
                      <MenuItem value="All Events">All Events</MenuItem>
                      <MenuItem value="Technology">Technology</MenuItem>
                      <MenuItem value="Health">Health</MenuItem>
                      <MenuItem value="Business">Business</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl size="small" sx={{ minWidth: 150 }}>
                    <Select value={category} onChange={(e) => setCategory(e.target.value)} sx={buttonStyles}>
                      <MenuItem value="All Status">All Status</MenuItem>
                      <MenuItem value="Upcoming">Upcoming</MenuItem>
                      <MenuItem value="Ongoing">Ongoing</MenuItem>
                      <MenuItem value="Completed">Completed</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl size="small" sx={{ minWidth: 150 }}>
                    <Select value={sort} onChange={(e) => setSort(e.target.value)} sx={buttonStyles}>
                      <MenuItem value="Sort by Date">Sort by Date</MenuItem>
                      <MenuItem value="Newest First">Newest First</MenuItem>
                      <MenuItem value="Oldest First">Oldest First</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
                  <Button variant="outlined" startIcon={<FileDownloadRoundedIcon />} sx={buttonStyles}>Export</Button>
                  <Button variant="outlined" startIcon={<EmailRoundedIcon />} sx={buttonStyles}>Send Invite</Button>
                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={buttonContainedStyles}
                    onClick={() => setOpenForm(true)}
                  >
                    Add Attendee
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', gap: 3, mb: 4 }}>
          {cardData.map((card, index) => (
            <Box key={index} sx={{ flex: { xs: '100%', md: 3 }, minWidth: { xs: '100%', md: 0 } }}>
              <AttendeesCard value={card.value} title={card.title} />
            </Box>
          ))}
        </Box>

        <Card sx={{ width: '100%', borderRadius: 4, boxShadow: 2 }}>
          <CardContent>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ backgroundColor: '#e0e0e0' }}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      indeterminate={selected.length > 0 && selected.length < attendees.length}
                      checked={attendees.length > 0 && selected.length === attendees.length}
                      onChange={handleSelectAllClick}
                    />
                  </TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Attendee</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Event</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Registration Date</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {attendees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((attendee) => {
                  const isItemSelected = isSelected(attendee.id);
                  const { bg, color } = getEventStyles(attendee.event);

                  return (
                    <TableRow
                      key={attendee.id}
                      hover
                      onClick={() => handleClick(attendee.id)}
                      selected={isItemSelected}
                      sx={{ cursor: 'pointer' }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isItemSelected} />
                      </TableCell>
                      <TableCell>
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Avatar>{attendee.name.charAt(0)}</Avatar>
                          <Box>
                            <Typography variant="subtitle2">{attendee.name}</Typography>
                            <Typography variant="caption" color="text.secondary">{attendee.title}</Typography>
                          </Box>
                        </Stack>
                      </TableCell>
                      <TableCell>{attendee.email}</TableCell>
                      <TableCell>
                        <Box sx={{
                          backgroundColor: bg,
                          color: color,
                          px: 2,
                          py: 0.5,
                          borderRadius: 2,
                          display: 'inline-block',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                        }}>
                          {attendee.event}
                        </Box>
                      </TableCell>
                      <TableCell>{attendee.registrationDate}</TableCell>
                      <TableCell>
                        <Box sx={{
                          backgroundColor: attendee.status === 'Confirmed' ? '#e8f5e9' :
                            attendee.status === 'Pending' ? '#fffde7' : '#ffebee',
                          color: attendee.status === 'Confirmed' ? '#2e7d32' :
                            attendee.status === 'Pending' ? '#f9a825' : '#c62828',
                          px: 2,
                          py: 0.5,
                          borderRadius: 2,
                          fontWeight: 500,
                          fontSize: '0.8rem',
                          display: 'inline-block'
                        }}>
                          {attendee.status}
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Stack direction="row" spacing={1}>
                          <Tooltip title="View Profile">
                            <IconButton size="small" sx={buttonStyles}>
                              <VisibilityIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Send Message">
                            <IconButton size="small" sx={buttonStyles}>
                              <MessageIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="More">
                            <IconButton size="small" sx={buttonStyles}>
                              <MoreVertIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={attendees.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </CardContent>
        </Card>

      </Box>

      <AddAttendeeForm open={openForm} onClose={() => setOpenForm(false)} />
    </Box>
  );
};

export default Attendees;
