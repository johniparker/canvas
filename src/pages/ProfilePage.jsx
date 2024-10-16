import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import TextInput from "../components/common/TextInput";
import NumberInput from "../components/common/NumberInput";
import SelectInput from "../components/common/SelectInput";
import Button from "../components/common/Button";

const ProfilePage = () => {
  const { user } = useAuth();
  console.log("PROFILE USER: ", user);
  const [name, setName] = useState(user.name || "");
  const [age, setAge] = useState(user.age || "");
  const [major, setMajor] = useState(user.major || "");
  const [userType, setUserType] = useState(user.type || "student");
  const [role, setRole] = useState("");

  const { updateUser } = useAuth();

  const handleProfileSubmission = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Create updated user object
    const updatedData = {
      name,
      age,
      major,
      type: userType, // Set user type based on selection
    };
    console.log("UPDATED DATA: ", updatedData);

    await updateUser(updatedData);
  };
  const roleOptions = [
    { value: "student", label: "Student" },
    { value: "teacher", label: "Teacher" },
  ];
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <form onSubmit={handleProfileSubmission}>
        <TextInput
          id="name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <NumberInput
          id="age"
          label="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <TextInput
          id="major"
          label="Major"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          required
        />
        <SelectInput
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          options={roleOptions}
        />
        <Button type="submit" label="Update Profile" />
      </form>
    </div>
  );
};

export default ProfilePage;
