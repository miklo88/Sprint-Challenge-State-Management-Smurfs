import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/actions";

function NewSmurfForm(props) {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: null,
    height: "",
    id: null
  });

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    props.addSmurf(newSmurf);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={props.name}
          placeholder="Enter Smurf Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          value={props.age}
          placeholder="Enter Smurf Age"
          onChange={handleChange}
        />
        <input
          type="text"
          name="height"
          value={props.height}
          placeholder="Enter Smurf Height"
          onChange={handleChange}
        />
        <button>Add Smurf</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    error: state.error,
    addSmurf: state.addSmurf
  };
};

const mapDispatchToProps = {
  addSmurf
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewSmurfForm);