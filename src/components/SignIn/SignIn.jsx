import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignIn = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [email, setEmail] = useState("");
  let api_url = `${import.meta.env.VITE_BASE_URL}/api/auth/signup`;
  let api_url_me = `${import.meta.env.VITE_BASE_URL}/api/user/me`;

  const signin = async () => {
    try {
      await GoogleSignin();
      await signinbackend();
      return {
        message: "User logged in successfully",
        status: 200,
      };
    } catch (error) {
      return {
        message: error?.response?.data?.msg,
        status: error?.response?.data?.status || error?.response?.status || 500,
      };
    }
  };

  const GoogleSignin = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({});
    const result = await signInWithPopup(auth, provider);
    setEmail(result.user.email);
    let token = await result.user.getIdToken();
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    localStorage.setItem("loggedin", 0);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  const signinbackend = async () => {
    const header = {
      authorization: `Bearer ${token}`,
    };
    let res = await fetch(api_url_me, {
      headers: header,
    });
    if (res.status >= 200 && res.status < 300) {
      localStorage.setItem("loggedin", 1);
    }
  };

  const handleSignIn = async () => {
    const { status, message } = await signin();
    alert(message);
    if (status === 200) {
      navigate("/team");
    } else {
      // if no user exists or username already taken
      alert("User doesn't exist");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/team");
    }
  }, []);

  return (
    <div>
      <button
        onClick={async () => {
          handleSignIn();
        }}
      >
        Sign in with google
      </button>
    </div>
  );
};

export default SignIn;
