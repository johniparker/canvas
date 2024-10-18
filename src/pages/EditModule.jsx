import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from "../context/AuthProvider";
import { useApi } from "../api";
import ModuleForm from "../components/ModuleForm";

const EditModule = async () => {
    const { user } = useAuth();
    console.log("MODULES USER: ", user);

    const { moduleId } = useParams();
    const modulesApi = useApi("modules");
    
    const fetchedModule = await modulesApi.getById(moduleId);

    useEffect(() => {
        console.log("MODULE ID: ", moduleId)
    }, [moduleId])
    return <ModuleForm module={fetchedModule}/>;
};

export default EditModule;