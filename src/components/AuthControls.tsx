import { Box, Button, TextField, Stack } from '@mui/material';

type AuthControlsProps = {
  bearerToken: string;
  onTokenChange: (token: string) => void;
  onGetCurrentUser: () => void;
  onOAuthConnect: () => void;
};

const AuthControls: React.FC<AuthControlsProps> = ({
  bearerToken,
  onTokenChange,
  onGetCurrentUser,
  onOAuthConnect,
}) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <TextField
          label="Bearer Token"
          variant="outlined"
          size="small"
          value={bearerToken}
          onChange={(e) => onTokenChange(e.target.value)}
          fullWidth
        />

        <Button variant="contained" onClick={onGetCurrentUser}>
          Get Current User
        </Button>

        <Button variant="outlined" color="secondary" onClick={onOAuthConnect}>
          Connect to Calendly via OAuth
        </Button>
      </Stack>
    </Box>
  );
};

export default AuthControls;

