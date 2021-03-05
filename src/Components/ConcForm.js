import { Grid, makeStyles, Paper, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

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
  },
}));

const initialValues = {
  id: 0,
  conc: 15,
  temp: 38,
  concUpperLimit: 20,
  concLowerLimit: 10,
  tempUpperLimit: 75,
  tempLowerLimit: 35,
  date: new Date(),
};

const ConcForm = () => {
  const [values, setValues] = useState(initialValues);
  const classes = useStyle();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item xs={6} style={{ textAlign: 'center' }}>
          <div className='title'>
            <h2>Concentration</h2>
            <div
              className='currentValues'
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
            inputProps={{ style: { textAlign: 'center' } }}
          />
          <TextField
            variant='outlined'
            label='Conc Lower Limit'
            type='number'
            name='concLowerLimit'
            value={values.concLowerLimit}
            onChange={handleInputChange}
            inputProps={{ style: { textAlign: 'center' } }}
          />
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'center' }}>
          <div className='title'>
            <h2>Temperature</h2>
            <div
              className='currentValues'
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
              inputProps={{ style: { textAlign: 'center' } }}
            />
            <TextField
              variant='outlined'
              label='Temp Lower Limit'
              type='number'
              name='tempLowerLimit'
              value={values.tempLowerLimit}
              onChange={handleInputChange}
              inputProps={{ style: { textAlign: 'center' } }}
            />
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

export default ConcForm;
