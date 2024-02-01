import React, { useEffect, useState } from "react";
import CustomTable from "../../../components/CustomTable";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { userApi } from "../../../service/api/user/userApi";
import useGetuserData from "../../../Hooks/useGetuserData";
import { convertDateToDateWithoutTime } from "../../../utils/calendarHelpers";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const user=useGetuserData(); 



  useEffect(() => {
    const fetchTickets = async () => {
      try {
        // Check if user.id is available before making the API call
        if (user.user && user.user.id) {
          const response = await userApi.getTickets(user.user.id);
          console.log(response,"response");
          setTickets(response.data.message);
          setLoading(false);
        } else {
          // Handle the case when user.id is not available
          console.error('User ID is not available.');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching tickets:', error);
        setLoading(false);
      }
    };
  
    fetchTickets();
  }, []); 

  const columns = [
    {
      label: "title",
      name: "title",
    },
    {
      label: "desc",
      name: "desc",
    },
    {
      label: "category",
      name: "category",
    },
    { label: "Status", name: "status" },
    { label: "priority", name: "priority" },
    {
      label: "Created At",
      name: "date",
      options: {
        customBodyRender: (data) => (
          <span>{convertDateToDateWithoutTime(data)}</span>
        ),
      },
    },
  ];
  return (
    <React.Fragment>
       <Link to="add-tickets">
        <Button variant="contained" sx={{ marginLeft: "auto" }}>
          <AddIcon /> Add Tickets
        </Button>
      </Link> 
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CustomTable columns={columns} data={tickets} title="Tickets" />
      )}
      <Button onClick={()=>{navigate("/user-dashboard");}} >Back</Button>
    </React.Fragment>
  );
};

export default Tickets;
