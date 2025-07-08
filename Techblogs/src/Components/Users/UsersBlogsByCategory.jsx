import React, { useState } from "react";
import CategoryIcon from "@mui/icons-material/Category";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Link } from "react-router-dom";

const UsersBlogsByCategory = ({users}) => {
const [selectedCategory, setSelectedCategory] = useState("");

const categories = [
   ...new Set(users.flatMap((user) => user.blogs.map((blog) => blog.category))),
];

const handleCategoryChange = (event) => {
   setSelectedCategory(event.target.value);
};

const filteredBlogs = users
   .flatMap((user) => user.blogs)
   .filter((blog) => (selectedCategory ? blog.category === selectedCategory : true));


return (
   <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
         Blogs by Category
      </Typography>
      <FormControl fullWidth sx={{ marginBottom: 4 }}>
         <InputLabel id="category-select-label">
            <CategoryIcon sx={{ marginRight: 1 }} />
            Select Category
         </InputLabel>
         <Select
            labelId="category-select-label"
            value={selectedCategory}
            onChange={handleCategoryChange}
         >
            <MenuItem value="">All Categories</MenuItem>
            {categories.map((category) => (
               <MenuItem key={category} value={category}>
                  {category}
               </MenuItem>
            ))}
         </Select>
      </FormControl>
      <Grid container spacing={3}>
         {filteredBlogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog.id}>
               <Card>
                  <CardMedia
                     component="img"
                     height="140"
                     image={blog.image.url}
                     alt={blog.image.alt}
                  />
                  <CardContent>
                     <Typography variant="h6">{blog.title}</Typography>
                     <Typography variant="body2" color="text.secondary">
                        {blog.summary}
                     </Typography>
                     <Typography variant="caption" display="block" sx={{ marginTop: 1 }}>
                        {blog.date}
                     </Typography>
                     <Button
                        variant="contained"
                        size="small"
                        sx={{ marginTop: 2 }}
                     >
                        <Link to={`/users/${blog.id}`} >
                           Read More
                        </Link>
                       
                     </Button>
                  </CardContent>
               </Card>
            </Grid>
         ))}
      </Grid>
   </Box>
);
};

export default UsersBlogsByCategory