import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import { useApi } from "../api";
import TextInput from "../components/common/TextInput";
import Button from "../components/common/Button";
import AnnouncementList from "../components/profile/AnnouncementList";
import AnnouncementForm from "../components/profile/AnnouncementForm";

const Announcements = () => {
  const { user } = useAuth();
  console.log("ANNOUNCEMENTS USER: ", user);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const today = new Date();
  const announcementsApi = useApi("announcements");

  const handleAnnouncementSubmission = async (e) => {
    e.preventDefault();

    const announcementData = {
      title,
      content,
      date: today
    };
    
    try {
      const createdAnnouncement = await announcementsApi.create(announcementData);
      if (createdAnnouncement) {
        console.log("ANNOUNCEMENT CREATED!!!: ", createdAnnouncement);
        setTitle("");
        setContent(""); 
      }
    } catch (error) {
      console.error("Error creating announcement:", error);
    }
  };
  return (
    <>
      <AnnouncementList />
      <AnnouncementForm />
    </>
  );
};

export default Announcements;
