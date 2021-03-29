import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function PieChart () {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'April', 'May'],
    datasets: [
      {
        label: 'Sales 2020 (M)',
        data: [3, 2, 2, 6, 4],
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
      text: 'Doughnut Chart'
    }
  }

  return <Doughnut data={data} options={options} />
}

export default PieChart