import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';

const Home = () => {
  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <div>
       <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Sign in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <br />

        <Link to="/event">Event</Link>
        <br />
        <Link to="/team">Team</Link>
        <br />
        <Link to="/module">Module</Link>
        
    </div>
  )
}

export default Home
