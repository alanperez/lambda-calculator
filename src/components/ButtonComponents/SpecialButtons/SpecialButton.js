import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// color: #225d9e
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  
}));
const SpecialButton = props => {
  const classes = useStyles();

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <Button variant="contained" style={{backgroundColor:'#225d9e', color: 'white'}} className={classes.button}>{props.special}</Button>
    </>
  );
};

export default SpecialButton