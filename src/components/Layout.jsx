import React from 'react';
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
import { useFormContext } from './FormContext';

// Sidebar Component
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
          width: 260px;
          min-height: calc(100vh - 60px);
          background: linear-gradient(90deg, #FFFFFF 0%, #FAFAFB 100%);
          padding: 9px;
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
          position: fixed;
          left: 0;
          top: 59px; /* Start after the header */
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
          background: rgba(255, 255, 255, 1);
          margin-bottom: 5px;
        }

        .menu-item:hover {
          background-color: #f2f2f2;
        }

        .menu-item.active {
          background: linear-gradient(90deg, #D0D2FF 0%, #FFFFFF 51%);
          color: #4f46e5;
          font-weight: 500;
        }

        .menu-item.active .icon {
          color: #4f46e5; /* Apply color to SVG icons */
        }

        .menu-item.active .icon img {
          filter: invert(32%) sepia(96%) saturate(398%) hue-rotate(210deg) brightness(94%) contrast(94%); /* Approximates #4f46e5 */
        }

        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Synchronize sidebar width with main-content margin */
        @media (max-width: 1440px) {
          .sidebar {
            width: 220px;
          }
        }

        @media (max-width: 1024px) {
          .sidebar {
            width: 180px;
          }
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 120px;
          }
        }

        @media (max-width: 480px) {
          .sidebar {
            width: 100%; /* Full width on very small screens */
            position: static; /* Remove fixed positioning */
            min-height: auto;
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
  const { isFormOpen } = useFormContext();

  return (
    <>
      <style>{`
       .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: ${
            isFormOpen
              ? 'rgb(0, 0, 0)'
              : 'radial-gradient(rgba(255,255, 255,0), rgba(247,249,250,1) )'
          };
          width: 100%;
          overflow-x: hidden; /* Prevent horizontal overflow */
        }     
          


        .main-content {
          display: flex;
          flex: 1;
          margin-top: 80px;
          margin-left: 300px; /* Match sidebar width */
          background: transparent; /* Let .layout background show through */
          width: calc(100% - 260px); /* Consistent with margin-left */
          box-sizing: border-box;
          min-width: 0;
        }

        /* Adjusted breakpoints for better responsiveness */
        @media (max-width: 1440px) {
          .main-content {
            margin-left: 260px;
            width: calc(100% - 220px);
          }
        }

        @media (max-width: 1024px) {
          .main-content {
            margin-left: 180px;
            width: calc(100% - 180px);
          }
        }

        @media (max-width: 768px) {
          .main-content {
            margin-left: 120px;
            width: calc(100% - 120px);
          }
        }

        @media (max-width: 480px) {
          .main-content {
            margin-left: 0;
            width: 100%;
            margin-top: 60px; /* Adjust for smaller header */
          }
        }
      `}</style>
      <div className="layout">
        <Header />
        <div className="main-content">
          <Sidebar />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;