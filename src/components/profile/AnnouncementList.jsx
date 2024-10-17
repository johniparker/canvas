import { useState, useEffect } from "react";
import { useApi } from "../../api";

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
    <div className="announcement-list">
      <h2>Announcements</h2>
      {announcements.length > 0 ? (
        announcements.map((announcement, index) => (
          <div key={index}>
            <h3>{announcement.title}</h3>
            <p>{announcement.content}</p>
            <p>
              <small>{new Date(announcement.date).toLocaleString()}</small>
            </p>
          </div>
        ))
      ) : (
        <p>No announcements available.</p>
      )}
    </div>
  );
};

export default AnnouncementList;
