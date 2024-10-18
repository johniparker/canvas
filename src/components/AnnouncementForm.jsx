import { FormProvider } from "../context/FormProvider";
import { useApi } from "../api";
import TextInput from "./common/TextInput";
import SubmitButton from "./common/SubmitButton";
import { useNavigate } from "react-router-dom";

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
    <div className="announcement-form-container">
      <h4>Make an Announcement</h4>
      <FormProvider onSubmit={handleAnnouncementSubmission}>
        <TextInput label="title" name="title" required />
        <TextInput label="content" name="content" required />
        <SubmitButton label="Submit" />
      </FormProvider>
    </div>
  );
};

export default AnnouncementForm;
