import PropTypes from 'prop-types';
import React from 'react';
import { useParams } from 'react-router-dom';
import {
   Box,
   Typography,
   Card,
   CardMedia,
   CardContent,
   Chip,
   List,
   ListItem,
   ListItemText,
   Divider,
   Avatar,
} from '@mui/material';
import { AccessTime, Visibility, ThumbUp, Comment } from '@mui/icons-material';

const BlogDetails = ({ blogs, loading, error }) => {
   const { id } = useParams();

   if (loading) {
      return <Typography variant="h6" align="center">Loading...</Typography>;
   }
   if (error) {
      return <Typography variant="h6" align="center" color="error">Error: {error}</Typography>;
   }
   if (!blogs || blogs.length === 0) {
      return <Typography variant="h6" align="center">No blogs available</Typography>;
   }

   const blog = blogs.find(blog => blog.id === id);
   if (!blog) {
      return <Typography variant="h6" align="center">Blog not found</Typography>;
   }

   return (
      <Box sx={{ padding: 4, fontFamily: 'Arial, sans-serif', lineHeight: 1.6, color: '#333' }}>
         <Typography variant="h3" align="center" color="primary" gutterBottom>
            {blog.title}
         </Typography>
         <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
            By {blog.author} | <AccessTime fontSize="small" /> {blog.date} | <Visibility fontSize="small" /> {blog.views} views | <ThumbUp fontSize="small" /> {blog.likes} likes
         </Typography>
         <Card sx={{ maxWidth: 600, margin: '20px auto', borderRadius: 2 }}>
            <CardMedia
               component="img"
               image={blog.image.url}
               alt={blog.image.alt}
               sx={{ borderRadius: 2 }}
            />
         </Card>
         <Typography variant="h5" color="primary" gutterBottom>
            {blog.category.name}
         </Typography>
         <Typography variant="body1" paragraph>
            {blog.category.descrition}
         </Typography>
         <Typography variant="h6" gutterBottom>
            Summary
         </Typography>
         <Typography variant="body1" paragraph>
            {blog.summary}
         </Typography>
         <Typography variant="h6" gutterBottom>
            Tags
         </Typography>
         <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {blog.tags.map((tag, index) => (
               <Chip key={index} label={tag} variant="outlined" />
            ))}
         </Box>
         <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
            Uses
         </Typography>
         <List>
            {blog.uses.map((use, index) => (
               <ListItem key={index}>
                  <ListItemText
                     primary={use.name}
                     secondary={use.description}
                  />
               </ListItem>
            ))}
         </List>
         <Typography variant="h6" gutterBottom>
            Content
         </Typography>
         {blog.content.map((section, index) => {
            if (section.type === 'paragraph') {
               return <Typography key={index} variant="body1" paragraph>{section.text}</Typography>;
            } else if (section.type === 'code') {
               return (
                  <Box
                     key={index}
                     component="pre"
                     sx={{
                        background: '#f8f8f8',
                        padding: 2,
                        borderRadius: 1,
                        overflowX: 'auto',
                     }}
                  >
                     <code>{section.code}</code>
                  </Box>
               );
            } else if (section.type === 'heading') {
               return React.createElement(`h${section.level}`, { key: index }, section.text);
            }
            return null;
         })}
         <Typography variant="h6" gutterBottom>
            Code Snippet
         </Typography>
         <Box
            component="pre"
            sx={{
               background: '#f8f8f8',
               padding: 2,
               borderRadius: 1,
               overflowX: 'auto',
            }}
         >
            <code>{blog['code-snippet'].code}</code>
         </Box>
         <Typography variant="h6" gutterBottom>
            Languages
         </Typography>
         <List>
            {blog.languages.map((language, index) => (
               <ListItem key={index}>
                  <ListItemText primary={language} />
               </ListItem>
            ))}
         </List>
         <Typography variant="h6" gutterBottom>
            Comments
         </Typography>
         {blog.comments.map((comment, index) => (
            <Box
               key={index}
               sx={{
                  margin: '10px 0',
                  padding: 2,
                  border: '1px solid #ccc',
                  borderRadius: 1,
               }}
            >
               <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                  <Avatar sx={{ marginRight: 1 }}>{comment.user[0]}</Avatar>
                  <Typography variant="subtitle2">{comment.user}</Typography>
               </Box>
               <Typography variant="body2">{comment.comment}</Typography>
            </Box>
         ))}
      </Box>
   );
};

BlogDetails.propTypes = {
   blogs: PropTypes.array,
   loading: PropTypes.bool,
   error: PropTypes.string,
};

export default BlogDetails;