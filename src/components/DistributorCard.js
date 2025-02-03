import React from "react";

const DistributorCard = ({ distributor }) => (
    <div className="card">
        <h3>{distributor.name}</h3>
        <p>Shipped last month: {distributor.lastMonthShipped}</p>
        <p>Forecasted next month: {distributor.forecastedNextMonth}</p>
        <p>YTD Avg: {distributor.ytdAverage}</p>
    </div>
);

export default DistributorCard;