import React from 'react'
import AccordionLeft from "../Layout/AccordionLeft";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex w-full h-screen">
    {/* Common Sidebar */}
    <AccordionLeft />
    
    {/* Dynamic Content */}
    <div className="flex-1 p-6 bg-gray-100">
      <Outlet />
    </div>
  </div>

  )
}

export default Dashboard
