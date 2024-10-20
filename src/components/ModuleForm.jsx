import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../api";
import { FormProvider } from "../context/FormProvider";
import TextInput from "./common/TextInput";
import SubmitButton from "./common/SubmitButton";

const ModuleForm = ({ module }) => {
  const modulesApi = useApi("modules");
  const navigate = useNavigate();
  console.log('MODULE: ', module);

  const handleModuleSubmission = async (formData) => {
    const newModule = {
      title: formData.title,
      content: formData.content,
      published: false,
    };
    try {
      const createdModule = await modulesApi.create(newModule);
      if (createdModule) {
        console.log("MODULE CREATED: ", createdModule);
        navigate("/modules");
      }
    } catch (error) {
      console.error("error creating module: ", error);
    }
  };

  const handleModuleEdit = async (formData) => {
    const newModule = {
      title: formData.title,
      content: formData.content,
      published: module.published
    };
    try {
      const updatedModule = await modulesApi.update(module.id, newModule);
      if (updatedModule) {
        console.log('MODULE UPDATED: ', updatedModule);
        navigate("/modules");
      }
    } catch (error ) {
      console.error("error updating module: ", error);
    }
  };

  const handlePublish = async () => {
    if (!module) return; // Check to ensure module exists

    const updatedModuleData = {
      title: module.title,
      content: module.content,
      published: !module.published, // Toggle the published state
    };

    try {
      const updatedModule = await modulesApi.update(
        module.id,
        updatedModuleData
      );
      if (updatedModule) {
        console.log("MODULE UPDATED: ", updatedModule);
        navigate("/modules");
      }
    } catch (error) {
      console.error("error updating module: ", error);
    }
  };
  return (
    <>
      <div className="module-form-container">
        <FormProvider onSubmit={module ? handleModuleEdit : handleModuleSubmission} defaultValue={module}>
          <TextInput label="title" name="title" required />
          <TextInput label="content" name="content" required />
          <SubmitButton label="Submit" />
        </FormProvider>
      </div>
      {module && (
        <button onClick={handlePublish}>
          {module.published ? "Unpublish" : "Publish"}
        </button>
      )}
    </>
  );
};

export default ModuleForm;
