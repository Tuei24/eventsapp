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

const AddAttendeeForm = ({ open, onClose }) => {
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
      <DialogTitle fontWeight={600}>Add New Attendee</DialogTitle>
      <DialogContent dividers>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Personal Information</Typography>

        <Row>
          <Box flex={1}>
            <LabeledField label="First Name*">
              <TextField label="Enter First Name" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
            </LabeledField>
          </Box>
          <Box flex={1}>
            <LabeledField label="Last Name*">
              <TextField label="Enter Last Name" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
            </LabeledField>
          </Box>
        </Row>

        <Box mb={2}>
          <LabeledField label="Email Address*">
            <TextField label="Enter Email Address" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
          </LabeledField>
        </Box>

        <Row>
          <Box flex={1}>
            <LabeledField label="Phone Number">
              <TextField label="+1 (555) 123-4567" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
            </LabeledField>
          </Box>
          <Box flex={1}>
            <LabeledField label="Date of Birth">
              <TextField type="date" fullWidth variant="outlined" InputLabelProps={{ shrink: true }} sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
            </LabeledField>
          </Box>
        </Row>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>Professional Information</Typography>
        <Row>
          <Box flex={1}>
            <LabeledField label="Job Title">
              <TextField label="Enter Job Title" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
            </LabeledField>
          </Box>
          <Box flex={1}>
            <LabeledField label="Company">
              <TextField label="Enter Company Name" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
            </LabeledField>
          </Box>
        </Row>

        <Row>
          <Box flex={1}>
            <LabeledField label="Industry">
              <FormControl fullWidth>
                <Select defaultValue="" displayEmpty sx={{ borderRadius: 3 }} >
                  <MenuItem value="">Select industry</MenuItem>
                  <MenuItem value="technology">Technology</MenuItem>
                  <MenuItem value="finance">Finance</MenuItem>
                  <MenuItem value="healthcare">Healthcare</MenuItem>
                  <MenuItem value="education">Education</MenuItem>
                  <MenuItem value="marketing">Marketing</MenuItem>
                  <MenuItem value="consulting">Consulting</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </LabeledField>
          </Box>
          <Box flex={1}>
            <LabeledField label="Years of Experience">
              <FormControl fullWidth>
                <Select defaultValue="" displayEmpty sx={{ borderRadius: 3 }}>
                  <MenuItem value="">Select experience</MenuItem>
                  <MenuItem value="0-1">0-1 years</MenuItem>
                  <MenuItem value="2-5">2-5 years</MenuItem>
                  <MenuItem value="6-10">6-10 years</MenuItem>
                  <MenuItem value="11-15">11-15 years</MenuItem>
                  <MenuItem value="16+">16+ years</MenuItem>
                </Select>
              </FormControl>
            </LabeledField>
          </Box>
        </Row>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>Event Registration</Typography>
        <Box mb={2}>
          <LabeledField label="Event">
            <FormControl fullWidth>
              <Select defaultValue="" displayEmpty sx={{ borderRadius: 3 }}>
                <MenuItem value="">Select an event</MenuItem>
                <MenuItem value="tech-conference">Tech Conference 2024</MenuItem>
                <MenuItem value="marketing-workshop">Marketing Workshop</MenuItem>
                <MenuItem value="design-meetup">Design Meetup</MenuItem>
                <MenuItem value="business-summit">Business Summit</MenuItem>
              </Select>
            </FormControl>
          </LabeledField>
        </Box>

        <Row>
          <Box flex={1}>
            <LabeledField label="Registration Status">
              <FormControl fullWidth>
                <Select defaultValue="Confirmed" displayEmpty sx={{ borderRadius: 3 }}>
                  <MenuItem value="confirmed">Confirmed</MenuItem>
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="waitlist">Waitlist</MenuItem>
                </Select>
              </FormControl>
            </LabeledField>
          </Box>
          <Box flex={1}>
            <LabeledField label="Ticket Type">
              <FormControl fullWidth>
                <Select defaultValue="Regular" displayEmpty sx={{ borderRadius: 3 }}>
                  <MenuItem value="regular">Regular</MenuItem>
                  <MenuItem value="vip">VIP</MenuItem>
                  <MenuItem value="student">Student</MenuItem>
                  <MenuItem value="speaker">Speaker</MenuItem>
                  <MenuItem value="sponsor">Sponsor</MenuItem>
                </Select>
              </FormControl>
            </LabeledField>
          </Box>
        </Row>

        <Box display="flex" gap={0.15} mb={0.25}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Send welcome email" />
          <FormControlLabel control={<Checkbox />} label="Subscribe to newsletter" />
        </Box>


        <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 1 }}>Additional Information</Typography>
        <Box mb={2}>
          <LabeledField label="Dietary Restrictions">
            <TextField label="e.g., Vegeterian, Gluten-free" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
          </LabeledField>
        </Box>
        <Box mb={2}>
          <LabeledField label="Special Requests">
            <TextField label="Any special accomodations needed" multiline rows={2} fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
          </LabeledField>
        </Box>
        <Box mb={2}>
          <LabeledField label="Internal Notes">
            <TextField label="Internal notes about this attendee(optional)" multiline rows={3} fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
          </LabeledField>
        </Box>
        <Box mb={2}>
          <LabeledField label="How did they hear about us?">
            <FormControl fullWidth>
              <Select defaultValue="" displayEmpty sx={{ borderRadius: 3 }}>
                <MenuItem value="">Select source</MenuItem>
                <MenuItem value="website">Website</MenuItem>
                <MenuItem value="social-media">Social Media</MenuItem>
                <MenuItem value="email">Email Campaign</MenuItem>
                <MenuItem value="referral">Referral</MenuItem>
                <MenuItem value="advertisement">Advertisement</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </LabeledField>
        </Box>


      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined" style={buttonStyles} sx={{ textTransform: 'none' }}>Cancel</Button>
        <Button variant="outlined" style={buttonStyles} sx={{ textTransform: 'none' }}>Save as Draft</Button>
        <Button variant="contained" style={buttonStyles2} sx={{ textTransform: 'none' }} >Add Attendee</Button>
      </DialogActions>
    </Dialog >
  );
};

export default AddAttendeeForm;


