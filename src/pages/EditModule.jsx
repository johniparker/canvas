import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useApi } from "../api";
import ModuleForm from "../components/ModuleForm";

const EditModule = () => {
  const { user } = useAuth();
  console.log("MODULES USER: ", user);

  const { moduleId } = useParams();
  const modulesApi = useApi("modules");
  const [module, setModule] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchModule = async () => {
      try {
        setLoading(true);
        const moduleData = await modulesApi.getById(moduleId);
        console.log("FETCHED MODULE: ", moduleData);
        setModule(moduleData);
      } catch (error) {
        console.error("error fetching module: ", error);
      } finally {
        setLoading(false);
      }
    };

    if (moduleId) {
      fetchModule();
    }
  }, [moduleId]);

  if (loading) {
    return <p>loading...</p>;
  }
  return <ModuleForm module={module} />;
};

export default EditModule;
