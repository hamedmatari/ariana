import React from "react";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

Chart.register(ArcElement);

export default function ChartPage() {
  const users = useSelector((state) => state.users.users);
  const hhh = users.map((user) => user.skills);
  const allSkills = {
    html: 0,
    react: 0,
    vue: 0,
    css: 0,
    materialUI: 0,
  };
  hhh.forEach((arr) => {
    arr.forEach((item) => {
      allSkills[item]++;
    });
  });
  const labels = Object.values(allSkills);

  const values = Object.values(allSkills);
  console.log(values);
  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(234, 99, 132, 0.2)",
          "rgba(76, 162, 235, 0.2)",
          "rgba(34, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(65, 54, 255, 0.2)",
          "rgba(123, 89, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div style={{ width: "500px", margin: "50px auto" }}>
        <Doughnut data={data} />
      </div>
    </div>
  );
}
