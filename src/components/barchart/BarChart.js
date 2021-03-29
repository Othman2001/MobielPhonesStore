import React from 'react'
import { Bar } from 'react-chartjs-2'

function BarChart () {
  const data = {
    labels: ['2001', '2005', '2006', '2008', '2019'],
    datasets: [
       {
        label: 'Sales 2020 (M)',
        data: [3, 2, 2, 6, 4],
        borderColor: [
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ],
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ]
      },
      {
        label: 'Sales 2019 (M)',
        data: [4, 3, 2, 2, 3],
        borderColor: ['rgba(54, 162, 235, 0.2)', ],
        backgroundColor: [
          'rgba(231,149,80,0.4)',
          'rgba(231,149,80,0.2)',
          'rgba(231,149,80,0.5)',
          'rgba(92,161,116,0.32))',
          'rgba(153, 102, 255, 1)'
        ]
      }
    ]
  }

  const options = {
    title: {
      display: true,
      text: 'Bar Chart'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 6,
            stepSize: 1
          }
        }
      ]
    }
  }
  return <Bar data={data} options={options} />
}

export default BarChart