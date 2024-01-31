import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useNavigate } from 'react-router-dom';

const Choice = () => {
    const navigate = useNavigate();

    const transferPage=(path)=>{
        console.log(path)
        navigate(`/${path}-login`);
    }
    
  return (
    <Box component="section">
      <Box>
        <Typography variant="h1" component="h1" sx={{ mb: 2 }} align="center">
          Select Who You Are
        </Typography>
        <Box align="center">
          <Button
            variant="outlined"
            size="large"
            startIcon={<PersonIcon />}
            sx={{ m: 2 }}
            onClick={() => transferPage("user")}
          >
            User
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<WorkIcon />}
            sx={{ m: 2 }}
            onClick={() => transferPage("employee")}
          >
            Employee
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<AdminPanelSettingsIcon />}
            sx={{ m: 2 }}
            onClick={() => transferPage("admin")}
          >
            Admin
          </Button>
          {/* <Button variant="outlined" startIcon={<SupervisorAccountIcon />} sx={{ m: 2 }}  onClick={()=>transferPage("manager")}>
            Manager
          </Button> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Choice;
