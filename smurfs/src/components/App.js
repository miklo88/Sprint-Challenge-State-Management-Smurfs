import React, { useEffect } from "react";
import SmurfList from "./SmurfList";
import NewSmurfForm from "./NewSmurfForm";
import { getSmurf } from "../actions/actions";
import { connect } from "react-redux";
import "./App.css";

function App(props) {
  useEffect(() => {
    props.getSmurf();
  }, []);

  return (
    <div className="App">
      <h1>SMURFS Village</h1>
      <NewSmurfForm />
      <SmurfList smurfs={props.smurfs} />
    </div>
  );
}

function mapStateToProps(state) {
  console.log("app", state);
  return {
    smurfs: state.smurfs,
    error: state.error
  };
}

const mapDispatchToProps = {
  getSmurf
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);