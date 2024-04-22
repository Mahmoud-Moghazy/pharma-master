import React from "react";
import { Link } from "react-router-dom";
// import HeaderBottom from "../Components/header/HeaderBottom";
const Dashboard = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="allProduct">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
