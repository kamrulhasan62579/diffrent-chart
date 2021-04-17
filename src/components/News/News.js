import React from 'react';
import './News.css'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
  
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Sumon",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Palash",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Pabji",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Patlu",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Faltu",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Ganji",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];
  

const News = () => {
   
        return (
            <LineChart
      width={600}
      height={600}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 15 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
     );
    
};

export default News;