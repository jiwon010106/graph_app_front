import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRevenue } from "../../redux/slices/apiSlice";
import HeadTitle from "./HeadTitle";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const formatYAxisLabel = (value) => `${value}k`;

const formatTooltopValue = (value) => `${value} salse`;

const TotalRevenue = () => {
  const state = useSelector((state) => state.apis.revenueData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRevenue());
  }, [dispatch]); // dispatch가 변경될 때 한번 실행

  // console.log(state);

  return (
    <div className="block-wrap mt-[14px] w-[calc(50%-7px)] lg:w-auto">
      <HeadTitle title="Total Revenue" />

      <div className="bar-chart w-full h-[250px] mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={state}
            margin={{
              top: 5,
              right: 5,
              left: -20,
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 0"
              horizontal={true}
              vertical={false}
              stroke="#333"
            />
            <XAxis
              dataKey="day"
              tickSize={0}
              axisLine={false}
              tick={({ payload, x, y, dy }) => (
                <text
                  x={x}
                  y={y + 25}
                  dy={dy}
                  textAnchor="middle"
                  fill="#7b91b0"
                  fontSize={14}
                >
                  {payload.value}
                </text>
              )}
            />
            <YAxis
              tickCount={6}
              tickSize={0}
              tick={{
                fill: "#7b91b0",
                fontSize: 14,
              }}
              tickFormatter={formatYAxisLabel}
              axisLine={false}
            />
            <Tooltip formatter={formatTooltopValue} />
            <Legend
              iconType="circle"
              iconSize={10}
              style={{ padding: "10px" }}
            />
            <Bar
              dataKey="online"
              fill="#0095ff"
              activeBar={false}
              isAnimationActive={false}
              radius={[4, 4, 0, 0]}
              barSize={18}
            />
            <Bar
              dataKey="offline"
              fill="#00e096"
              activeBar={false}
              isAnimationActive={false}
              radius={[4, 4, 0, 0]}
              barSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalRevenue;
