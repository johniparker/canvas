import { FormProvider } from "../context/FormProvider";
import { useApi } from "../api";
import TextInput from "./common/TextInput";
import SelectInput from "./common/SelectInput";
import SubmitButton from "./common/SubmitButton";
import { useNavigate } from "react-router-dom";

const PageForm = () => {
  const pagesApi = useApi("pages");
  const navigate = useNavigate();

  const handlePageSubmission = async (formData) => {
    console.log("FORM DATA: ", formData);
    try {
      const createdPage = await pagesApi.create(formData);
      if (createdPage) {
        console.log("PAGE CREATED: ", createdPage);
        navigate("/pages");
      }
    } catch (error) {
      console.error("error creating page: ", error);
    }
  };

  const pageTypes = [
    { value: "HomePage", label: "HomePage" },
    { value: "GenericPage", label: "GenericPage" },
    { value: "Assignment", label: "Assignment" },
    { value: "InClassExercise", label: "InClassExercise" },
    { value: "HomePage", label: "HomePage" },
  ];

  return (
    <div className="page-form-container">
      <h4>Create a Page</h4>
      <FormProvider onSubmit={handlePageSubmission}>
        <TextInput label="title" name="title" required />
        <TextInput label="content" name="content" required />
        <SelectInput label="type" name="type" options={pageTypes} required />
        <SubmitButton label="Submit" />
      </FormProvider>
    </div>
  );
};

export default PageForm;
