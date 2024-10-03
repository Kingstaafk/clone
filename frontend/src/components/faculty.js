import React, { useState } from "react";
import axios from "axios";

const AddFacultyForm = () => {
  const [faculty, setFaculty] = useState({
    name: "",
    email: "",
    department: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFaculty({ ...faculty, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/faculty",
        faculty
      );
      setMessage(response.data.message);
      setFaculty({ name: "", email: "", department: "", password: "" });
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Add Faculty</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={faculty.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={faculty.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={faculty.department}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={faculty.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Faculty</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddFacultyForm;
