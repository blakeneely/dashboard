import React from 'react';

// Bring in material-ui and Chart.js components
import { Paper } from '@material-ui/core';
import { Line } from 'react-chartjs-2';

// Set style
const divStyle = {
  margin: '2em',
};

const Chart = () => {
  return (
    // Input style
    <div style={divStyle}>
      {/* Main chart area */}
      <Paper elevation={5}>
        <Line
          // Set data for chart
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
            // Set each dataset, in this case we have 2 to show on the chart
            datasets: [
              {
                label: 'Conc',
                data: [28, 13, 14, 16, 12, 14, 13, 15, 17],
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
          // Set basic chart height and responsiveness
          height={250}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            // Make chart start at 0 for full value effect, otherwise lower values chart too small
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
