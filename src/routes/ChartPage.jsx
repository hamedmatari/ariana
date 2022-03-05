import React from "react";

import { Chart, ChartJS } from "chart.js/auto";

import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Card, Grid } from "@mui/material";

export default function ChartPage() {
  document.title = "Charts | Ariana";
  const users = useSelector((state) => state.users.users);

  const skills = users.map((user) => user.skills);

  const agesSet = [...new Set(users.map((user) => user.age))];
  const agesAmount = agesSet.reduce((a, v) => ({ ...a, [v]: 0 }), {});
  users.forEach((user) => {
    agesAmount[user.age]++;
  });
  const labelsBar = Object.keys(agesAmount);
  const valuesBar = Object.values(agesAmount);

  const allSkills = {
    HTML: 0,
    React: 0,
    Vue: 0,
    CSS: 0,
    MaterialUI: 0,
  };
  skills.forEach((arr) => {
    arr.forEach((item) => {
      allSkills[item]++;
    });
  });
  const labelsPie = Object.keys(allSkills);
  const valuesPie = Object.values(allSkills);

  const dataBar = {
    labels: labelsBar,
    datasets: [
      {
        data: valuesBar,
        backgroundColor: [
          "rgba(255, 99, 132, 0.3)",
          "rgba(25,  77, 0  , 0.3)",
          "rgba(255, 206, 86, 0.3)",
          "rgba(75, 192, 192, 0.3)",
          "rgba(153, 102, 255, 0.3)",
          "rgba(255, 159, 64, 0.3)",
          "rgba(234, 99, 132, 0.3)",
          "rgba(76, 162, 235, 0.3)",
          "rgba(34, 206, 86, 0.4)",
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

  const dataPie = {
    labels: labelsPie,
    datasets: [
      {
        data: valuesPie,
        backgroundColor: [
          "rgba(255, 99, 132, 0.3)",
          "rgba(25,  77, 0  , 0.3)",
          "rgba(255, 206, 86, 0.3)",
          "rgba(75, 192, 192, 0.3)",
          "rgba(153, 102, 255, 0.3)",
          "rgba(255, 159, 64, 0.3)",
          "rgba(234, 99, 132, 0.3)",
          "rgba(76, 162, 235, 0.3)",
          "rgba(34, 206, 86, 0.4)",
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
    <Grid
      container
      direction="row"
      justifyContent="center"
      spacing={8}
      alignItems="flex-end"
      sx={{ p: 8 }}
    >
      <Grid item sx={{ width: { md: "600px", xs: "300px" } }}>
        <Card sx={{ p: 2 }}>
          <Pie data={dataPie} />
        </Card>
      </Grid>
      <Grid item sx={{ width: { md: "700px", xs: "400px" } }}>
        <Card sx={{ p: 2 }}>
          <Bar data={dataBar} />
        </Card>
      </Grid>
    </Grid>
  );
}
