import React from "react";
import { LineChart as LChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, Legend } from "recharts";

const LineChart = () => {
    const students = [
        {
          id: 1,
          name: "Alice Johnson",
          age: 20,
          subjects: {
            math: 85,
            science: 90,
            english: 78,
            history: 88
          },
          gpa: 3.8
        },
        {
          id: 2,
          name: "Bob Smith",
          age: 22,
          subjects: {
            math: 75,
            science: 80,
            english: 85,
            history: 70
          },
          gpa: 3.5
        },
        {
          id: 3,
          name: "Charlie Davis",
          age: 21,
          subjects: {
            math: 95,
            science: 92,
            english: 89,
            history: 94
          },
          gpa: 3.9
        },
        {
          id: 4,
          name: "David Lee",
          age: 23,
          subjects: {
            math: 68,
            science: 74,
            english: 80,
            history: 72
          },
          gpa: 3.2
        },
        {
          id: 5,
          name: "Emily Clark",
          age: 19,
          subjects: {
            math: 88,
            science: 85,
            english: 91,
            history: 90
          },
          gpa: 3.7
        }
      ];
  return (
    <div>
      <LChart width={800} height={400} data={students} className="ml-15 my-20">
            <Line type={"monotone"} dataKey= "subjects.math"></Line>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey= "name"></XAxis>
            <YAxis ></YAxis>
            <Tooltip></Tooltip>
      </LChart>
      <BarChart width={800} height={400} data={students} className="ml-15 my-20">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
            <Bar dataKey= "subjects.science" fill="#8884d8"></Bar>
            <Bar dataKey= "subjects.history" fill="#82ca9d"></Bar>

      </BarChart>
      
    </div>
  );
};

export default LineChart;
