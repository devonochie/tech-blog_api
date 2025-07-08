import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Avatar,
  Chip,
  IconButton,
} from '@mui/material';
import { Favorite, Visibility, Comment } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const UsersBlogs = ({ users }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Users' Blogs
      </Typography>
      {users.map((user, userIndex) => (
        <Box key={userIndex} sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            {user.name}
          </Typography>
          <Grid container spacing={3}>
            {user.blogs.map((blog) => (
              <Grid item xs={12} sm={6} md={4} key={blog.id}>
                <Link to={`/users/${blog.id}`} >
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image={blog.image.url}
                      alt={blog.image.alt}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {blog.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {blog.summary}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginBottom: 2 }}>
                        {blog.tags.map((tag, index) => (
                          <Chip key={index} label={tag} size="small" />
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <IconButton size="small" color="primary">
                          <Favorite />
                        </IconButton>
                        <Typography variant="body2">{blog.likes}</Typography>
                        <IconButton size="small" color="primary">
                          <Visibility />
                        </IconButton>
                        <Typography variant="body2">{blog.views}</Typography>
                        <IconButton size="small" color="primary">
                          <Comment />
                        </IconButton>
                        <Typography variant="body2">{blog.comments.length}</Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Link> 
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default UsersBlogs;