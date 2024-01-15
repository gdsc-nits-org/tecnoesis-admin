import React, { useState } from 'react';

const Team = () => {
  const [teamDetails, setTeamDetails] = useState(null);
  const [teamByEvents, setTeamByEvents] = useState(null);

  const handleViewTeamDetails = async () => {
    try {
      const response = await fetch('/api/team/:teamId'); // Update the endpoint
      const data = await response.json();

      setTeamDetails(data);

      console.log('Team Details:', data);
    } catch (error) {
      console.error('Error fetching team details:', error.message);
    }
  };

  const handleViewTeamByEvents = async () => {
    try {
      const response = await fetch('/api/team/events'); // Update the endpoint
      const data = await response.json();

      setTeamByEvents(data);

      console.log('Team By Events:', data);
    } catch (error) {
      console.error('Error fetching team by events:', error.message);
    }
  };

  return (
    <div>
      <h1>Team Page</h1>
      <div>
        <button onClick={handleViewTeamDetails}>View Team Details</button>
      </div>
      <br />
      {teamDetails && (
        <div>
          <p>Team Name: {teamDetails.name}</p>
          <p>Team Members: {teamDetails.members.join(', ')}</p>
        </div>
      )}
      <div>
        <button onClick={handleViewTeamByEvents}>View Team By Events</button>
      </div>
      <br />
      {teamByEvents && (
        <div>
          {/* Display team by events data as needed */}
        </div>
      )}
    </div>
  );
};

export default Team;
