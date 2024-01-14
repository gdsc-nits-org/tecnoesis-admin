import React, { useState } from 'react';

const Team = () => {
  const [teamDetails, setTeamDetails] = useState(null);

  const handleViewTeamDetails = async () => {
    try {
      const response = await fetch('GET /:teamId'); 
      const data = await response.json();

      
      setTeamDetails(data);

     
      console.log('Team Details:', data);
    } catch (error) {
      console.error('Error fetching team details:', error.message);
    }
  };

  // const handleChangeTeamData = async () => {
  //   try {
      
  //     console.log('Changing team data...');
  //   } catch (error) {
  //     console.error('Error changing team data:', error.message);
  //   }
  // };

  // const handleRemoveMember = async () => {
  //   try {
      
  //     console.log('Removing team member...');
  //   } catch (error) {
  //     console.error('Error removing team member:', error.message);
  //   }
  // };

  // const handleRemoveTeam = async () => {
  //   try {
      
  //     console.log('Removing team...');
  //   } catch (error) {
  //     console.error('Error removing team:', error.message);
  //   }
  // };

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
      {/* <div>
        <button onClick={handleChangeTeamData}>Change Team Data</button>
      </div>
      <br />
      <div>
        <button onClick={handleRemoveMember}>Remove Member</button>
      </div>
      <br />
      <div>
        <button onClick={handleRemoveTeam}>Remove Team</button>
      </div> */}
    </div>
  );
};

export default Team;