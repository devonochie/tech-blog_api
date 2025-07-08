import React from "react";
import { addBlogAction } from "../../Reducers/blogReducers";
import {
   TextField,
   Button,
   Typography,
   Grid,
   Box,
   Container,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const AddBlog = () => {
   const [blogData, setBlogData] = React.useState({
      title: "",
      author: "",
      date: "",
      tags: "",
      categoryName: "",
      categoryDescription: "",
      uses: "",
      read_time: "",
      views: "",
      likes: "",
      comments: "",
      imageUrl: "",
      imageAlt: "",
      codeSnippetLanguage: "",
      codeSnippetCode: "",
      languages: "",
      summary: "",
      content: "",
      seoSlug: "",
      seoKeywords: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setBlogData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const newBlog = {
         ...blogData,
         tags: blogData.tags.split(",").map((tag) => tag.trim()),
         languages: blogData.languages.split(",").map((lang) => lang.trim()),
         seoKeywords: blogData.seoKeywords.split(",").map((keyword) => keyword.trim()),
      };
      console.log(newBlog)
      addBlogAction(newBlog);
   };

   return (
      <Container maxWidth="md">
         <Box sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
               <AddCircleOutlineIcon fontSize="large" sx={{ mr: 1 }} />
               Add New Blog
            </Typography>
            <form onSubmit={handleSubmit}>
               <Grid container spacing={2} >
                  <Grid item xs={12}>
                     <TextField
                        fullWidth
                        label="Title"
                        name="title"
                        value={blogData.title}
                        onChange={handleChange}
                        variant="outlined"
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        fullWidth
                        label="Author"
                        name="author"
                        value={blogData.author}
                        onChange={handleChange}
                        variant="outlined"
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        fullWidth
                        label="Date"
                        name="date"
                        type="date"
                        value={blogData.date}
                        onChange={handleChange}
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        fullWidth
                        label="Tags (comma-separated)"
                        name="tags"
                        value={blogData.tags}
                        onChange={handleChange}
                        variant="outlined"
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        fullWidth
                        label="Category Name"
                        name="categoryName"
                        value={blogData.categoryName}
                        onChange={handleChange}
                        variant="outlined"
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        fullWidth
                        label="Category Description"
                        name="categoryDescription"
                        value={blogData.categoryDescription}
                        onChange={handleChange}
                        variant="outlined"
                        multiline
                        rows={3}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        fullWidth
                        label="Read Time"
                        name="read_time"
                        value={blogData.read_time}
                        onChange={handleChange}
                        variant="outlined"
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        fullWidth
                        label="Image URL"
                        name="imageUrl"
                        value={blogData.imageUrl}
                        onChange={handleChange}
                        variant="outlined"
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        fullWidth
                        label="Image Alt Text"
                        name="imageAlt"
                        value={blogData.imageAlt}
                        onChange={handleChange}
                        variant="outlined"
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        fullWidth
                        label="Code Snippet Language"
                        name="codeSnippetLanguage"
                        value={blogData.codeSnippetLanguage}
                        onChange={handleChange}
                        variant="outlined"
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        fullWidth
                        label="Code Snippet"
                        name="codeSnippetCode"
                        value={blogData.codeSnippetCode}
                        onChange={handleChange}
                        variant="outlined"
                        multiline
                        rows={3}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        fullWidth
                        label="Languages (comma-separated)"
                        name="languages"
                        value={blogData.languages}
                        onChange={handleChange}
                        variant="outlined"
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        fullWidth
                        label="Summary"
                        name="summary"
                        value={blogData.summary}
                        onChange={handleChange}
                        variant="outlined"
                        multiline
                        rows={3}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        fullWidth
                        label="SEO Slug"
                        name="seoSlug"
                        value={blogData.seoSlug}
                        onChange={handleChange}
                        variant="outlined"
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        fullWidth
                        label="SEO Keywords (comma-separated)"
                        name="seoKeywords"
                        value={blogData.seoKeywords}
                        onChange={handleChange}
                        variant="outlined"
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        startIcon={<AddCircleOutlineIcon />}
                     >
                        Add Blog
                     </Button>
                  </Grid>

               </Grid>
            </form>
            
         </Box>
      </Container>
   );
};

export default AddBlog;