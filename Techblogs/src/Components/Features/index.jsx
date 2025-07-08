import React from 'react';
import { Button, Typography, Box, Grid, List, ListItem, ListItemIcon, ListItemText, DialogActions, DialogContentText, DialogContent, DialogTitle, Dialog, TextField } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import TopicIcon from '@mui/icons-material/Topic';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import ForumIcon from '@mui/icons-material/Forum';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EventIcon from '@mui/icons-material/Event';

const Features = () => {
   const [email, setEmail] = React.useState('')
   const [open , setOpen] = React.useState(true)

   const handleSubmit = () => {
      console.log('subscribed')
   }
   const handleClose = () => {
      setOpen(false)
   }
   return (
      <Box className="features-container" sx={{ padding: 2 }}>
         <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
               <Box className="feature">
                  <Typography variant="h5" gutterBottom>
                     <ArticleIcon sx={{ marginRight: 1 }} /> Latest Articles
                  </Typography>
                  <Typography variant="body1">
                     Stay updated with the latest trends and insights in technology.
                  </Typography>
               </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
               <Box className="feature">
                  <Typography variant="h5" gutterBottom>
                     <TopicIcon sx={{ marginRight: 1 }} /> Popular Topics
                  </Typography>
                  <List>
                     <ListItem>
                        <ListItemIcon>
                           <TopicIcon />
                        </ListItemIcon>
                        <ListItemText primary="Artificial Intelligence" />
                     </ListItem>
                     <ListItem>
                        <ListItemIcon>
                           <TopicIcon />
                        </ListItemIcon>
                        <ListItemText primary="Web Development" />
                     </ListItem>
                     <ListItem>
                        <ListItemIcon>
                           <TopicIcon />
                        </ListItemIcon>
                        <ListItemText primary="Cloud Computing" />
                     </ListItem>
                     <ListItem>
                        <ListItemIcon>
                           <TopicIcon />
                        </ListItemIcon>
                        <ListItemText primary="Cybersecurity" />
                     </ListItem>
                  </List>
               </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
               <Box className="feature">
                  <Typography variant="h5" gutterBottom>
                     <PersonIcon sx={{ marginRight: 1 }} /> Featured Authors
                  </Typography>
                  <Typography variant="body1">
                     Meet the experts behind our insightful articles.
                  </Typography>
               </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
               <Box className="feature">
                  <Typography variant="h5" gutterBottom>
                     <EmailIcon sx={{ marginRight: 1 }} /> Subscribe to Our Newsletter
                  </Typography>
                  <Typography variant="body1">
                     Get the latest updates delivered straight to your inbox.
                  </Typography>
                  <Button
                     variant="contained"
                     color="primary"
                     sx={{ marginTop: 2 }}
                     onClick={() => setOpen(true)}
                  >
                     Subscribe
                  </Button>
                  <Dialog open={open} onClose={handleClose}>
                     <DialogTitle>Subscribe to Newsletter</DialogTitle>
                     <DialogContent>
                        <DialogContentText>
                           Enter your email address to subscribe to our newsletter.
                        </DialogContentText>
                        <TextField
                           autoFocus
                           margin="dense"
                           label="Email Address"
                           type="email"
                           fullWidth
                           variant="outlined"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                        />
                     </DialogContent>
                     <DialogActions>
                        <Button onClick={handleClose} color="secondary">
                           Cancel
                        </Button>
                        <Button onClick={handleSubmit} color="primary">
                           Subscribe
                        </Button>
                     </DialogActions>
                  </Dialog>
               </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
               <Box className="feature">
                  <Typography variant="h5" gutterBottom>
                     <ForumIcon sx={{ marginRight: 1 }} /> Community Highlights
                  </Typography>
                  <Typography variant="body1">
                     Discover what our readers are talking about.
                  </Typography>
               </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
               <Box className="feature">
                  <Typography variant="h5" gutterBottom>
                     <CodeIcon sx={{ marginRight: 1 }} /> Coding Challenges
                  </Typography>
                  <Typography variant="body1">
                     Test your skills with our weekly coding challenges.
                  </Typography>
               </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
               <Box className="feature">
                  <Typography variant="h5" gutterBottom>
                     <SchoolIcon sx={{ marginRight: 1 }} /> Learning Resources
                  </Typography>
                  <Typography variant="body1">
                     Access tutorials, guides, and courses to enhance your knowledge.
                  </Typography>
               </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
               <Box className="feature">
                  <Typography variant="h5" gutterBottom>
                     <TrendingUpIcon sx={{ marginRight: 1 }} /> Trending Technologies
                  </Typography>
                  <Typography variant="body1">
                     Explore the technologies shaping the future of the industry.
                  </Typography>
               </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
               <Box className="feature">
                  <Typography variant="h5" gutterBottom>
                     <EventIcon sx={{ marginRight: 1 }} /> Upcoming Events
                  </Typography>
                  <Typography variant="body1">
                     Stay informed about tech conferences and meetups.
                  </Typography>
               </Box>
            </Grid>
         </Grid>
      </Box>
   );
};

export default Features;