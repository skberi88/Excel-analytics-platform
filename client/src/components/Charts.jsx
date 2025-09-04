import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Charts = () => {
  const data = {
    labels: ["A", "B", "C"],
    datasets: [
      {
        label: "Sample Data",
        data: [12, 19, 3],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Chart Preview</h3>
      <Bar data={data} />
    </div>
  );
};

export default Charts;
