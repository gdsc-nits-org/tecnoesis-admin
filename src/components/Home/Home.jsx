import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const admin = Cookies.get("admin");
    const navigate = useNavigate()

    useEffect(() => {
        if(admin !== 'true')
        {
            navigate("/")
        }
    }, [])
    return <div>
        <br />
        <Link to="/event">Event</Link>
        <br />
        <Link to="/team">Team</Link>
        <br />
        <Link to="/module">Module</Link>
    </div>
}

export default Home;