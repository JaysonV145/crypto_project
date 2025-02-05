import React from "react";
import Sidebar from "./Sidebar";
import CryptoPrices from "./CryptoPrices";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flexGrow: 1 }}>
        <CryptoPrices />
      </main>
    </div>
  );
};

export default Dashboard;
