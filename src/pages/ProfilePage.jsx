import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { FormProvider } from "../context/FormProvider";
import TextInput from "../components/common/TextInput";
import NumberInput from "../components/common/NumberInput";
import SelectInput from "../components/common/SelectInput";
import SubmitButton from "../components/common/SubmitButton";

const ProfilePage = () => {
  const { user } = useAuth();
  console.log("PROFILE USER: ", user);

  const {name, age, major, role } = user;
  const { updateUser } = useAuth();

  const handleProfileSubmission = async (formData) => {
    try {
      const updatedUser = await updateUser(formData);
      if (updatedUser) {
        console.log("USER UPDATED: ", updatedUser);
      }
    } catch (error) {
      console.error("error updating profile: ", error);
    }
  };
  const roleOptions = [
    { value: "student", label: "Student" },
    { value: "teacher", label: "Teacher" },
  ];
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <FormProvider onSubmit={handleProfileSubmission} defaultValue={{name, age, major, role}}>
        <TextInput label="name" name="name" required />
        <NumberInput label="age" name="age" required />
        <TextInput label="major" name="major" required />
        <SelectInput label="role" name="role" options={roleOptions} />
        <SubmitButton name="updateprofile" label="Update Profile" />
      </FormProvider>
    </div>
  );
};

export default ProfilePage;
