import React from "react";
import { Container, Typography, TextField, Button, Grid, Box } from "@mui/material";
import { Email, Feedback } from "@mui/icons-material";

const About = () => {
   return (
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
         <Typography variant="h4" gutterBottom align="center">
            About Us
         </Typography>
         <Typography variant="body1" paragraph align="center">
            Welcome to TechBlogs! We are dedicated to providing you with the latest tech news, tutorials, and insights. 
            Our mission is to empower tech enthusiasts and professionals with valuable knowledge and resources.
         </Typography>

         <Box sx={{ mt: 6 }}>
            <Typography variant="h5" gutterBottom>
               <Feedback sx={{ mr: 1 }} />
               Submit a Complaint
            </Typography>
            <form>
               <Grid container spacing={2}>
                  <Grid item xs={12}>
                     <TextField
                        fullWidth
                        label="Your Name"
                        variant="outlined"
                        required
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        fullWidth
                        label="Your Email"
                        variant="outlined"
                        type="email"
                        required
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        fullWidth
                        label="Your Complaint"
                        variant="outlined"
                        multiline
                        rows={4}
                        required
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <Button variant="contained" color="primary" type="submit">
                        Submit
                     </Button>
                  </Grid>
               </Grid>
            </form>
         </Box>

         <Box sx={{ mt: 6 }}>
            <Typography variant="h5" gutterBottom>
               <Email sx={{ mr: 1 }} />
               Subscribe to Our Newsletter
            </Typography>
            <form>
               <Grid container spacing={2}>
                  <Grid item xs={12}>
                     <TextField
                        fullWidth
                        label="Your Email"
                        variant="outlined"
                        type="email"
                        required
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <Button variant="contained" color="secondary" type="submit">
                        Subscribe
                     </Button>
                  </Grid>
               </Grid>
            </form>
         </Box>
      </Container>
   );
};

export default About;