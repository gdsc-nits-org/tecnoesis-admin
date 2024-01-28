import React, { useState, useEffect } from 'react';

const Team = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState('');
  const [registeredTeams, setRegisteredTeams] = useState([]);
  const [teamToDelete, setTeamToDelete] = useState('');
  const [authToken, setAuthToken] = useState(''); // Set your auth token here

  useEffect(() => {
    // Fetch events on component mount
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/event');
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error.message);
    }
  };

  const handleEventChange = (event) => {
    setSelectedEvent(event.target.value);
    setRegisteredTeams([]); // Clear teams when selecting a new event
  };

  const handleViewRegisteredTeams = async () => {
    try {
      const response = await fetch(`/api/event/${selectedEvent}/registered_teams`, {
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      });
      const data = await response.json();
      setRegisteredTeams(data);

      console.log('Registered Teams:', data);
    } catch (error) {
      console.error('Error fetching registered teams:', error.message);
    }
  };

  const handleDeleteTeam = async () => {
    try {
      const response = await fetch(`/api/team/${teamToDelete}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        // Refresh the list of registered teams after deletion
        handleViewRegisteredTeams();
        console.log('Team deleted successfully.');
      } else {
        console.error('Error deleting team:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting team:', error.message);
    }
  };

  return (
    <div>
      <h1>Team Page</h1>
      <div>
        <label>Select Event: </label>
        <select value={selectedEvent} onChange={handleEventChange}>
          <option value="" disabled>Select an event</option>
          {events.map((event) => (
            <option key={event.id} value={event.id}>
              {event.name}
            </option>
          ))}
        </select>
      </div>
      <br />
      <div>
        <button onClick={handleViewRegisteredTeams}>View Registered Teams</button>
      </div>
      <br />
      {registeredTeams.length > 0 && (
        <div>
          <h2>Registered Teams</h2>
          <ul>
            {registeredTeams.map((team) => (
              <li key={team.id}>
                Team Name: {team.name}{' '}
                <button onClick={() => setTeamToDelete(team.id)}>Delete Team</button>
              </li>
            ))}
          </ul>
        </div>
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
