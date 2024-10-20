import { useState, useEffect } from "react";
import { useApi } from "../api";
import { Box, Typography, Button, Container } from "@mui/material";
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
      console.error("Error fetching modules: ", error);
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
    <Container maxWidth="md" sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom align="center">
        Modules
      </Typography>
      {modules.length > 0 ? (
        modules.map((module, index) => (
          <Box
            key={index}
            sx={{
              marginBottom: 2,
              padding: 2,
              border: '1px solid #ddd',
              borderRadius: 2,
              backgroundColor: "#f9f9f9"
            }}
          >
            <Typography variant="h5">{module.title}</Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              {module.content}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Module Type: {module.type}
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
        <Typography variant="body1" align="center">No modules available.</Typography>
      )}
      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleRedirect}
        >
          Make a Module
        </Button>
      </Box>
    </Container>
  );
};

export default Modules;
