import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { connect } from "react-redux";
import Select from '@material-ui/core/Select';
import {loadSelectedConfirmed, loadSelectedDeaths, selectedCountryName} from './Actions';

const axios = require('axios');

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SimpleSelect(props) {
  const classes = useStyles();

  const [country, setCountry] = React.useState('');

  const handleChange = event => {
    setCountry(event.target.value);
    fetchData(event.target.value);
    props.selectedCountryName(event.target.value);
  };

  const dispatchBoth = (confirmed, deaths) => {
    props.loadSelectedConfirmed(confirmed);
    props.loadSelectedDeaths(deaths);
  }

  const fetchData = (countryCode) => {
    axios
      .get(`https://covid19.mathdro.id/api/countries/${countryCode}`)
      .then(res => dispatchBoth(res.data.confirmed.value, res.data.deaths.value))
      .catch(error => console.log("error: " + error));
  };

if(!props.data){return <p>...loading</p>}else{
  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select value={country} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
          <MenuItem value="" disabled>
            Country
          </MenuItem>
  {Object.entries(props.data).map(([country, code],i) => <MenuItem value={code} key={i}>{country}</MenuItem>)}
        </Select>
        <FormHelperText>Select country to get information</FormHelperText>
      </FormControl>
    </div>
  )}
}

const mapStateToProps = state => {
    return {
      data: state.countriesReducer.countries
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      loadSelectedDeaths: data => {
        dispatch(loadSelectedDeaths(data));
      },
      loadSelectedConfirmed: data => {
        dispatch(loadSelectedConfirmed(data))
      },
      selectedCountryName: data => {
        dispatch(selectedCountryName(data))
      }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleSelect);

