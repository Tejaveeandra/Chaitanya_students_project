import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Warehouse, MessageSquareMore, BookOpen, Package, Cctv, ChevronUp, ChevronDown 
} from 'lucide-react';
import { HiOutlineUserGroup } from "react-icons/hi";
import Header from './Header';
import StudentsIcon from '../Images/Students.png';
import ApplicationIcon from '../Images/Application.png';
import FleetIcon from '../Images/Fleet.png';
import PaymentServicesImg from '../Images/PaymentServices.png';
import EmployeeImg from '../Images/Employee.png';
import { useFormContext } from '../components/FormContext';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const touchStartY = useRef(null);
  const sidebarRef = useRef(null);
  const { isFormOpen, isCityTableVisible, isSidebarVisible, setSidebarVisible } = useFormContext();

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

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
    console.log('Sidebar - Touch start:', touchStartY.current);
  };

  const handleTouchMove = (e) => {
    if (touchStartY.current === null) return;
    e.preventDefault();
    const touchCurrentY = e.touches[0].clientY;
    const deltaY = touchStartY.current - touchCurrentY;
    console.log('Sidebar - Touch move, deltaY:', deltaY);

    if (deltaY > 30 && !isExpanded) {
      setIsExpanded(true);
      console.log('Sidebar - Expanded: true');
    } else if (deltaY < -30 && isExpanded) {
      setIsExpanded(false);
      console.log('Sidebar - Expanded: false');
    }
  };

  const handleTouchEnd = () => {
    touchStartY.current = null;
    console.log('Sidebar - Touch end');
  };

  useEffect(() => {
    console.log('Sidebar - useEffect triggered');
    console.log('Sidebar - isCityTableVisible:', isCityTableVisible, 'isFormOpen:', isFormOpen, 'isSidebarVisible:', isSidebarVisible);
  }, [isCityTableVisible, isFormOpen, isSidebarVisible]);

  return (
    <>
      <style>{`
        .sidebar {
          width: 240px;
          min-height: calc(100vh - 60px);
          background: linear-gradient(90deg, #FFFFFF 0%, #FAFAFB 100%);
          padding: 9px;
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
          position: fixed;
          left: 0;
          top: 59px;
          z-index: 1000;
          transition: transform 0.3s ease-in-out, height 0.3s ease-in-out, opacity 0.3s ease-in-out;
          opacity: ${isSidebarVisible ? 1 : 0};
          pointer-events: ${isSidebarVisible ? 'auto' : 'none'};
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
          flex-direction: column;
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
          color: #4f46e5;
        }

        .menu-item.active .icon img {
          filter: invert(32%) sepia(96%) saturate(398%) hue-rotate(210deg) brightness(94%) contrast(94%);
        }

        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .drag-message {
          display: none;
        }

        @media (max-width: 1440px) {
          .sidebar {
            width: 200px;
          }
        }

        @media (max-width: 1366px) {
          .sidebar {
            width: 180px;
          }
        }

        @media (max-width: 1280px) {
          .sidebar {
            width: 160px;
          }
        }

        @media (max-width: 1024px) {
          .sidebar {
            width: 155px;
          }
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 155px;
          }
        }

        @media (max-width: 480px) {
          .sidebar {
            width: 100%;
            position: fixed;
            bottom: 0;
            top: auto;
            min-height: auto;
            height: ${isExpanded ? '185px' : '80px'};
            background: #fff;
            box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
            padding: 5px;
            transform: ${
              isFormOpen || !isSidebarVisible
                ? 'translateY(100%)'
                : isExpanded
                ? 'translateY(0)'
                : 'translateY(calc(100% - 80px))'
            };
            z-index: 1001;
            transition: transform 0.3s ease-in-out, height 0.3s ease-in-out, opacity 0.3s ease-in-out;
            background: #FFFFFF;
            opacity: ${isSidebarVisible ? 1 : 0};
            pointer-events: ${isSidebarVisible ? 'auto' : 'none'};
          }

          .sidebar-title {
            display: none;
          }

          .menu-list {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: ${isExpanded ? 'repeat(3, 55px)' : '60px'};
            gap: 5px;
            height: 100%;
            overflow: hidden;
            align-content: start;
            margin-top: 20px;
          }

          .menu-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 3px;
            margin: 0;
            font-size: 11px;
            text-align: center;
            min-width: 0;
            background: transparent;
            border-radius: 6px;
          }

          .menu-item:hover {
            background: #f2f2f2 !important;
          }

          .sidebar .menu-item.active {
            background: #3425FF !important;
            color: #FFFFFF !important;
            font-weight: 500;
          }

          .sidebar .menu-item.active .icon {
            color: #FFFFFF !important;
          }

          .sidebar .menu-item.active .icon img {
            filter: brightness(0) invert(1) !important;
          }

          .menu-item:nth-child(-n+5).active {
            background: #2617FD !important;
          }

          .menu-item:nth-child(-n+5).active .icon img {
            filter: brightness(0) invert(1) !important;
          }

          .menu-item:nth-child(n+6) {
            display: ${isExpanded ? 'flex' : 'none'};
          }

          .menu-item:nth-child(-n+5) {
            display: flex;
          }

          .menu-item:nth-child(11) {
            grid-column: 3;
          }

          .drag-message {
            display: flex;
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
            z-index: 1002;
            transition: opacity 0.3s ease-in-out;
            height: 10px;
          }

          .menu-item span:nth-child(2) {
            display: inline-block;
            max-width: 40px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .menu-item.active span:nth-child(2) {
            max-width: none;
            white-space: normal;
            overflow: visible;
            text-overflow: clip;
          }
        }
      `}</style>
      <div
        className="sidebar"
        ref={sidebarRef}
        style={{ touchAction: 'none' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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

const Layout = ({ children }) => {
  const { isFormOpen, setIsCityTableVisible, setSidebarVisible } = useFormContext();
  const location = useLocation();
  const layoutRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setIsCityTableVisible(location.pathname.startsWith('/students'));
    console.log('Layout - Route changed:', location.pathname);
  }, [location.pathname, setIsCityTableVisible]);

  useEffect(() => {
    let timeout;
    const handleLayoutScroll = () => {
      if (layoutRef.current) {
        const currentScrollY = layoutRef.current.scrollTop;
        console.log('Layout - Scroll detected, scrollTop:', currentScrollY, 'Screen width:', window.innerWidth);

        if (window.innerWidth <= 480) {
          const scrollingUp = currentScrollY < lastScrollY.current;
          const atTop = currentScrollY === 0;

          console.log('Layout - Scrolling Up:', scrollingUp, 'At Top:', atTop);

          clearTimeout(timeout);
          timeout = setTimeout(() => {
            if (atTop) {
              setSidebarVisible(true);
              console.log('Layout - At top, showing sidebar');
            } else if (scrollingUp) {
              setSidebarVisible(true);
              console.log('Layout - Scrolling up, showing sidebar');
            } else {
              setSidebarVisible(false);
              console.log('Layout - Scrolling down, hiding sidebar');
            }
            lastScrollY.current = currentScrollY;
          }, 50);
        }
      }
    };

    const layoutElement = layoutRef.current;
    if (layoutElement) {
      console.log('Layout - Attaching scroll event listener');
      layoutElement.addEventListener('scroll', handleLayoutScroll);
    }

    return () => {
      if (layoutElement) {
        console.log('Layout - Cleaning up scroll event listener');
        layoutElement.removeEventListener('scroll', handleLayoutScroll);
      }
      clearTimeout(timeout);
    };
  }, [setSidebarVisible]);

  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          overflow-x: hidden;
          overflow-y: auto;
        }
        .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: ${
            isFormOpen
              ? 'rgb(0, 0, 0)'
              : 'radial-gradient(rgba(255,255,255,0), rgba(247,249,250,1) )'
          };
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow-y: auto;
        }

        .main-content {
          display: flex;
          flex: 1;
          margin-top: 80px;
          margin-left: 280px;
          background: transparent;
          box-sizing: border-box;
          min-width: 0;
          max-width: calc(100% - 240px);
        }

        @media (max-width: 1440px) {
          .main-content {
            margin-left: 240px;
            max-width: calc(100% - 200px);
          }
        }

        @media (max-width: 1024px) {
          .main-content {
            margin-left: 200px;
            max-width: calc(100% - 155px);
          }
        }

        @media (max-width: 768px) {
          .main-content {
            margin-left: 185px;
            max-width: calc(100% - 155px);
          }
        }

        @media (max-width: 480px) {
      
          .main-content {
            margin-left: 0;
            width: 100%;
            max-width: 100%;
            margin-top: 60px;
            margin-bottom: 60px;
            overflow-y: auto;
            min-height: calc(100vh - 60px);
          }
        }
      `}</style>
      <div className="layout" ref={layoutRef}>
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