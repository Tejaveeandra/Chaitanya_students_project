import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Warehouse, MessageSquareMore, BookOpen, Package, Cctv, ChevronUp, ChevronDown 
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
  const [isExpanded, setIsExpanded] = useState(false); // State to track expanded/collapsed state
  const touchStartY = useRef(null); // Track touch start position
  const sidebarRef = useRef(null); // Reference to sidebar for drag handling

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

  // Handle touch start for drag
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
    console.log('Touch start:', touchStartY.current); // Debug touch start
  };

  // Handle touch move for drag
  const handleTouchMove = (e) => {
    if (touchStartY.current === null) return;
    e.preventDefault(); // Prevent scrolling during drag
    const touchCurrentY = e.touches[0].clientY;
    const deltaY = touchStartY.current - touchCurrentY;
    console.log('Touch move, deltaY:', deltaY); // Debug touch movement

    // Detect swipe direction
    if (deltaY > 30 && !isExpanded) { // Expand only if not already expanded
      setIsExpanded(true);
      console.log('Expanded: true');
    } else if (deltaY < -30 && isExpanded) { // Collapse only if expanded
      setIsExpanded(false);
      console.log('Expanded: false');
    }
  };

  // Handle touch end
  const handleTouchEnd = () => {
    touchStartY.current = null;
    console.log('Touch end'); // Debug touch end
  };

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
          transition: transform 0.3s ease-in-out, height 0.3s ease-in-out; /* Smooth transition */
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
          display: flex;
          flex-direction: column; /* Vertical for sidebar */
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

        /* Drag message styles */
        .drag-message {
          display: none; /* Hidden by default */
        }

        /* Synchronize sidebar width with main-content margin */
        @media (max-width: 1440px) {
          .sidebar {
            width: 220px;
          }
        }

        @media (max-width: 1024px) {
          .sidebar {
            width: 200px;
          }
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 200px;
          }
        }

        @media (max-width: 480px) {
          .sidebar {
            width: 100%;
            position: fixed;
            bottom: 0;
            top: auto; /* Remove top positioning */
            min-height: auto;
            height: ${isExpanded ? '185px' : '80px'}; /* Expanded: 3 rows, collapsed: 1 row */
            background: #fff;
            box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
            padding: 5px;
            transform: ${isExpanded ? 'translateY(0)' : 'translateY(calc(100% - 80px))'}; /* Slide up/down */
            z-index: 1001; /* Above other content */
            transition: height 0.3s ease-in-out, transform 0.3s ease-in-out; /* Smooth transitions */
            background: #FFFFFF;
          }

          .sidebar-title {
            display: none; /* Hide title on mobile */
          }

          .menu-list {
            display: grid;
            grid-template-columns: repeat(5, 1fr); /* 5 columns */
            grid-template-rows: ${isExpanded ? 'repeat(3, 55px)' : '60px'}; /* 3 rows when expanded, 1 when collapsed */
            gap: 5px; /* Space between grid items */
            
            height: 100%;
            overflow: hidden; /* Prevent scrolling in collapsed state */
            align-content: start; /* Align items to top */
            margin-top: 20px; /* Reserve space for drag message */
          }

          .menu-item {
            display: flex;
            flex-direction: column; /* Stack icon and text vertically */
            align-items: center;
            justify-content: center;
            padding: 5px;
            margin: 0;
            font-size: 11px; /* Compact layout */
            text-align: center;
            
            min-width: 0; /* Fit grid cells */
            background: transparent; /* Ensure no default background */
            border-radius: 6px; /* Match desktop styling */
          }

          .menu-item:hover {
            background: #f2f2f2 !important; /* Hover effect */
          }

          /* Reset desktop active styles for mobile */
          .menu-item.active {
            background: none; /* Remove desktop gradient */
          }

          .sidebar .menu-item.active {
            background: #3425FF !important; /* Solid blue background for active item */
            color: #FFFFFF !important; /* White text for contrast */
            font-weight: 500;
          }

          .sidebar .menu-item.active .icon {
            color: #FFFFFF !important; /* Ensure SVG icons are white */
          }

          .sidebar .menu-item.active .icon img {
            filter: brightness(0) invert(1) !important; /* Make image icons white */
          }

          /* Ensure first 5 items (first row) follow the same active styling */
          .menu-item:nth-child(-n+5).active {
            background:rgb(38, 23, 253) !important; /* Ensure first row has blue background */
            //color: #FFFFFF !important;
          }

          .menu-item:nth-child(-n+5).active .icon img {
            filter: brightness(0) invert(1) !important; /* Ensure first row image icons are white */
          }

          /* Hide items beyond the first 5 when collapsed */
          .menu-item:nth-child(n+6) {
            display: ${isExpanded ? 'flex' : 'none'};
          }

          /* Ensure first 5 items are always visible */
          .menu-item:nth-child(-n+5) {
            display: flex;
          }

          /* Center the 11th item in the third row */
          .menu-item:nth-child(11) {
            grid-column: 3; /* Center in third column */
          }

          /* Show drag message only in mobile view */
          .drag-message {
            display: flex; /* Visible in mobile view */
            justify-content: center;
            position: absolute;
            top: 5px;
            left: 0;
            right: 0;
            text-align: center;
            font-size: 12px;
            color: #666;
            background: rgba(255, 255, 255, 0.8);
            padding: 2px 0;
            z-index: 1002; /* Above menu items */
            transition: opacity 0.3s ease-in-out;
            height:10px;
          }
        }
      `}</style>
      <div
        className="sidebar"
        ref={sidebarRef}
        style={{ touchAction: 'none' }} /* Prevent default touch actions */
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Drag messages */}
        <div className="drag-message" style={{ opacity: isExpanded ? 0 : 1 }}>
        <ChevronUp size={20} />

          Drag up to see full menu
        </div>
        <div className="drag-message" style={{ opacity: isExpanded ? 1 : 0 }}>
          <ChevronDown size={20} />
          Drag down to see full menu
        </div>
        <h2 className="sidebar-title">Modules</h2>
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `menu-item ${isActive ? 'active' : ''}`
                }
                aria-label={`Navigate to ${item.name}`}
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
            margin-left: 250px;
            width: calc(100% - 220px);
          }
        }

        @media (max-width: 1024px) {
          .main-content {
            margin-left: 210px;
            width: calc(100% - 180px);
          }
        }

        @media (max-width: 768px) {
          .main-content {
            margin-left: 210px;
            width: calc(100% - 120px);
          }
        }

        @media (max-width: 480px) {
          .main-content {
            margin-left: 0;
            width: 100%;
            margin-top: 60px; /* Adjust for smaller header */
            
            margin-bottom: 60px; /* Reserve space for bottom bar */
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