import { useEffect, useState } from "react";

const Event = () => {
  const [filePath, setFilePath] = useState("")
  const [description, setDescription] = useState("");
  const [attIncentive, setAttIncentive] = useState(0);
  const [regIncentive, setRegIncentive] = useState(0);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [maxTeamSize, setMaxTeamSize] = useState();
  const [minTeamSize, setMinTeamSize] = useState();
  const [moduleId, setModuleId] = useState("");
  const [name, setName] = useState("");
  const [prizeDescription, setPrizeDescription] = useState("");
  const [regStartTime, setRegStartTime] = useState("");
  const [regEndTime, setRegEndTime] = useState("");
  const [stageDescription, setStageDescription] = useState("");
  const [venue, setVenue] = useState("");

  const [update, setUpdate] = useState(true)
  useEffect(() => {},[update])

  const createEvent = async () => {
    const token = Cookies.get("token");
    const res = await fetch("http://localhost:4000/api/event/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        description: description,
        posterImage: filePath,
        attendanceIncentive: parseInt(attIncentive),
        registrationIncentive: parseInt(regIncentive),
        lat: latitude,
        lng: longitude,
        maxTeamSize: parseInt(maxTeamSize),
        minTeamSize: parseInt(minTeamSize),
        moduleId: String(moduleId),
        name: name,
        prizeDescription: prizeDescription,
        registrationEndTime: regEndTime,
        registrationStartTime: regStartTime,
        stagesDescription: stageDescription,
        venue: venue,
      }),
    });

    const json = await res.json();

    if (res.status == 200) {
      alert("Event created successfully");
      window.location.reload()
    }
    else {
      alert(json.msg);
    }
  };

  const handleFileChange = (event) => {
    setFilePath(event.target.value);
  }

  return (
    <div>
      <form onSubmit={async(e) => {
        e.preventDefault();
        await createEvent();
      }}>
        <h4>Poster Image</h4>
        <input type="file" name="image" id="" onChange={handleFileChange}/>
        <br />
        <h4>Description</h4>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <h4>Attendance Incentive</h4>
        <input
          required
          type="text"
          value={attIncentive}
          onChange={(e) => setAttIncentive(e.target.value)}
        />
        <br />
        <h4>Registration Incentive</h4>
        <input
          required
          type="text"
          value={regIncentive}
          onChange={(e) => setRegIncentive(e.target.value)}
        />
        <br />
        <h4>Latitude</h4>
        <input
          type="text"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <br />
        <h4>Longitude</h4>
        <input
          type="text"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <br />
        <h4>Max-team size</h4>
        <input
          type="number"
          name=""
          id=""
          value={maxTeamSize}
          onChange={(e) => setMaxTeamSize(e.target.value)}
        />
        <br />
        <h4>Min-team size</h4>
        <input
          type="number"
          name=""
          id=""
          value={minTeamSize}
          onChange={(e) => setMinTeamSize(e.target.value)}
        />
        <br />
        <h4>Module ID</h4>
        <input
          type="text"
          value={moduleId}
          onChange={(e) => setModuleId(e.target.value)}
        />
        <br />
        <h4>Name</h4>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <h4>Prize Description</h4>
        <input
          type="text"
          value={prizeDescription}
          onChange={(e) => setPrizeDescription(e.target.value)}
        />
        <br />
        <h4>Registration End Time</h4>
        <input
          type="datetime-local"
          name=""
          id=""
          value={regEndTime}
          onChange={(e) => setRegEndTime(e.target.value)}
        />
        <br />
        <h4>Registration Start Time</h4>
        <input
          type="datetime-local"
          name=""
          id=""
          value={regStartTime}
          onChange={(e) => setRegStartTime(e.target.value)}
        />
        <br />
        <h4>Stages Description</h4>
        <input
          type="text"
          name=""
          id=""
          value={stageDescription}
          onChange={(e) => setStageDescription(e.target.value)}
        />
        <br />
        <h4>Venue</h4>
        <input
          type="text"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Event;