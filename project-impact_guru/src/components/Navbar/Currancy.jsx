import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function Currency() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      
      <FormControl className={classes.formControl}>
        {/* <InputLabel htmlFor="uncontrolled-native">Name</InputLabel> */}
        <NativeSelect
          defaultValue={10}
          inputProps={{
            name: 'name',
              id: 'uncontrolled-native',
            
          }}
        >
          <option style={{color:'black'}} value={10}>INR</option>
          <option style={{color:'black'}} value={20}>USD</option>
                  <option style={{ color: 'black' }} value={30}>EURO</option>
                  <option style={{color:'black'}} value={10}>Pounds</option>
          <option style={{color:'black'}} value={20}>Dheram</option>
          <option style={{color:'black'}} value={30}>EURO</option>
        </NativeSelect>
        {/* <FormHelperText>Uncontrolled</FormHelperText> */}
      </FormControl>
     
    </div>
  );
}
