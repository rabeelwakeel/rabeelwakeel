import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function SignupForm() {
  const [user, setUser] = useState({
    name: "",
    description: "",
    activity: "",
    duration: "",
    date: "",
  });

  const change = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user);
  return (
    <div>
      <form className="container col-8  p-5 ">
        <div className="container">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={user.name}
            onChange={change}
            placeholder="Enter Your Name here"
          />
        </div>

        <div className="container">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            value={user.description}
            onChange={change}
            placeholder="Desciption"
          />
        </div>
        <div className="container">
          <label>Activity</label>
          <div class="form-select">
            <select
              class="custom-select"
              id="inputGroupSelect02"
              value={user.activitytype}
              name="activitytype"
              onChange={change}
            >
              <option selected>Choose...</option>
              <option value="run">Run</option>
              <option value="bicycle">Bicycle Ride</option>
              <option value="swim">Swim</option>
              <option value="walk">Walk</option>
              <option value="hike">Hike</option>
            </select>
          </div>
        </div>

        <div className="container">
          <label>Duration</label>
          <input
            type="time"
            className="form-control"
            value={user.duration}
            name="duration"
            onChange={change}
          />
        </div>
        <div className="container">
          <label>Date</label>
          <input
            type="date"
            className="form-control "
            value={user.date}
            name="date"
            onChange={change}
          />
        </div>
        <div className="container">
          <Link className="nav-link" to="/cards">
            <button type="submit" className=" p-3 btn btn-primary mt-3">
              Signup
            </button>
          </Link>
        </div>
      </form>
      {/* <Card value={user} /> */}
    </div>
  );
}

export default SignupForm;
