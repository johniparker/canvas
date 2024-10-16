import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import TextInput from "../components/common/TextInput";
import Button from "../components/common/Button";

const Announcements = () => {
  const { user } = useAuth();
  console.log("ANNOUNCEMENTS USER: ", user);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const today = new Date();

  const handleAnnouncementSubmission = async (e) => {
    e.preventDefault();

    const announcementData = {
      title,
      content,
    };
    console.log("ANNOUNCEMENT DATA: ", announcementData);
  };
  return (
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
  );
};

export default Announcements;
