import React, { Component } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Poland from "./Poland";
import GB from "./GB";
import States from "./States";
import Italy from "./Italy";
import {
  loadDeaths,
  loadConfirmed,
  loadBritainDeaths,
  loadBritainConfirmed,
  loadGlobalDeaths,
  loadGlobalConfirmed,
  loadStatesDeaths,
  loadStatesConfirmed,
  loadItalyDeaths,
  loadItalyConfirmed
} from "./Actions";
const axios = require("axios");

class Stats extends Component {
  state = {
    deaths: 0,
    cases: 0,
    britain: 0,
    britainCases: 0,
    globalDeaths: 0,
    globalCases: 0,
    statesDeaths: 0,
    statesCases: 0,
    italyDeaths: 0,
    italyCases: 0
  };

  componentDidMount() {
    this.fetchData("", "globalDeaths", "globalCases");
    this.fetchData("countries/PL", "deaths", "cases");
    this.fetchData("countries/GB", "britain", "britainCases");
    this.fetchData("countries/US", "statesDeaths", "statesCases");
    this.fetchData("countries/IT", "italyDeaths", "italyCases");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.deaths !== this.state.deaths) {
      this.props.loadDeaths(this.state.deaths);
      this.props.loadConfirmed(this.state.cases);
    }
    if (prevState.britain !== this.state.britain) {
      this.props.loadBritainDeaths(this.state.britain);
      this.props.loadBritainConfirmed(this.state.britainCases);
    }
    if (prevState.globalDeaths !== this.state.globalDeaths) {
      this.props.loadGlobalDeaths(this.state.globalDeaths);
      this.props.loadGlobalConfirmed(this.state.globalCases);
    }
    if (prevState.statesDeaths !== this.state.statesDeaths) {
      this.props.loadStatesDeaths(this.state.statesDeaths);
      this.props.loadStatesConfirmed(this.state.statesCases);
    }
    if (prevState.italyDeaths !== this.state.italyDeaths) {
      this.props.loadItalyDeaths(this.state.italyDeaths);
      this.props.loadItalyConfirmed(this.state.italyCases);
    }
  }

  fetchData = (countryCode, stateDeathsName, stateCasesName) => {
    axios
      .get(`https://covid19.mathdro.id/api/${countryCode}`)
      .then(response =>
        this.setState({
          [stateDeathsName]: response.data.deaths.value,
          [stateCasesName]: response.data.confirmed.value
        })
      )
      .catch(error => console.log("error: " + error));
  };

  render() {
    return (
      <>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px 20px"
          }}
        >
          <Typography color="textPrimary" variant="h2">
            COVID-19 INFO
          </Typography>
        </div>
        <div
          className="cards-list"
          style={{
            width: "100%",
            height: "50%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            marginBottom:"100px"
          }}
        >
          <Italy />
          <Poland />
          <GB />
          <States />
        </div>
        <div
          style={{
            width: "100%",
            height:"20%",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px 20px"
          }}
        >
          <Typography color="textPrimary" variant="h4">
            Coronavirus Cases: {this.state.globalCases}
          </Typography>
          <Typography color="textPrimary" variant="h4">
            Deaths: {this.state.globalDeaths}
          </Typography>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.deathsReducer.deaths
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadDeaths: data => {
      dispatch(loadDeaths(data));
    },
    loadConfirmed: data => {
      dispatch(loadConfirmed(data));
    },
    loadBritainDeaths: data => {
      dispatch(loadBritainDeaths(data));
    },
    loadBritainConfirmed: data => {
      dispatch(loadBritainConfirmed(data));
    },
    loadGlobalDeaths: data => {
      dispatch(loadGlobalDeaths(data));
    },
    loadGlobalConfirmed: data => {
      dispatch(loadGlobalConfirmed(data));
    },
    loadStatesDeaths: data => {
      dispatch(loadStatesDeaths(data));
    },
    loadStatesConfirmed: data => {
      dispatch(loadStatesConfirmed(data));
    },
    loadItalyDeaths: data => {
      dispatch(loadItalyDeaths(data));
    },
    loadItalyConfirmed: data => {
      dispatch(loadItalyConfirmed(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
