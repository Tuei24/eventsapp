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

const AddEventForm = ({ open, onClose }) => {
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
      <DialogTitle fontWeight={600}>Add New Event</DialogTitle>
      <DialogContent dividers>

        <Box mb={2}>
          <LabeledField label="Event Title">
            <TextField label="Enter event title" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
          </LabeledField>
        </Box>

        <Box mb={2}>
          <LabeledField label="Date">
            <TextField type="date" fullWidth variant="outlined" InputLabelProps={{ shrink: true }} sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
          </LabeledField>
        </Box>

        <Row>
          <Box flex={1}>
            <LabeledField label="Start Time">
              <TextField type="time" fullWidth variant="outlined" InputLabelProps={{ shrink: true }} sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
            </LabeledField>
          </Box>
          <Box flex={1}>
            <LabeledField label="End Time">
              <TextField type="time" fullWidth variant="outlined" InputLabelProps={{ shrink: true }} sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
            </LabeledField>
          </Box>
        </Row>

        <Box mb={2}>
          <LabeledField label="Location">
            <TextField label="Enter location" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
          </LabeledField>
        </Box>


        <Box mb={2}>
          <LabeledField label="Description">
            <TextField label="Enter event description" multiline rows={2} fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }} />
          </LabeledField>
        </Box>

        <Box mb={2}>
          <LabeledField label="Category">
            <FormControl fullWidth>
              <Select defaultValue="" displayEmpty sx={{ borderRadius: 3 }}>
                <MenuItem value="technology">Technology</MenuItem>
                <MenuItem value="business">Business</MenuItem>
                <MenuItem value="design">Design</MenuItem>
                <MenuItem value="marketing">Marketing</MenuItem>
              </Select>
            </FormControl>
          </LabeledField>
        </Box>




      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined" style={buttonStyles} sx={{ textTransform: 'none' }}>Cancel</Button>
        <Button variant="contained" style={buttonStyles2} sx={{ textTransform: 'none' }} >Create Event</Button>
      </DialogActions>
    </Dialog >
  );
};

export default AddEventForm;