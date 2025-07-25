// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Button,
//   Modal,
//   TextField,
//   Typography,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
// } from '@mui/material';
// import { useCalendlyContext } from '../context/CalendlyContext';

// type PostEventModalProps = {
//   open: boolean;
//   handleClose: () => void;
// };

// const style = {
//   position: 'absolute' as const,
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   maxHeight: '80vh',
//   overflowY: 'auto',
//   bgcolor: 'background.paper',
//   boxShadow: 24,
//   p: 4,
//   borderRadius: 2,
// };

// const PostEventModal: React.FC<PostEventModalProps> = ({ open, handleClose }) => {
//   const { bearerToken, userUri, orgMembers = [] } = useCalendlyContext(); // ✅ fallback to empty array

//   const [name, setName] = useState('');
//   const [selectedOwner, setSelectedOwner] = useState(userUri || '');
//   const [description, setDescription] = useState('');
//   const [response, setResponse] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Auto-select first user if no userUri is set
//   useEffect(() => {
//     if (!selectedOwner && orgMembers.length > 0) {
//       setSelectedOwner(orgMembers[0].uri);
//     }
//   }, [orgMembers, selectedOwner]);

//   const handleSubmit = async () => {
//     if (!selectedOwner) {
//       alert('Please select an owner.');
//       return;
//     }

//     setLoading(true);
//     setResponse('');

//     const body = {
//       name,
//       owner: selectedOwner,
//       description,
//     };

//     try {
//       const res = await fetch('https://api.calendly.com/event_types', {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${bearerToken}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//       });

//       const result = await res.json();
//       setResponse(JSON.stringify(result, null, 2));
//     } catch (error) {
//       setResponse('Error submitting request');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Modal open={open} onClose={handleClose}>
//       <Box sx={style}>
//         <Typography variant="h6" gutterBottom>
//           Create Event Type
//         </Typography>

//         {/* Event Name Field */}
//         <TextField
//           fullWidth
//           margin="normal"
//           label="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         {/* Owner Dropdown */}
//         <FormControl fullWidth margin="normal" required>
//           <InputLabel id="owner-label">Owner</InputLabel>
//           <Select
//             labelId="owner-label"
//             id="owner-select"
//             value={selectedOwner}
//             onChange={(e) => setSelectedOwner(e.target.value as string)}
//           >
//             {orgMembers.length > 0 ? (
//               orgMembers.map((m) => (
//                 <MenuItem key={m.uri} value={m.uri}>
//                   {m.name}
//                 </MenuItem>
//               ))
//             ) : (
//               <MenuItem disabled>No users loaded</MenuItem>
//             )}
//           </Select>
//         </FormControl>

//         {/* Description Field */}
//         <TextField
//           fullWidth
//           margin="normal"
//           label="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />

//         {/* Submit Button */}
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleSubmit}
//           sx={{ mt: 2 }}
//           disabled={loading}
//         >
//           {loading ? 'Submitting...' : 'Submit'}
//         </Button>

//         {/* API Response */}
//         {response && (
//           <Box mt={2}>
//             <Typography variant="body2" component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
//               {response}
//             </Typography>
//           </Box>
//         )}
//       </Box>
//     </Modal>
//   );
// };

// export default PostEventModal;

import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { useCalendlyContext } from '../context/CalendlyContext';

type FieldConfig = {
  label: string;
  key: string;
  required?: boolean;
};

type ReusablePostModalProps = {
  open: boolean;
  handleClose: () => void;
  requestUrl: string;
  title?: string;
  fields?: FieldConfig[]; // custom form fields
  buildBody?: (owner: string, fieldValues: Record<string, string>) => Record<string, any>;
};

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxHeight: '80vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const ReusablePostModal: React.FC<ReusablePostModalProps> = ({
  open,
  handleClose,
  requestUrl,
  title = 'Submit Request',
  fields = [
    { label: 'Name', key: 'name', required: true },
    { label: 'Description', key: 'description' },
  ],
  buildBody,
}) => {
  const { bearerToken, userUri, orgMembers = [] } = useCalendlyContext();

  const [selectedOwner, setSelectedOwner] = useState(userUri || '');
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  // Auto-select first user if no userUri
  useEffect(() => {
    if (!selectedOwner && orgMembers.length > 0) {
      setSelectedOwner(orgMembers[0].uri);
    }
  }, [orgMembers, selectedOwner]);

  // Handle field changes
  const handleFieldChange = (key: string, value: string) => {
    setFieldValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    if (!selectedOwner) {
      alert('Please select an owner.');
      return;
    }

    setLoading(true);
    setResponse('');

    const body = buildBody
      ? buildBody(selectedOwner, fieldValues)
      : { owner: selectedOwner, ...fieldValues };

    try {
      const res = await fetch(requestUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const result = await res.json();
      setResponse(JSON.stringify(result, null, 2));
    } catch (error) {
      setResponse('Error submitting request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>

        {/* Dynamic Fields */}
        {fields.map((field) => (
          <TextField
            key={field.key}
            fullWidth
            margin="normal"
            label={field.label}
            value={fieldValues[field.key] || ''}
            onChange={(e) => handleFieldChange(field.key, e.target.value)}
          />
        ))}

        {/* Owner Dropdown */}
        <FormControl fullWidth margin="normal" required>
          <InputLabel id="owner-label">Owner</InputLabel>
          <Select
            labelId="owner-label"
            value={selectedOwner}
            onChange={(e) => setSelectedOwner(e.target.value)}
          >
            {orgMembers.length > 0 ? (
              orgMembers.map((m) => (
                <MenuItem key={m.uri} value={m.uri}>
                  {m.name}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>No users loaded</MenuItem>
            )}
          </Select>
        </FormControl>

        {/* Submit Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </Button>

        {/* Response */}
        {response && (
          <Box mt={2}>
            <Typography variant="body2" component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
              {response}
            </Typography>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default ReusablePostModal;

