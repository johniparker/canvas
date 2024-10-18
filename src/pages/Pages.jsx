import { useState, useEffect } from "react";
import { useApi } from "../api";
import { Box, Typography, Button } from "@mui/material";
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
      console.error("error fetching pages: ", pages);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const handleRedirect = () => {
    navigate("/page-edit");
  };

  return (
    <>
      <Box className="pages" sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom>
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
                    padding: 1,
                    border: "1px solid #ddd",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6">{page.title}</Typography>
                  <Typography variant="body1">{page.content}</Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Page Type: {page.type}
                  </Typography>
                </Box>
              ))}
            </Box>
          ))
        ) : (
          <Typography variant="body1">No pages available.</Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleRedirect}
          sx={{ marginTop: 2 }}
        >
          Make a page
        </Button>
      </Box>
    </>
  );
};

export default Pages;
