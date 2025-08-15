import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, Grid, TextField, Select, MenuItem, FormControl, InputLabel,
  Checkbox, FormControlLabel
} from '@mui/material';

const AddAttendeeForm = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Add New Attendee</DialogTitle>
      <DialogContent dividers>
        
        <h4>Personal Information</h4>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField label="First Name" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Last Name" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email Address" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Phone Number" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField type="date" label="Date of Birth" fullWidth InputLabelProps={{ shrink: true }} />
          </Grid>
        </Grid>

        <h4 style={{ marginTop: '1.5rem' }}>Professional Information</h4>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField label="Job Title" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Company" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Industry</InputLabel>
              <Select defaultValue="">
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
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Years of Experience</InputLabel>
              <Select defaultValue="">
                <MenuItem value="">Select experience</MenuItem>
                <MenuItem value="0-1">0-1 years</MenuItem>
                <MenuItem value="2-5">2-5 years</MenuItem>
                <MenuItem value="6-10">6-10 years</MenuItem>
                <MenuItem value="11-15">11-15 years</MenuItem>
                <MenuItem value="16+">16+ years</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <h4 style={{ marginTop: '1.5rem' }}>Event Registration</h4>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Event</InputLabel>
              <Select defaultValue="">
                <MenuItem value="tech-conference">Tech Conference 2024</MenuItem>
                <MenuItem value="marketing-workshop">Marketing Workshop</MenuItem>
                <MenuItem value="design-meetup">Design Meetup</MenuItem>
                <MenuItem value="business-summit">Business Summit</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Registration Status</InputLabel>
              <Select defaultValue="">
                <MenuItem value="confirmed">Confirmed</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="waitlist">Waitlist</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Ticket Type</InputLabel>
              <Select defaultValue="">
                <MenuItem value="regular">Regular</MenuItem>
                <MenuItem value="vip">VIP</MenuItem>
                <MenuItem value="student">Student</MenuItem>
                <MenuItem value="speaker">Speaker</MenuItem>
                <MenuItem value="sponsor">Sponsor</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Send welcome email" />
            <FormControlLabel control={<Checkbox />} label="Subscribe to newsletter" />
          </Grid>
        </Grid>

        <h4 style={{ marginTop: '1.5rem' }}>Additional Information</h4>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Dietary Restrictions" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Special Requests" multiline rows={2} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Internal Notes" multiline rows={3} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>How did they hear about us?</InputLabel>
              <Select defaultValue="">
                <MenuItem value="website">Website</MenuItem>
                <MenuItem value="social-media">Social Media</MenuItem>
                <MenuItem value="email">Email Campaign</MenuItem>
                <MenuItem value="referral">Referral</MenuItem>
                <MenuItem value="advertisement">Advertisement</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">Cancel</Button>
        <Button variant="outlined">Save as Draft</Button>
        <Button variant="contained">Add Attendee</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddAttendeeForm;

