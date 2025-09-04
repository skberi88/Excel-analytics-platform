import React from "react";
import FileUpload from "./FileUpload";
import Charts from "./Charts";

const Dashboard = () => {
  return (
    <div className="container">
      <h2>Dashboard</h2>
      <FileUpload />
      <Charts />
    </div>
  );
};

export default Dashboard;
