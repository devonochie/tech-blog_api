import React from 'react';
import { Box, TextField, Button, Typography, Paper, InputAdornment, IconButton, Divider, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Alert } from '@mui/material';
import { AccountCircle, Lock, Password, Visibility, VisibilityOff } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { addUserActions, loginUserActions } from '../../Reducers/loginReducers';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';


const LoginForm = ({login}) => {
   
   const dispatch = useDispatch()
   const [showPassword, setShowPassword] = React.useState(false);
   const [open, setOpen] = React.useState(false)
   const [email, setEmail] = React.useState('')
   const [password, setPassword] = React.useState('')
   const navigate = useNavigate()


   const handleTogglePasswordVisibility = () => {
      setShowPassword(!showPassword);
   };

   const userLogin = login.find(user => user.email === email && user.password === password);

   const expirationTime = new Date().getTime() + 1 * 60 * 1000; // 1 minutes
   const userData = { email, expires: expirationTime };
   window.localStorage.setItem('user', JSON.stringify(userData));

   const handleSubmit = async () => {
      if (userLogin) {
         try {
            dispatch(loginUserActions({ email: userLogin.email, password: userLogin.password }));
            setEmail('');
            setPassword('');
            setOpen(true);
            setTimeout(() => {
               alert('Login successful!');
            }, 1000);
            navigate('/');
            setEmail('');
            setPassword('');
            navigate('/');
         } catch (error) {
            console.error('Error during login:', error);
         }
      } else {
         alert('Invalid email or password');
      }
   };
   const addUser = async (email, password) => {
      dispatch(addUserActions({email, password}))
      setEmail('')
      setPassword('')
      navigate('/login')
  }

   const handleClose = () => {
      setOpen(false)
   }
   
   return (
      <>
         <Box
            sx={{
               display: 'flex',
               height: '80vh',
               marginTop: '20px',
               backgroundColor: '#f5f5f5',
            }}
         >
            {/* Left Content */}
            <Box
               sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 4,
                  backgroundColor: '#1976d2',
                  color: '#fff',
               }}
            >
               <Box sx={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                     <SettingsApplicationsIcon sx={{ marginRight: 1 }} />
                     <Typography variant="body1">
                        Stay connected with us by logging in to your account.
                     </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                     <DashboardIcon sx={{ marginRight: 1 }} />
                     <Typography variant="body1">
                        Access your personalized dashboard and manage your preferences easily.
                     </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                     <NotificationsActiveIcon sx={{ marginRight: 1 }} />
                     <Typography variant="body1">
                        Get the latest updates and stay informed with notifications.
                     </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <SupportAgentIcon sx={{ marginRight: 1 }} />
                     <Typography variant="body1">
                        Need help? Reach out to our support team anytime.
                     </Typography>
                  </Box>
               </Box>
            </Box>

            {/* Right Content */}
            <Box
               sx={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
               }}
            >
               <Paper
                  elevation={3}
                  sx={{
                     width: 400,
                     padding: 4,
                     borderRadius: 2,
                     backgroundColor: '#f9f9f9',
                  }}
               >
                  <Typography variant="h5" align="center" gutterBottom>
                     Login
                  </Typography>
                  <Box
                     component="form"
                     sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                     }}
                  >
                     <TextField
                        label="Ema"
                        value={email}
                        variant="outlined"
                        onChange={({target}) => setEmail(target.value)}
                        fullWidth
                        InputProps={{
                           startAdornment: (
                              <InputAdornment position="start">
                                 <AccountCircle />
                              </InputAdornment>
                           ),
                        }}
                     />
                     <TextField
                        label="Password"
                        value={password}
                        onChange={({target}) => setPassword(target.value)}
                        variant="outlined"
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        InputProps={{
                           startAdornment: (
                              <InputAdornment position="start">
                                 <Lock />
                              </InputAdornment>
                           ),
                           endAdornment: (
                              <InputAdornment position="end">
                                 <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                 </IconButton>
                              </InputAdornment>
                           ),
                        }}
                     />
                     <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                           textTransform: 'none',
                           fontSize: '16px',
                           padding: '10px 0',
                        }}
                        onClick={handleSubmit}
                     >
                        Login
                     </Button>
                     <Divider sx={{ my: 2 }}>OR</Divider>
                     <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        sx={{
                           textTransform: 'none',
                           fontSize: '16px',
                           padding: '10px 0',
                        }}
                     >
                        <GoogleIcon style={{ padding: '10px' }} />
                        Login with Google
                     </Button>
                     <Button
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        sx={{
                           textTransform: 'none',
                           fontSize: '16px',
                           padding: '10px 0',
                        }}
                     >
                        <GitHubIcon style={{ padding: '10px', color: 'black' }} />
                        Login with GitHub
                     </Button>
                     <Typography
                        variant="body2"
                        align="center"
                        sx={{
                           marginTop: 2,
                           color: 'gray',
                        }}
                     >
                        Don't have an account?{' '}
                        <a
                           style={{ color: '#1976d2', textDecoration: 'none', cursor: 'pointer' }}
                           onClick={() => setOpen(true)}
                        >
                           Sign up
                        </a>
                     </Typography>
                  </Box>
               </Paper>
            </Box>
         </Box>

         {/* Dialog for Sign Up */}
         <Dialog open={open} onClose={handleClose}>
            <DialogTitle style={{justifyContent: 'center', textAlign: 'center'}}> Sign Up</DialogTitle>
            <DialogContent>
               <DialogContentText>
                  Please fill in the details below to create a new account.
               </DialogContentText>
               <Paper
                  elevation={3}
                  sx={{
                     width: 400,
                     padding: 4,
                     borderRadius: 2,
                     backgroundColor: '#f9f9f9',
                  }}
               >
                 
                  <Box
                     component="form"
                     sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                     }}
                  >
                     <TextField
                        label="Email"
                        value={email}
                        variant="outlined"
                        fullWidth
                        InputProps={{
                           startAdornment: (
                              <InputAdornment position="start">
                                 <AccountCircle />
                              </InputAdornment>
                           ),
                        }}
                     />
                     <TextField
                        label="Password"
                        variant="outlined"
                        value={password}
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        InputProps={{
                           startAdornment: (
                              <InputAdornment position="start">
                                 <Lock />
                              </InputAdornment>
                           ),
                           endAdornment: (
                              <InputAdornment position="end">
                                 <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                 </IconButton>
                              </InputAdornment>
                           ),
                        }}
                     />
                     <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                           textTransform: 'none',
                           fontSize: '16px',
                           padding: '10px 0',
                        }}
                        onClick={addUser}
                     >
                        Register
                     </Button>
                     <Divider sx={{ my: 2 }}>OR</Divider>
                     <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        sx={{
                           textTransform: 'none',
                           fontSize: '16px',
                           padding: '10px 0',
                        }}
                     >
                        <GoogleIcon style={{ padding: '10px' }} />
                        Signup with Google
                     </Button>
                     <Button
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        sx={{
                           textTransform: 'none',
                           fontSize: '16px',
                           padding: '10px 0',
                        }}
                     >
                        <GitHubIcon style={{ padding: '10px', color: 'black' }} />
                        Signup with GitHub
                     </Button>
                     <Typography
                        variant="body2"
                        align="center"
                        sx={{
                           marginTop: 2,
                           color: 'gray',
                        }}
                     >
                        Already have an account?{' '}
                        <a
                           style={{ color: '#1976d2', textDecoration: 'none', cursor: 'pointer' }}
                           onClick={() => setOpen(false)}
                        >
                           Sign In
                        </a>
                     </Typography>
                  </Box>
               </Paper>
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose} color="secondary" >
                  Cancel
               </Button>
               <Button onClick={handleClose} color="primary">
                  Register
               </Button>
            </DialogActions>
         </Dialog>
      </>
   );
};

export default LoginForm;