import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
   return (
      <Box
         sx={{
            color: '#333',
            textAlign: 'center',
            py: 4,
            mt: 5,
            boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)', 
         }}
      >
         <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            TechBlogs
         </Typography>
         <Typography variant="body2" gutterBottom>
            © {new Date().getFullYear()} TechBlogs. All rights reserved.
         </Typography>
         <Box>
            <IconButton
               href="https://facebook.com"
               target="_blank"
               rel="noopener noreferrer"
               sx={{
                  color: '#3b5998', // Facebook blue
                  transition: 'transform 0.3s, color 0.3s',
                  '&:hover': {
                     color: '#1d3557',
                     transform: 'scale(1.2)', // Slight zoom on hover
                  },
               }}
            >
               <Facebook />
            </IconButton>
            <IconButton
               href="https://twitter.com"
               target="_blank"
               rel="noopener noreferrer"
               sx={{
                  color: '#1da1f2', // Twitter blue
                  transition: 'transform 0.3s, color 0.3s',
                  '&:hover': {
                     color: '#1d3557',
                     transform: 'scale(1.2)',
                  },
               }}
            >
               <Twitter />
            </IconButton>
            <IconButton
               href="https://instagram.com"
               target="_blank"
               rel="noopener noreferrer"
               sx={{
                  color: '#e4405f', // Instagram pink
                  transition: 'transform 0.3s, color 0.3s',
                  '&:hover': {
                     color: '#1d3557',
                     transform: 'scale(1.2)',
                  },
               }}
            >
               <Instagram />
            </IconButton>
            <IconButton
               href="https://linkedin.com"
               target="_blank"
               rel="noopener noreferrer"
               sx={{
                  color: '#0077b5', // LinkedIn blue
                  transition: 'transform 0.3s, color 0.3s',
                  '&:hover': {
                     color: '#1d3557',
                     transform: 'scale(1.2)',
                  },
               }}
            >
               <LinkedIn />
            </IconButton>
         </Box>
         <Typography variant="caption" display="block" sx={{ mt: 2, fontStyle: 'italic' }}>
            "Empowering tech enthusiasts one blog at a time."
         </Typography>
      </Box>
   );
};

export default Footer;