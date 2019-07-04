import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const chart1 =(props)=>{
    
    
    return (
        <div className="graph-container">
<BarChart
        width={500}
        height={300}
        data={props.chart1Data}
        
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="members" fill="#8884d8" />
        <Bar dataKey="admins" fill="#82ca9d" />
      </BarChart>
        </div>
      
    );
  }
  export default chart1;