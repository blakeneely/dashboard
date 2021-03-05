import React from 'react';

import { Paper } from '@material-ui/core';
import { Line } from 'react-chartjs-2';

const Chart = () => {
  return (
    <div>
      <Paper elevation={3}>
        <Line
          data={{
            labels: [
              '12:00',
              '13:00',
              '14:00',
              '15:00',
              '16:00',
              '17:00',
              '18:00',
              '19:00',
              '20:00',
            ],
            datasets: [
              {
                label: 'Conc',
                data: [15, 13, 14, 16, 12, 14, 13, 15, 17],
                backgroundColor: '#223d72',
                borderColor: 'white',
                borderWidth: 1,
              },
              {
                label: 'Temp',
                data: [40, 41, 45, 48, 42, 41, 46, 47, 50],
                backgroundColor: '#ABCC6D',
                borderColor: 'black',
                borderWidth: 1,
              },
            ],
          }}
          height={300}
          width={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </Paper>
    </div>
  );
};

export default Chart;
