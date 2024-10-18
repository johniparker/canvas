import { useAuth } from "../context/AuthProvider";
import AnnouncementForm from "../components/announcements/AnnouncementForm";

const AnnouncementEdit = () => {
  const { user } = useAuth();
  console.log("ANNOUNCEMENTS USER: ", user);
  return <AnnouncementForm />;
};

export default AnnouncementEdit;
