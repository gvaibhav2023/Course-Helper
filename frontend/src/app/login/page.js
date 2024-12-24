// src/app/login/page.js
import { TextField, Button, Checkbox, FormControlLabel, Box } from '@mui/material';

const LoginPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1701179596614-9c64f50cda76?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Box sx={{ 
        maxWidth: 400, 
        width: '100%', 
        backgroundColor: 'rgba(0, 0, 0, 1)', // Opaque background
        padding: '20px', 
        borderRadius: '8px' 
      }}>
        <h2 style={{ color: 'white' }}>Login</h2>
        <form>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            sx={{ input: { color: 'white' }, label: { color: 'white' } }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            sx={{ input: { color: 'white' }, label: { color: 'white' } }}
          />
          <FormControlLabel
            control={<Checkbox sx={{ color: 'yellow' }} />}
            label={<span style={{ color: 'yellow' }}>Remember me</span>}
          />
          <Button variant="contained" fullWidth sx={{ marginTop: '20px', backgroundColor: 'yellow', color: 'black' }}>
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
