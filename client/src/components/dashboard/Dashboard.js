import React, { Component } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import DashboardContent from "./components/DashboardContent";
import "./Dashboard.css";

class dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Sidebar />
        <DashboardContent />
      </div>
    );
  }
}

export default dashboard;
