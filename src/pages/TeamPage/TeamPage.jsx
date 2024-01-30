import React, { useState, useEffect } from "react";

import "./TeamPage.css";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [registeredTeams, setRegisteredTeams] = useState([]);
  const [teamToDelete, setTeamToDelete] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [authToken, setAuthToken] = useState(""); // Set your auth token here

  const navigate = useNavigate();

  useEffect(() => {
    setAuthToken(
      localStorage.getItem("token") ? localStorage.getItem("token") : ""
    );
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/event`
      );
      const data = await response.json();
      setEvents(data.msg);
    } catch (error) {
      console.error("Error fetching events:", error.message);
    }
  };

  const handleEventChange = (event) => {
    setSelectedEvent(event.target.value);
    setRegisteredTeams([]); // Clear teams when selecting a new event
  };

  const handleViewRegisteredTeams = async () => {
    if(selectedEvent === "")
    {
      alert("Select a event and then try again");
      return;
    }
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BASE_URL
        }/api/team/event/${selectedEvent}/registered_teams`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        setRegisteredTeams(data.msg);
      } else {
        alert("You might not a organizer of the event or signin again");
        localStorage.setItem("loggedin",0);
        localStorage.removeItem("token");
        navigate("/");
      }
    } catch (error) {
      alert("Error fetching registerred teams");
    }
  };

  const handleDeleteTeam = async () => {
    try {
      const response = await fetch(`/api/team/${teamToDelete}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        // Refresh the list of registered teams after deletion
        handleViewRegisteredTeams();
        console.log("Team deleted successfully.");
      } else {
        console.error("Error deleting team:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting team:", error.message);
    }
  };

  return (
    <div>
      <h1>Team Page</h1>
      <div>
        <label>Select Event: </label>
        <select value={selectedEvent} onChange={handleEventChange}>
          <option value="" disabled>
            Select an event
          </option>
          {events.map((event) => (
            <option key={event.id} value={event.id}>
              {event.name}
            </option>
          ))}
        </select>
      </div>
      <br />
      <div>
        <button onClick={handleViewRegisteredTeams}>
          View Registered Teams
        </button>
      </div>
      <br />
      {registeredTeams.length > 0 ? (
        <div>
          <h2>Registered Teams</h2>
          <ul>
            {registeredTeams.map((team) => (
              <>
                <li key={team.id}>
                  Team Name: {team.teamName}{" "}
                  {/* <button onClick={() => setTeamToDelete(team.id)}>
                  Delete Team
                </button> */}
                </li>
                <article>
                  <div>Name</div>
                  <div>Email</div>
                  <div>Phone</div>
                </article>
                {team.members.map((member) => (
                  <article key={member.id}>
                    <div>{member.user.firstName}</div>
                    <div>{member.user.email}</div>
                    <div>{member.user.phoneNumber}</div>
                  </article>
                ))}
              </>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
      {teamToDelete && (
        <div>
          <p>Are you sure you want to delete this team?</p>
          <button onClick={handleDeleteTeam}>Confirm Delete</button>
        </div>
      )}
    </div>
  );
};

export default Team;
