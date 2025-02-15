import React from 'react'
import Accordion from "../Layout/Accordion";
import { Outlet } from "react-router-dom";
import Footer from './Dashboard/Footer';

const Dashboard = () => {
  return (
    <div className="flex w-full h-screen">
    {/* Common Sidebar */}
    <Accordion />
    
    {/* Dynamic Content */}
    <div className="w-full h-full  bg-gradient-to-b from-gray-50 to-gray-100">
      <Outlet />
      <Footer />
    </div>
  </div>

  )
}

export default Dashboard
