import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Alert, Menu, MenuItem } from '@mui/material';
import HandymanIcon from '@mui/icons-material/Handyman';
import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import PeopleIcon from '@mui/icons-material/People';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';


const AppBarComponent = () => {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const [drawerOpen, setDrawerOpen] = React.useState(false);
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

   const userLoggedIn = window.localStorage.getItem('user')

   const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleMenuClose = () => {
      setAnchorEl(null);
   };

   const toggleDrawer = (open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
         return;
      }
      setDrawerOpen(open);
   };

   const drawerContent = (
      <List>
         <ListItem button component="a" href="/">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
         </ListItem>
         <ListItem button onClick={handleMenuOpen}>
            <ListItemIcon><CategoryIcon /></ListItemIcon>
            <ListItemText primary="Category" />
         </ListItem>
         <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose} component="a" href="/category">
               Database
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="/category">
               Algorithms
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="/category">
               Frontend-Devops
            </MenuItem>
         </Menu>
         <ListItem button component="a" href="/create">
            <ListItemIcon><AddIcon /></ListItemIcon>
            <ListItemText primary="Add New" />
         </ListItem>
         <ListItem button component="a" href="/users">
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Users Blogs" />
         </ListItem>
         <ListItem button component="a" href="/contact">
            <ListItemIcon><ContactMailIcon /></ListItemIcon>
            <ListItemText primary="Contact" />
         </ListItem>
         <ListItem button component="a" href="/login">
            <ListItemIcon><LoginIcon /></ListItemIcon>
            <ListItemText primary="Login" />
         </ListItem>
      </List>
   );

   return (
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
         <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
               <HandymanIcon fontSize='large' />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: '30px' }}>
               TechBlogs
            </Typography>
            {isMobile ? (
               <>
                  <IconButton color="inherit" onClick={toggleDrawer(true)}>
                     <MenuIcon />
                  </IconButton>
                  <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                     {drawerContent}
                  </Drawer>
               </>
            ) : (
               <>
                  <IconButton color="inherit" href="/">
                     <HomeIcon />
                     <Typography style={{ padding: '10px', fontWeight: 'bold' }}>Home</Typography>
                  </IconButton>
                  <IconButton color="inherit" onClick={handleMenuOpen}>
                     <CategoryIcon />
                     <Typography style={{ padding: '10px', fontWeight: 'bold' }}>Category</Typography>
                  </IconButton>
                  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                     <MenuItem onClick={handleMenuClose} component="a" href="/category">
                        Database
                     </MenuItem>
                     <MenuItem onClick={handleMenuClose} component="a" href="/category">
                        Algorithms
                     </MenuItem>
                     <MenuItem onClick={handleMenuClose} component="a" href="/category">
                        Frontend-Devops
                     </MenuItem>
                  </Menu>
                  {userLoggedIn ? (
                     <IconButton color="inherit" href="/create">
                        <AddIcon />
                        <Typography style={{ padding: '10px', fontWeight: 'bold' }}>Add New</Typography>
                     </IconButton>
                  ) : (
                     <Alert severity="info" sx={{ marginLeft: '10px' }}>
                        Please login
                     </Alert>
                  )}
                  <IconButton color="inherit" href="/users">
                     <PeopleIcon />
                     <Typography style={{ padding: '10px', fontWeight: 'bold' }}>Users Blogs</Typography>
                  </IconButton>
                  <IconButton color="inherit" href="/contact">
                     <ContactMailIcon />
                     <Typography style={{ padding: '10px', fontWeight: 'bold' }}>Contact</Typography>
                  </IconButton>
                  <IconButton color="inherit" href="/login">
                     <LoginIcon />
                     <Typography style={{ padding: '10px', fontWeight: 'bold', marginLeft: '20px' }}>Login</Typography>
                  </IconButton>
               </>
            )}
         </Toolbar>
      </AppBar>
   );
};

export default AppBarComponent;
