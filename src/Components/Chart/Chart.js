import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {name : "january", Total : 1200},
  {name : "Feabruary", Total : 2100},
  {name : "March", Total : 1500},
  {name : "April", Total : 2000},
  {name : "May", Total : 1400},
  {name : "June", Total : 1200},
];

const Chart = ({title}) => {
  return (
    <>
      <div className="shadow_sm p-2">
        <h5 className=""><b>{title}</b></h5>
        {/* <ResponsiveContainer > */}
        <AreaChart
        
          width={630}
          height={339}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name"  stroke="gray" />
          {/* <YAxis /> */}
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
        {/* </ResponsiveContainer> */}
      </div>
    </>
  );
};

export default Chart;
