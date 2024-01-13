import React from 'react';

const SigninGoogle = () => {
  return (
    <div>
      <button>Sign In With Google</button>
      <br />
      <h4>Poster Image</h4>
      <input type="file" name="image" id="" />
      <br />
      <h4>Description</h4>
      <input type="text" />
      <br />
      <h4>Attendance Incentive</h4>
      <input required type="text" />
      <br />
      <h4>Registration Incentive</h4>
      <input required type="text" />
      <br />
      <h4>Latitude</h4>
      <input type="text" />
      <br />
      <h4>Longitude</h4>
      <input type="text" />
      <br />
      <h4>Max-team size</h4>
      <input type="number" name="" id="" />
      <br />
      <h4>Min-team size</h4>
      <input type="number" name="" id="" />
      <br />
      <h4>Module ID</h4>
      <input type="text" />
      <br />
      <h4>Name</h4>
      <input type="text" />
      <br />
      <h4>Prize Description</h4>
      <input type="text" />
      <br />
      <h4>Registration End Time</h4>
      <input type="datetime-local" name="" id="" />
      <br />
      <h4>Registration Start Time</h4>
      <input type="datetime-local" name="" id="" />
      <br />
      <h4>Stages Description</h4>
      <input type="text" name="" id="" />
      <br />
      <h4>Venue</h4>
      <input type="text" />
      <br />
      <button>Submit</button>   
    </div>
  );
};

export default SigninGoogle;
