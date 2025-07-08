import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import Features from "../Features";

export const BlogList = ({ blogs }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        padding: isSmallScreen ? "10px" : "20px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Typography
        variant={isSmallScreen ? "h5" : "h4"}
        sx={{
          marginBottom: "20px",
          fontWeight: "bold",
          color: "#1976d2",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        Explore Our Latest Blogs
      </Typography>
      <Grid container spacing={isSmallScreen ? 2 : 4} sx={{ width: "100%" }}>
        {blogs &&
          blogs.length > 0 &&
          blogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  maxWidth: isSmallScreen ? "100%" : 345,
                  margin: "auto",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  borderRadius: "12px",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 6px 30px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={blog.image.url}
                  alt={blog.image.alt}
                  sx={{
                    borderRadius: "12px 12px 0 0",
                    filter: "brightness(0.95)",
                  }}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#333",
                      fontWeight: "bold",
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <CategoryIcon
                      sx={{ marginRight: "8px", color: "#1976d2" }}
                    />
                    {blog.category.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                      textAlign: "center",
                      marginTop: "10px",
                      color: "#666",
                      fontStyle: "italic",
                      fontSize: "0.9rem",
                    }}
                  >
                    {blog.category.descrition}
                  </Typography>
                </CardContent>
                <Box sx={{ textAlign: "center", marginBottom: "15px" }}>
                  <Link
                    to={`/blog/${blog.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <IconButton
                      sx={{
                        backgroundColor: "#1976d2",
                        color: "#fff",
                        padding: "10px 20px",
                        borderRadius: "20px",
                        "&:hover": {
                          backgroundColor: "#145ca8",
                        },
                      }}
                    >
                      <Typography
                        variant="button"
                        sx={{
                          fontWeight: "bold",
                          fontSize: "0.9rem",
                          textTransform: "uppercase",
                        }}
                      >
                        Read More
                      </Typography>
                    </IconButton>
                  </Link>
                </Box>
              </Card>
            </Grid>
          ))}
      </Grid>
      {blogs && blogs.length === 0 && (
        <Typography
          variant="h6"
          sx={{
            marginTop: "20px",
            color: "#666",
            fontStyle: "italic",
            textAlign: "center",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          No blogs available at the moment. Check back later!
        </Typography>
      )}
      <Box
        sx={{
          marginTop: "40px",
          width: "100%",
          borderTop: "1px solid #ddd",
          paddingTop: "20px",
        }}
      >
        <Features />
      </Box>
    </Box>
  );
};
