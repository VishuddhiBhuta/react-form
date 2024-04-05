import { React, useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");

  //CHECKBOX SELECTION
  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, contact, gender, subjects, resume);
    // Add form submission logic here
  };

  const handleReset = () => {
    // Reset all state variables here
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
  };

  //Form Validation
  //

  return (
    <div className="App">
      <h1>Form in React</h1>
      <form>
        <div className="form-group">
          <label htmlFor="firstname">First Name*</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            placeholder="Enter your first name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name*</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            placeholder="Enter your last name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact*</label>
          <input
            type="number"
            name="contact"
            id="contact"
            value={contact}
            placeholder="Enter your Mobile number"
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender*</label>
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
          <label htmlFor="other">
            <input
              type="radio"
              name="gender"
              value="other"
              id="other"
              checked={gender === "other"}
              onChange={(e) => setGender(e.target.value)}
            />
            Other
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="language">Your best Subject</label>
          <label htmlFor="english">
            <input
              type="checkbox"
              name="lang"
              id="english"
              checked={subjects.english === true}
              onChange={(e) => handleSubjectChange("english")}
            />
            English
          </label>
          <label htmlFor="maths">
            <input
              type="checkbox"
              name="lang"
              id="maths"
              checked={subjects.maths === true}
              onChange={(e) => handleSubjectChange("maths")}
            />
            Maths
          </label>
          <label htmlFor="physics">
            <input
              type="checkbox"
              name="lang"
              id="physics"
              checked={subjects.physics === true}
              onChange={(e) => handleSubjectChange("physics")}
            />
            Physics
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="file">Upload Resume*</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setResume(e.target.files[0])}
            placeholder="Enter Upload File"
            required
          />
        </div>
        <div className="form-group">
          <button type="reset" value="reset" onClick={() => handleReset()}>
            Reset
          </button>
          <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
