import { useState, useEffect } from "react";
import { useApi } from "../api";
import RedirectButton from "../components/common/RedirectButton";
import { Box, Typography, Container } from "@mui/material";

const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState([]);
  const announcementsApi = useApi("announcements");

  const fetchAnnouncements = async () => {
    try {
      const fetchedAnnouncements = await announcementsApi.getAll();
      console.log("FETCHED ANNOUNCEMENTS: ", fetchedAnnouncements);
      setAnnouncements(fetchedAnnouncements);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  return (
    <Container maxWidth="md" sx={{ padding: 2 }}>
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Announcements
        </Typography>
        {announcements.length > 0 ? (
          announcements.map((announcement, index) => (
            <Box key={index} sx={{ marginBottom: 2, padding: 2, border: '1px solid #ddd', borderRadius: 2 }}>
              <Typography variant="h6">{announcement.title}</Typography>
              <Typography variant="body1">{announcement.content}</Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body1">No announcements available.</Typography>
        )}
      </Box>
      <RedirectButton path="/announcement-edit" label="Make an Announcement" />
    </Container>
  );
};

export default AnnouncementList;
