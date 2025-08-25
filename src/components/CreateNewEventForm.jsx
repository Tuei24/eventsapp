import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, Grid, TextField, Select, MenuItem, FormControl,
  InputLabel, Checkbox, FormControlLabel, Typography, Box
} from '@mui/material';

const LabeledField = ({ label, children }) => (
  <Box mb={2}>
    <Typography variant="subtitle2" gutterBottom>{label}</Typography>
    {children}
  </Box>
);

const Row = ({ children }) => (
  <Box display="flex" gap={2} flexDirection={{ xs: 'column', sm: 'row' }} mb={2}>
    {children}
  </Box>
);

const CreateNewEventForm = ({ open, onClose }) => {
  const buttonStyles = {
    borderRadius: '0.75rem',
    background: '#f1f5f9',
    color: '#64748b',
    border: 'none',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    padding: '0.75rem 1.5rem',
    cursor: 'pointer',

  };

  const buttonStyles2 = {
    borderRadius: '0.75rem',
    background: 'linear-gradient(135deg, #667eea, #764ba2 100%)',
    border: 'none',
    color: 'white',
    padding: '0.75rem 1.5rem',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',

  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth PaperProps={{ sx: { borderRadius: '16px', p: 1 } }}>
      <DialogTitle fontWeight={600}>Create New Event</DialogTitle>
      <DialogContent dividers>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Basic Information</Typography>

        <Box mb={2}>
          <LabeledField label="Event Title*">
            <TextField label="Enter event title" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
          </LabeledField>
        </Box>

        <Row>
          <Box flex={1}>
            <LabeledField label="Category*">
              <FormControl fullWidth>
                <Select defaultValue="" displayEmpty sx={{ borderRadius: 3 }}>
                  <MenuItem value="">Select category</MenuItem>
                  <MenuItem value="technology">Technology</MenuItem>
                  <MenuItem value="business">Business</MenuItem>
                  <MenuItem value="design">Design</MenuItem>
                  <MenuItem value="marketing">Marketing</MenuItem>
                  <MenuItem value="education">Education</MenuItem>
                  <MenuItem value="networking">Networking</MenuItem>
                </Select>
              </FormControl>
            </LabeledField>
          </Box>

          <Box flex={1}>
            <LabeledField label="Event Type*">
              <FormControl fullWidth>
                <Select defaultValue="" displayEmpty sx={{ borderRadius: 3 }}>
                  <MenuItem value="">Select type</MenuItem>
                  <MenuItem value="conference">Conference</MenuItem>
                  <MenuItem value="workshop">Workshop</MenuItem>
                  <MenuItem value="seminar">Seminar</MenuItem>
                  <MenuItem value="meetup">Meetup</MenuItem>
                  <MenuItem value="webinar">Webinar</MenuItem>
                  <MenuItem value="training">Training</MenuItem>
                </Select>
              </FormControl>
            </LabeledField>
          </Box>
        </Row>

        <Box mb={2}>
          <LabeledField label="Description">
            <TextField label="Enter event description" multiline rows={2} fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
          </LabeledField>
        </Box>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>Date & Time</Typography>
        <Row>
          <Box flex={1}>
            <LabeledField label="Start Date*">
              <TextField type="date" fullWidth variant="outlined" InputLabelProps={{ shrink: true }} sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
            </LabeledField>
          </Box>
          <Box flex={1}>
            <LabeledField label="End Date*">
              <TextField type="date" fullWidth variant="outlined" InputLabelProps={{ shrink: true }} sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
            </LabeledField>
          </Box>
        </Row>

        <Row>
          <Box flex={1}>
            <LabeledField label="Start Time*">
              <TextField type="time" fullWidth variant="outlined" InputLabelProps={{ shrink: true }} sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
            </LabeledField>
          </Box>
          <Box flex={1}>
            <LabeledField label="End Time*">
              <TextField type="time" fullWidth variant="outlined" InputLabelProps={{ shrink: true }} sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
            </LabeledField>
          </Box>
        </Row>


        <Box mb={2}>
          <LabeledField label="Timezone">
            <FormControl fullWidth>
              <Select defaultValue="" displayEmpty sx={{ borderRadius: 3 }} >
                <MenuItem value="">UTC</MenuItem>
                <MenuItem value="technology">Mountain Time(UTC-7)</MenuItem>
                <MenuItem value="finance">Central Time(UTC-6)</MenuItem>
                <MenuItem value="healthcare">Eastern Time(UTC-5)</MenuItem>
                <MenuItem value="education">Pacific Time(UTC-8)</MenuItem>
              </Select>
            </FormControl>
          </LabeledField>
        </Box>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>Location & Venue</Typography>
        <Box mb={2}>
          <LabeledField label="Event Format">
            <FormControl fullWidth>
              <Select defaultValue="" displayEmpty sx={{ borderRadius: 3 }}>
                <MenuItem value="">Select format</MenuItem>
                <MenuItem value="tech-conference">In-person</MenuItem>
                <MenuItem value="marketing-workshop">Virtual</MenuItem>
                <MenuItem value="design-meetup">Hybrid</MenuItem>
              </Select>
            </FormControl>
          </LabeledField>
        </Box>

        <Box mb={2}>
          <LabeledField label="Venue Name">
            <TextField label="Enter venue name" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
          </LabeledField>
        </Box>

        <Box mb={2}>
          <LabeledField label="Address">
            <TextField label="Enter full address" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
          </LabeledField>
        </Box>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>Capacity & Pricing</Typography>
        <Row>
          <Box flex={1}>
            <LabeledField label="Maimum Attendees">
              <TextField label="e.g., 100" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
            </LabeledField>
          </Box>
          <Box flex={1}>
            <LabeledField label="Ticket Price($)">
              <TextField label="0.00" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
            </LabeledField>
          </Box>
        </Row>
        <Typography>This is a free event</Typography>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>Capacity & Pricing</Typography>
        <Box mb={2}>
          <LabeledField label="Registration Deadline">
            <TextField type="date" fullWidth variant="outlined" InputLabelProps={{ shrink: true }} sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
          </LabeledField>
        </Box>

        <Box mb={2}>
          <LabeledField label="Tags (comma-separated)">
            <TextField label="e.g., networking, tech, startup" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
          </LabeledField>
        </Box>


        <Box display="flex" gap={0.15} mb={0.25} flexDirection="column">
          <FormControlLabel control={<Checkbox />} label="Require approval for registration" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Send reminder emails to attendees" />
          <FormControlLabel control={<Checkbox />} label="Allow waitlist when event is full" />
        </Box>

      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined" style={buttonStyles} sx={{ textTransform: 'none' }}>Cancel</Button>
        <Button variant="outlined" style={buttonStyles} sx={{ textTransform: 'none' }}>Save as Draft</Button>
        <Button variant="contained" style={buttonStyles2} sx={{ textTransform: 'none' }} >Create Event</Button>
      </DialogActions>
    </Dialog >
  );
};

export default CreateNewEventForm;