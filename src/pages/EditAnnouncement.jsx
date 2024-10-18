import { useAuth } from "../context/AuthProvider";
import AnnouncementForm from "../components/AnnouncementForm";

const EditAnnouncement = () => {
  const { user } = useAuth();
  console.log("ANNOUNCEMENTS USER: ", user);
  return <AnnouncementForm />;
};

export default EditAnnouncement;
