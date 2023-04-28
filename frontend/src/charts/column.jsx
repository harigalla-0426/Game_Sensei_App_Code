import React from 'react'
import { Chart } from 'react-google-charts'

export const options = {
  title: 'Video Game Sales by Region',
  fontSize: 20,
  legend: { position: 'right' },
  backgroundColor: '#cee0f2',
}

export default function DetailChart(props) {
  const { chartData } = props
  const data = [
    ['Region', 'Sales'],
    ['North America', chartData.NA_Sales],
    ['Europe', chartData.EU_Sales],
    ['Japan', chartData.JP_Sales],
    ['Other', chartData.Other_Sales],
  ]

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={'100%'}
      height={'450px'}
    />
  )
}
