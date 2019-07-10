import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const NumberButton = props => {
  const classes = useStyles();
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <Button variant="contained" color="primary" className={classes.button}>
      {props.number}
      </Button>
    </>
  );
};

export default NumberButton