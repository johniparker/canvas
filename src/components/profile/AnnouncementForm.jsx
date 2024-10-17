import { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { useApi } from "../../api";
import TextInput from "../../components/common/TextInput";
import Button from "../../components/common/Button";

const AnnouncementForm = () => {
  const { user } = useAuth();
  const announcementsApi = useApi("announcements");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const today = new Date();

  const handleAnnouncementSubmission = async (e) => {
    e.preventDefault();

    const announcementData = {
      title,
      content,
      date: today,
    };

    try {
      const createdAnnouncement = await announcementsApi.create(
        announcementData
      );
      if (createdAnnouncement) {
        console.log("ANNOUNCEMENT CREATED: ", createdAnnouncement);
        setTitle("");
        setContent("");
      }
    } catch (error) {
      console.error("Error creating announcement:", error);
    }
  };
  return (
    <div className="announcement-form-container">
        <h4>Make an Announcement</h4>
        <form onSubmit={handleAnnouncementSubmission}>
          <TextInput
            id="title"
            label="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextInput
            id="content"
            label="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <Button type="submit" label="Submit" />
        </form>
      </div>
  );
};

export default AnnouncementForm; 