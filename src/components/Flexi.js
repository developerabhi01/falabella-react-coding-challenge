import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



// Using Hooks latest feature
// Props Definition

const Flexi = ({ onSubmit, config }) => {
  const [inputName, setinputName] = useState("");
  const [inputLabel, setinputLabel] = useState("");

  useEffect(() => {}, []);

  const submitHandler = e => {
    setinputName(e.target.value);
  };

  const submitHandlerLabel = e => {
    setinputLabel(e.target.value);
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    onSubmit({ name: inputName, label: inputLabel });
  };

  // Using conditional rendering
  // Recursion for flexiConfig

  const classes = useStyles();

  return (
    <>
      <h1>Falabella React Coding Challenge</h1>
      <form className={classes.root} noValidate autoComplete="off">
        {(config.items.length > 0) ? config.items.map((val, index) => {
        return (
            <div key={index}>

            {val.type === "TextField" &&
               (<div key={val.name}>
               <TextField type="text" id={val.name} label={val.label}  onChange={submitHandler}/>
               </div>)
            }

            {val.type === "DropDown" &&
                (<FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-helper-label">{val.label}</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id={val.label}
                    value={val.label}
                    required
                    onChange={submitHandlerLabel}
                  > 
                    {val.values.map(LabelOption => {
                    return <MenuItem value={LabelOption}>{LabelOption}</MenuItem> 
                    })}
                  </Select>
                  <FormHelperText>Hooray!!</FormHelperText>
                </FormControl>
                )
            }
            </div>
        )
        }): <p>No data received</p> }
		

        <Button type="submit" onClick={formSubmitHandler} variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </>
  );
};

export default Flexi;
