import { useState } from "react";
import "./module.css";
const Module = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [thirdPartyURL, setThirdPartyURL] = useState("");
  const [filePath, setFilePath] = useState("");
  const [file, setFile] = useState(null);

  const createModule = async () => {
    const res = await fetch("http://localhost:4000/api/module/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer 1000000",
      },
      body: JSON.stringify({
        description: description,
        iconImage: filePath,
        coverImage: filePath,
        name: name,
        thirdPartyURL: thirdPartyURL,
      }),
    });

    const json = await res.json();

    if (res.status == 200) {
      alert("Module created successfully");
      window.location.reload();
    } else {
      alert(json.msg);
    }
  };
  return (
    <div className="module">
      <h1>Create Module</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await createModule();
        }}
      >
        <label>Name</label>
        <input
        required
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label>Description</label>
        <textarea
        required
          rows={8}
          cols={50}
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />
        <label>Third Party URL</label>
        <input
          type="text"
          required
          value={thirdPartyURL}
          onChange={(e) => {
            setThirdPartyURL(e.target.value);
          }}
        />
        <br />
        <label>Icon Image</label>
        <input
         required
          type="file"
          name="image"
          onChange={(e) => {
            setFilePath(e.target.value);
            setFile(e.target.files[0]);
          }}
        />
        <br></br>
        <label>Cover Image</label>
        <input
        required
          type="file"
          name="image"
          onChange={(e) => {
            setFilePath(e.target.value);
            setFile(e.target.files[0]);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default Module;
