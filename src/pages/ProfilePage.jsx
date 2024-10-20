import React from "react";
import { useAuth } from "../context/AuthProvider";
import { FormProvider } from "../context/FormProvider";
import TextInput from "../components/common/TextInput"; // If you want to customize this
import NumberInput from "../components/common/NumberInput"; // If you want to customize this
import SelectInput from "../components/common/SelectInput"; // If you want to customize this
import SubmitButton from "../components/common/SubmitButton"; // If you want to customize this
import {
  Container,
  Typography,
  Box,
  Grid,
} from "@mui/material";

const ProfilePage = () => {
  const { user } = useAuth();
  console.log("PROFILE USER: ", user);

  const { name, age, major, role } = user;
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
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Profile
      </Typography>
      <FormProvider onSubmit={handleProfileSubmission} defaultValue={{ name, age, major, role }}>
        <Box sx={{ mb: 2 }}>
          <TextInput label="Name" name="name" required />
        </Box>
        <Box sx={{ mb: 2 }}>
          <NumberInput label="Age" name="age" required />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextInput label="Major" name="major" required />
        </Box>
        <Box sx={{ mb: 2 }}>
          <SelectInput label="Role" name="role" options={roleOptions} />
        </Box>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <SubmitButton name="updateProfile" label="Update Profile" />
        </Box>
      </FormProvider>
    </Container>
  );
};

export default ProfilePage;
