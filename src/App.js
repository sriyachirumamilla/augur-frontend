import React from "react";
import { distributors } from "./data/distributors";
import DistributorCard from "./components/DistributorCard";
import "./App.css";

const App = () => (
  <div className="dashboard">
    <h1>Augur Dashboard</h1>
    <div className="cards-container">
      {distributors.map(distributor => (
        <DistributorCard key={distributor.id} distributor={distributor} />
      ))}
    </div>
  </div>
);

export default App;