import React, { useState } from 'react';

// Bring in material-ui components
import { Grid, makeStyles, Paper, TextField } from '@material-ui/core';

// Set styles to override material-ui
const useStyle = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '30%',
      margin: theme.spacing(3),
    },
    '& .title': {
      textAlign: 'center',
    },
    '& .currentValues': {
      fontSize: '7rem',
      fontWeight: 'bold',
    },
    '& .switch': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
}));

// Set static initial data object values, typically this would be brought in from backend
const initialValues = {
  conc: 15,
  temp: 38,
  concUpperLimit: 20,
  concLowerLimit: 10,
  tempUpperLimit: 75,
  tempLowerLimit: 35,
  switch: false,
};

const ConcForm = () => {
  const [values, setValues] = useState(initialValues);
  const classes = useStyle();

  // Function to handle change of conc and temp textfields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <form className={classes.root}>
      <Grid container alignItems='center' justify='space-evenly'>
        <Grid item xs={4} style={{ textAlign: 'center' }}>
          <Paper
            elevation={5}
            // If concentration level is outside of concentration limit add bold color outline
            style={{
              outline:
                values.conc > values.concUpperLimit
                  ? '10px solid red'
                  : values.conc < values.concLowerLimit
                  ? '10px solid blue'
                  : 'none',
            }}
          >
            <div className='title'>
              <h2>Concentration</h2>
              <div
                className='currentValues'
                // If concentration level is outside of concentration limit change color
                style={{
                  color:
                    values.conc > values.concUpperLimit
                      ? 'red'
                      : values.conc < values.concLowerLimit
                      ? 'blue'
                      : 'black',
                }}
              >
                {values.conc}
              </div>
            </div>

            <TextField
              variant='outlined'
              label='Conc Upper Limit'
              type='number'
              name='concUpperLimit'
              value={values.concUpperLimit}
              onChange={handleInputChange}
              // Style to make input font size larger for tablet
              inputProps={{
                style: { textAlign: 'center', fontSize: '1.3rem' },
              }}
            />
            <TextField
              variant='outlined'
              label='Conc Lower Limit'
              type='number'
              name='concLowerLimit'
              value={values.concLowerLimit}
              onChange={handleInputChange}
              // Style to make input font size larger for tablet
              inputProps={{
                style: { textAlign: 'center', fontSize: '1.3rem' },
              }}
            />
          </Paper>
        </Grid>

        <Grid item xs={4} style={{ textAlign: 'center' }}>
          <Paper
            elevation={5}
            // If temperature level is outside of temperature limit add bold outline
            style={{
              outline:
                values.temp > values.tempUpperLimit
                  ? '10px solid red'
                  : values.temp < values.tempLowerLimit
                  ? '10px solid blue'
                  : 'none',
            }}
          >
            <div className='title'>
              <h2>Temperature</h2>
              <div
                className='currentValues'
                // If temperature level is outside of temperature limit change color
                style={{
                  color:
                    values.temp > values.tempUpperLimit
                      ? 'red'
                      : values.temp < values.tempLowerLimit
                      ? 'blue'
                      : 'black',
                }}
              >
                {values.temp}
              </div>
              <TextField
                variant='outlined'
                label='Temp Upper Limit'
                type='number'
                name='tempUpperLimit'
                value={values.tempUpperLimit}
                onChange={handleInputChange}
                // Style to make input font size larger for tablet
                inputProps={{
                  style: { textAlign: 'center', fontSize: '1.3rem' },
                }}
              />
              <TextField
                variant='outlined'
                label='Temp Lower Limit'
                type='number'
                name='tempLowerLimit'
                value={values.tempLowerLimit}
                onChange={handleInputChange}
                // Style to make input font size larger for tablet
                inputProps={{
                  style: { textAlign: 'center', fontSize: '1.3rem' },
                }}
              />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </form>
  );
};

export default ConcForm;
