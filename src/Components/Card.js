import React from "react";
function Card(props) {
  console.log(props.value, "value");
  return (
    <div>
      {props.value.map((u) => (
        <div className="card" style={{ width: "18rem" }} key={u.id}>
          <div className="card-body">
            <p className="card-title">{u.name}</p>
            <p>{u.activitytype}</p>
            <p>{u.duration}</p>
            <p>{u.date}</p>
            <p className="card-text">{u.description}</p>
            <button to="#" className="btn btn-primary">
              Edit
            </button>
            <button to="#" className="btn btn-primary">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
