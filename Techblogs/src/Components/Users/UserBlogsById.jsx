import React from 'react';
import { Card, CardContent, Typography, CardMedia, Chip, Box } from '@mui/material';
import { AccessTime, Visibility, ThumbUp } from '@mui/icons-material';
import { useParams } from 'react-router-dom';

const UserBlogsById = ({ users }) => {
  const { id } = useParams();

  let foundBlog = null;

  for (const user of users) {
    const blog = user.blogs.find(b => b.id === id);
    if (blog) {
      foundBlog = blog;
      break;
    }
  }

  if (!foundBlog) {
    return (
      <Typography variant="h6" color="text.secondary" align="center">
        Blog not found.
      </Typography>
    );
  }

  return (
    <Card sx={{ maxWidth: 800, margin: '20px auto' }}>
      <CardMedia
        component="img"
        height="200"
        image={foundBlog.image?.url || 'https://via.placeholder.com/200'}
        alt={foundBlog.image?.alt || 'Blog Image'}
      />
      <CardContent>
        <Typography variant="h4" component="div" gutterBottom>
          {foundBlog.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {foundBlog.summary}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', marginBottom: 2 }}>
          {foundBlog.tags.map((tag, index) => (
            <Chip key={index} label={tag} />
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
          <Typography variant="body2" color="text.secondary">
            <AccessTime fontSize="small" sx={{ verticalAlign: 'middle', marginRight: 0.5 }} />
            {foundBlog.read_time}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Visibility fontSize="small" sx={{ verticalAlign: 'middle', marginRight: 0.5 }} />
            {foundBlog.views}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <ThumbUp fontSize="small" sx={{ verticalAlign: 'middle', marginRight: 0.5 }} />
            {foundBlog.likes}
          </Typography>
        </Box>

        {/* Render full blog content */}
        {foundBlog.content.map((section, index) => {
          if (section.type === 'paragraph') {
            return (
              <Typography key={index} paragraph>
                {section.text}
              </Typography>
            );
          } else if (section.type === 'code') {
            return (
              <pre key={index} style={{ background: '#f5f5f5', padding: '10px', overflowX: 'auto' }}>
                <code>{section.code}</code>
              </pre>
            );
          } else {
            return null;
          }
        })}
      </CardContent>
    </Card>
  );
};

export default UserBlogsById;