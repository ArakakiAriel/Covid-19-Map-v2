import React from 'react'
import {ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


export const Charts = ({countryData, line_key, x_axis_key, stroke_color = "#0B98E6"}) => {

  let countryDataReversed = countryData?[...countryData]:[];
  countryDataReversed.reverse();
  console.log("CHARTS")
  console.log(countryData)
  console.log(line_key, x_axis_key)

  if(!countryData){
    return (
        <div>
        </div>
    )
  }


    return (
        <div className="border mt-2 mb-2" style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
            <LineChart width={700} height={300} data={countryDataReversed} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey={line_key} stroke={stroke_color} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey={x_axis_key} />
                <YAxis />
                <Tooltip />
            </LineChart>
			</ResponsiveContainer>
        </div>
    )
}
