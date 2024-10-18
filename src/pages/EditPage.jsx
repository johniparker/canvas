import { useAuth } from "../context/AuthProvider";
import PageForm from "../components/PageForm";

const EditPage = () => {
    const { user } = useAuth();
    console.log('PAGE USER: ', user);
    return <PageForm />;
};

export default EditPage;