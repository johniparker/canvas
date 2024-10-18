import { useState, useEffect } from "react";
import { useApi } from "../api";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Modules = () => {
  const [modules, setModules] = useState([]);
  const modulesApi = useApi("modules");
  const navigate = useNavigate();

  const fetchModules = async () => {
    try {
      const fetchedModules = await modulesApi.getAll();
      console.log("FETCHED MODULES: ", fetchedModules);
      setModules(fetchedModules);
    } catch (error) {
      console.error("error fetching modules: ", error);
    }
  };

  useEffect(() => {
    fetchModules();
  }, []);

  const handleRedirect = () => {
    navigate("/module-edit");
  };

  const handleEditModule = (module) => {
    navigate(`/module-edit/${module.id}`, { state: { module } });
  };

  return (
    <>
      <Box className="modules" sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          modules
        </Typography>
        {modules.length > 0 ? (
        modules.map((module, index) => (
          <Box key={index} sx={{ marginBottom: 2, padding: 1, border: '1px solid #ddd', borderRadius: 2 }}>
            <Typography variant="h5">{module.title}</Typography>
            <Typography variant="body1">{module.content}</Typography>
            <Typography variant="subtitle2" color="text.secondary">
              module Type: {module.type}
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleEditModule(module)}
              sx={{ marginTop: 1 }}
            >
              Edit Module
            </Button>
          </Box>
        ))
      ) : (
        <Typography variant="body1">No modules available.</Typography>
      )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleRedirect}
          sx={{ marginTop: 2 }}
        >
          Make a module
        </Button>
      </Box>
    </>
  )
};

export default Modules;