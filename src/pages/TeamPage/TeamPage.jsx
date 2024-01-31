import React, { useState, useEffect } from "react";

import "./TeamPage.css";
import { useNavigate } from "react-router-dom";

import Team from "../../components/Team/Team";

const TeamPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [registeredTeams, setRegisteredTeams] = useState([]);
  const [teamToDelete, setTeamToDelete] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [authToken, setAuthToken] = useState(""); // Set your auth token here

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      alert("User must be logged in");
      navigate("/");
    }
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
    setShowResult(false);
  };

  const handleViewRegisteredTeams = async () => {
    if (selectedEvent === "") {
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
        setShowResult(true);
      } else {
        alert("You might not be an organizer of the event or the session may expire!! Please logout and log in again");
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

  const logout = () => {
    localStorage.setItem("loggedin", 0);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div>
      <nav>
        <h1>Team Page</h1>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
          >
            Logout
          </button>
        </div>
      </nav>
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
          <div className="teams">
            {registeredTeams.map((team) => (
              <Team team={team} />
            ))}
          </div>
        </div>
      ) : showResult ? (
        <>
        <h2>No teams registered for this event yet.</h2>
        </>
      ) : <></>}
      {teamToDelete && (
        <div>
          <p>Are you sure you want to delete this team?</p>
          <button onClick={handleDeleteTeam}>Confirm Delete</button>
        </div>
      )}
    </div>
  );
};

export default TeamPage;
