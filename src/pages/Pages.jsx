import { useState, useEffect } from "react";
import { useApi } from "../api";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Pages = () => {
  const [pages, setPages] = useState([]);
  const pagesApi = useApi("pages");
  const navigate = useNavigate();

  const fetchPages = async () => {
    try {
      const fetchedPages = await pagesApi.getAllGroupedBy("type");
      console.log("FETCHED PAGES: ", fetchedPages);
      setPages(fetchedPages);
    } catch (error) {
      console.error("Error fetching pages: ", error);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const handleRedirect = () => {
    navigate("/page-edit");
  };

  return (
    <Container maxWidth="md" sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom align="center">
        Pages
      </Typography>
      {Object.keys(pages).length > 0 ? (
        Object.entries(pages).map(([pageType, pageArray]) => (
          <Box key={pageType} sx={{ marginBottom: 4 }}>
            <Typography variant="h5" gutterBottom>
              {pageType !== "undefined" ? pageType : "No Specific Type"}
            </Typography>
            {pageArray.map((page, index) => (
              <Box
                key={index}
                sx={{
                  marginBottom: 2,
                  padding: 2,
                  border: "1px solid #ddd",
                  borderRadius: 2,
                  backgroundColor: "#f9f9f9", // Light background for better visibility
                }}
              >
                <Typography variant="h6">{page.title}</Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  {page.content}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Page Type: {page.type}
                </Typography>
              </Box>
            ))}
          </Box>
        ))
      ) : (
        <Typography variant="body1" align="center">No pages available.</Typography>
      )}
      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleRedirect}
        >
          Make a page
        </Button>
      </Box>
    </Container>
  );
};

export default Pages;
