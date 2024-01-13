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
        <input type="file" name="image" id="image" />
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
        <input type="text" id="latitude" />
      </div>
      <br />
      <div>
        <label htmlFor="longitude">Longitude</label>
        <input type="text" id="longitude" />
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
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SigninGoogle;
