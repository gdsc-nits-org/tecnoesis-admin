import React from 'react';

const SigninGoogle = () => {
  return (
    <form>
      <div>
        <button>Sign In With Google</button>
      </div>
      <div>
        <label htmlFor="image">Poster Image</label>
        <input type="file" name="image" id="image" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" />
      </div>
      <div>
        <label htmlFor="attendanceIncentive">Attendance Incentive</label>
        <input required type="text" id="attendanceIncentive" />
      </div>
      <div>
        <label htmlFor="registrationIncentive">Registration Incentive</label>
        <input required type="text" id="registrationIncentive" />
      </div>
      <div>
        <label htmlFor="latitude">Latitude</label>
        <input type="text" id="latitude" />
      </div>
      <div>
        <label htmlFor="longitude">Longitude</label>
        <input type="text" id="longitude" />
      </div>
      <div>
        <label htmlFor="maxTeamSize">Max-team size</label>
        <input type="number" id="maxTeamSize" />
      </div>
      <div>
        <label htmlFor="minTeamSize">Min-team size</label>
        <input type="number" id="minTeamSize" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SigninGoogle;
