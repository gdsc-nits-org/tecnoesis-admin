import React from 'react';

const SigninGoogle = () => {
  return (
    <form>
      <div>
        <button>Sign In With Google</button>
      </div>
      <br />
      <div>
        <label htmlFor="image">Poster Image</label>
        <input type="file" name="posterImage" id="posterImage" />
      </div>
      <br />
      <div>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" />
      </div>
      <br />
      <div>
        <label htmlFor="attendanceIncentive">Attendance Incentive</label>
        <input required type="text" id="attendanceIncentive" />
      </div>
      <br />
      <div>
        <label htmlFor="registrationIncentive">Registration Incentive</label>
        <input required type="text" id="registrationIncentive" />
      </div>
      <br />
      <div>
        <label htmlFor="latitude">Latitude</label>
        <input type="text" id="lat" />
      </div>
      <br />
      <div>
        <label htmlFor="longitude">Longitude</label>
        <input type="text" id="lng" />
      </div>
      <br />
      <div>
        <label htmlFor="maxTeamSize">Max-team size</label>
        <input type="number" id="maxTeamSize" />
      </div>
      <br />
      <div>
        <label htmlFor="minTeamSize">Min-team size</label>
        <input type="number" id="minTeamSize" />
      </div>
      <br />
      <div>
        <label htmlFor="moduleiId">Module ID</label>
        <input type="text" id="moduleiId" />
      </div>
      <br />
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <br />
      <div>
        <label htmlFor="prizeDescription">Prize Description</label>
        <input type="text" id="prizeDescription" />
      </div>
      <br />
      <div>
        <label htmlFor="registrationStartTime">Registration Start Time</label>
        <input type="datetime-local" name="registrationStartTime" id="registrationStartTime" />
      </div>
      <br />
      <div>
        <label htmlFor="registrationEndTime">Registration End Time</label>
        <input type="datetime-local" name="registrationEndTime" id="registrationEndTime" />
      </div>
      <br />
      <div>
        <label htmlFor="stagesDescription">Stages Description</label>
        <input type="text" id="stagesDescription" />
      </div>
      <br />
      <div>
        <label htmlFor="venue">Venue</label>
        <input type="text" id="venue" />
      </div>
      <br />
      <div>
        <label htmlFor="extraQuestions">Extra Questions</label>
        <input type="text" id="extraQuestions" />
      </div>
      <br />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SigninGoogle;
