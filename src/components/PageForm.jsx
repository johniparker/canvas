import { FormProvider } from "../context/FormProvider";
import { useApi } from "../api";
import TextInput from "./common/TextInput";
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
            console.log('PAGE CREATED: ', createdPage);
            navigate("/pages");
        }
    } catch (error) {
        console.error("error creating page: ", error);
    }
  };

  return (
    <div className="page-form-container">
      <h4>Create a Page</h4>
      <FormProvider onSubmit={handlePageSubmission}>
        <TextInput label="title" name="title" required />
        <TextInput label="content" name="content" required />
        <SubmitButton label="Submit" />
      </FormProvider>
    </div>
  );
};

export default PageForm;
