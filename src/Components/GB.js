import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    width:300,
    margin:15,
    borderRadius:5
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    border: '1px solid #d3d3d3'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const GB = (props) => {
  const classes = useStyles();

  return (
      <div className="card-div">
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title="United Kingdom"
        subheader=''
      />
      <CardMedia
        className={classes.media}
        image="./assets/gb.jpg"
        title="United Kingdom"
      />
      <CardContent>
        <Typography color="textPrimary" component="h2">
          Confirmed cases: <span style={{fontWeight:"600"}}>{props.cases ? props.cases : ''}</span> 
        </Typography>
        <Typography color="textPrimary" component="h2">
          Deaths: <span style={{fontWeight:"600"}}>{props.britain ? props.britain : '' }</span> 
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        britain: state.deathsReducer.britain,
        cases: state.confirmedReducer.britain,
    }
}

export default connect(mapStateToProps, {})(GB);