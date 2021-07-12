import React, { Component } from "react";
import Sidebar from "./subDashboard/sidebar";
import DashboardContent from "./subDashboard/dashboardContent";

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
