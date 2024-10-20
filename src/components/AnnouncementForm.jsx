import { FormProvider } from "../context/FormProvider";
import { useApi } from "../api";
import TextInput from "./common/TextInput";
import SubmitButton from "./common/SubmitButton";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Container } from "@mui/material";

const AnnouncementForm = () => {
  const announcementsApi = useApi("announcements");
  const navigate = useNavigate();

  const handleAnnouncementSubmission = async (formData) => {
    console.log("FORM DATA: ", formData);
    try {
      const createdAnnouncement = await announcementsApi.create(formData);
      if (createdAnnouncement) {
        console.log("ANNOUNCEMENT CREATED: ", createdAnnouncement);
        navigate("/announcements");
      }
    } catch (error) {
      console.error("Error creating announcement:", error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ padding: 2 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Make an Announcement
        </Typography>
        <FormProvider onSubmit={handleAnnouncementSubmission}>
          <TextInput label="Title" name="title" required />
          <TextInput label="Content" name="content" required />
          <SubmitButton label="Submit" />
        </FormProvider>
      </Box>
    </Container>
  );
};

export default AnnouncementForm;
