import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {
  Warehouse, MessageSquareMore, BookOpen, Package, Cctv,
} from 'lucide-react';
import Header from './Header';
import { HiOutlineUserGroup } from "react-icons/hi";
import StudentsIcon from '../Images/Students.png';
import ApplicationIcon from '../Images/Application.png';
import FleetIcon from '../Images/Fleet.png';
import PaymentServicesImg from '../Images/PaymentServices.png';
import EmployeeImg from '../Images/Employee.png';

// Sidebar Component (nested inside Layout.jsx)
const Sidebar = () => {
  const menuItems = [
    {
      name: 'Students',
      icon: <img src={StudentsIcon} alt="Students" style={{ width: 20, height: 20 }} />,
      path: '/students'
    },
    {
      name: 'Application',
      icon: <img src={ApplicationIcon} alt="Application" style={{ width: 18, height: 18 }} />,
      path: '/application'
    },
    {
      name: 'Employee',
      icon: <img src={EmployeeImg} alt="Employee" style={{ width: 18, height: 18 }} />,
      path: '/employee',
    },
    {
      name: 'Fleet',
      icon: <img src={FleetIcon} alt="Fleet" style={{ width: 18, height: 18 }} />,
      path: '/fleet'
    },
    { name: 'Warehouse', icon: <Warehouse size={18} />, path: '/warehouse' },
    { name: 'SMS', icon: <MessageSquareMore size={18} />, path: '/sms' },
    { name: 'Question Bank', icon: <BookOpen size={18} />, path: '/question-bank' },
    { name: 'Assets Management', icon: <Package size={18} />, path: '/assets' },
    {
      name: 'Payment Services',
      icon: <img src={PaymentServicesImg} alt="Payment Services" style={{ width: 20, height: 20 }} />,
      path: '/payment',
    },
    { name: 'CCTV', icon: <Cctv size={18} />, path: '/cctv' },
    { name: 'HRMS', icon: <HiOutlineUserGroup size={18} />, path: '/hrms' }
  ];

  return (
    <>
      <style>{`
        .sidebar {
          width: 220px;
          min-height: calc(100vh - 60px);
          background-color: rgba(250, 250, 251, 1);
          padding: 9px;
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
          position: fixed;
          left: 0;
          top: 60px; /* Start after the header */
          z-index: 1000;
        }

        .sidebar-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 14px;
        }

        .menu-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .menu-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 16px;
          text-decoration: none;
          color: #444;
          border-radius: 6px;
          font-size: 14px;
          transition: background-color 0.2s, color 0.2s;
        }

        .menu-item:hover {
          background-color: #f2f2f2;
        }

        .menu-item.active { 
  background: linear-gradient(90deg, #D0D2FF 0%, #FFFFFF 51%);
  color: #4f46e5;
  font-weight: 500;
}


        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .sidebar {
            width: 200px; /* Reduce sidebar width for smaller screens */
          }
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 150px; /* Further reduce for very small screens */
          }
        }
      `}</style>

      <div className="sidebar">
        <h2 className="sidebar-title">Modules</h2>
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `menu-item ${isActive ? 'active' : ''}`
                }
              >
                <span className="icon">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

// Layout Component
const Layout = ({ children }) => {
  return (
    <>
      <style>{`
        .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: rgb(240, 240, 240);
          width: 100vw; /* Ensure layout fits viewport width */
          overflow-x: hidden; /* Prevent horizontal scrolling */
        }

        .main-content {
          display: flex;
          flex: 1;
          margin-top: 80px; /* Space for fixed header */
          margin-left: 280px; /* Match sidebar width */
          background-color: rgb(240, 240, 240);
          width: calc(100% - 260px); /* Ensure main content fits remaining space */
          box-sizing: border-box;
          min-width: 0; /* Prevent overflow */
        }

        @media (max-width: 1024px) {
          .main-content {
            margin-left: 200px; /* Match reduced sidebar width */
            width: calc(100% - 200px);
          }
        }

        @media (max-width: 768px) {
          .main-content {
            margin-left: 150px; /* Match reduced sidebar width */
            width: calc(100% - 150px);
          }
        }
      `}</style>

      <div className="layout">
        <Header />
        <div className="main-content">
          <Sidebar />
          {children || <Outlet />}
        </div>
      </div>
    </>
  );
};

export default Layout;