import React from 'react'
import Accordion from "../Layout/Accordion";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex w-full h-screen">
    {/* Common Sidebar */}
    <Accordion />
    
    {/* Dynamic Content */}
    <div className="flex-1 p-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <Outlet />
    </div>
  </div>

  )
}

export default Dashboard
