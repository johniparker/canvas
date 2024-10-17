import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import { useApi } from "../api";
import TextInput from "../components/common/TextInput";
import Button from "../components/common/Button";

const Announcements = () => {
  const { user } = useAuth();
  console.log("ANNOUNCEMENTS USER: ", user);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [announcements, setAnnouncements] = useState([]);

  const today = new Date();
  const announcementsApi = useApi("announcements");
  console.log('ANNOUNCEMENTS API: ', announcementsApi)

  const fetchAnnouncements = async () => {
    try {
      const fetchedAnnouncements = await announcementsApi.getAll();
      console.log('FETCHED ANNOUNCEMENTS: ', fetchedAnnouncements);
      setAnnouncements(fetchedAnnouncements);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

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
        fetchAnnouncements();
        setTitle("");
        setContent(""); 
      }
    } catch (error) {
      console.error("Error creating announcement:", error);
    }
  };
  return (
    <>
      <div className="announcement-list">
        <h2>Announcements</h2>
        {announcements.length > 0 ? (
          announcements.map((announcement, index) => (
            <div key={index}>
              <h3>{announcement.title}</h3>
              <p>{announcement.content}</p>
              <p><small>{new Date(announcement.date).toLocaleString()}</small></p>
            </div>
          ))
        ) : (
          <p>No announcements available.</p>
        )}
      </div>
      <div className="announcement-form-container">
        <h2>Make an Announcement</h2>
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
    </>
  );
};

export default Announcements;
