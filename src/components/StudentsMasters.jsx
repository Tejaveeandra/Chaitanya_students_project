import React from 'react';
import { Search } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import StateIcon from '../Images/State.png';
import GroupIcon from '../Images/Group.png';
import CampusIcon from '../Images/Campus.png';
import FeePaymentYearIcon from '../Images/FeePaymentYear.png';
import FeeHeadsIcon from '../Images/Fee Heads.png';
import OrganizationImage from '../Images/Organization.png';
import CardTypeImage from '../Images/CardType.png';
import StreamImage from '../Images/Steam.png';
import ProgramNameImage from '../Images/ProgramName.png';
import ExamProgramImage from '../Images/ExamProgram.png';
import CourseTrackImage from '../Images/CourseTrack.png';
import bgImage from '../Images/BGImg.png'; // Added import for BGImg.png

const StudentsMasters = () => {
  const filterButtons = [
    {
      name: 'State',
      icon: <img src={StateIcon} alt="State" style={{ width: 18, height: 18 }} />,
      path: 'state',
    },
    {
      name: 'City',
      icon: <img src={GroupIcon} alt="City" style={{ width: 18, height: 18 }} />,
      path: 'city',
    },
    {
      name: 'Campus',
      icon: <img src={CampusIcon} alt="Campus" style={{ width: 18, height: 18 }} />,
      path: 'campus',
    },
    {
      name: 'Fee Payment Year',
      icon: <img src={FeePaymentYearIcon} alt="Fee Payment Year" style={{ width: 18, height: 18 }} />,
      path: 'fee-payment-year',
    },
    {
      name: 'Fee Heads',
      icon: <img src={FeeHeadsIcon} alt="Fee Heads" style={{ width: 18, height: 18 }} />,
      path: 'fee-heads',
    },
    {
      name: 'Organisation',
      icon: <img src={OrganizationImage} alt="Organisation" style={{ width: 20, height: 20 }} />,
      path: 'organisation',
    },
    {
      name: 'Card Type',
      icon: <img src={CardTypeImage} alt="Card Type" style={{ width: 18, height: 18 }} />,
      path: 'card-type',
    },
    {
      name: 'Stream',
      icon: <img src={StreamImage} alt="Stream" style={{ width: 18, height: 18 }} />,
      path: 'stream',
    },
    {
      name: 'Program Name',
      icon: <img src={ProgramNameImage} alt="Program Name" style={{ width: 18, height: 18 }} />,
      path: 'program-name',
    },
    {
      name: 'Exam Program',
      icon: <img src={ExamProgramImage} alt="Exam Program" style={{ width: 18, height: 18 }} />,
      path: 'exam-program',
    },
    {
      name: 'Course Track',
      icon: <img src={CourseTrackImage} alt="Course Track" style={{ width: 18, height: 18 }} />,
      path: 'course-track',
    },
  ];

  const location = useLocation();
  const isStudentsMasters = location.pathname === '/students';

  return (
    <>
      <style>{`
        .students-masters {
          padding: 24px;
          backdrop-filter: blur(16.2px);
          -webkit-backdrop-filter: blur(16.2px);
          border-radius: 12px;
          min-height: 400px;
          box-sizing: border-box;
        }

        .top-section {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 400px;
          margin-bottom: 24px;
        }

        .left-section {
          flex: 1;
          min-width: 410px;
          padding: 16px;
        }

        .right-section {
          flex: 2;
          display: flex;
          flex-wrap: wrap;
          gap: 12px 16px;
          min-width: 200px;
          margin-left: 0;
        }

        .title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 8px;
          color: #000; /* Ensure text is readable on background */
        }

        .description {
          font-size: 14px;
          color: #666;
          margin-bottom: 16px;
        }

        .search-bar-wrapper {
          position: relative;
          width: 100%;
          max-width: 300px;
        }

        .search-icon {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: #888;
          pointer-events: none;
        }

        .search-bar {
          width: 100%;
          padding: 8px 12px;
          padding-left: 36px;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          font-size: 14px;
          background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent for readability */
        }

        .search-bar::placeholder {
          color: rgba(0, 0, 0, 0.25);
        }

        .filter-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 20px;
          border: 1px solid #E8E8E8;
          border-radius: 30px;
          background-color: #FFFFFF;
          font-size: 12px;
          color: #444;
          cursor: pointer;
          transition: background-color 0.2s, border-color 0.2s, color 0.2s;
          box-sizing: border-box;
          white-space: nowrap;
          text-align: center;
          text-decoration: none;
        }

        .filter-button.active {
          background-color: #007bff;
          border-color: #007bff;
          color: #FFFFFF;
        }

        .filter-button:hover {
          background-color: #f2f2f2;
        }

        .filter-button.active:hover {
          background-color: #0056b3;
        }

        .filter-button span {
          font-weight: 600;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        /* 1440px breakpoint */
        @media (max-width: 1440px) {
          .students-masters {
            padding: 20px;
          }

          .top-section {
            gap: 360px;
          }

          .left-section {
            min-width: 350px;
          }

          .right-section {
            gap: 10px 12px;
          }

          .filter-button {
            padding: 8px 16px;
            font-size: 11px;
          }
        }

        /* 1024px breakpoint */
        @media (max-width: 1024px) {
          .students-masters {
            padding: 16px;
          }

          .top-section {
            gap: 100px;
          }

          .left-section {
            min-width: 300px;
          }

          .right-section {
            gap: 8px 10px;
          }

          .title {
            font-size: 22px;
          }

          .description {
            font-size: 13px;
          }

          .search-bar-wrapper {
            max-width: 250px;
          }

          .filter-button {
            padding: 8px 14px;
            font-size: 10px;
          }
        }

        /* 768px breakpoint */
        @media (max-width: 768px) {
          .students-masters {
            padding: 14px;
          }

          .top-section {
            flex-direction: column;
            gap: 20px;
            align-items: stretch;
          }

          .left-section {
            min-width: 100%;
          }

          .right-section {
            justify-content: flex-start;
            gap: 8px 10px;
          }

          .title {
            font-size: 20px;
          }

          .description {
            font-size: 12px;
          }

          .search-bar-wrapper {
            max-width: 100%;
          }

          .filter-button {
            padding: 6px 12px;
            font-size: 10px;
          }

          .filter-button img {
            width: 16px;
            height: 16px;
          }
        }

       /* 480px and below breakpoint */
  @media (max-width: 480px) {
    .students-masters {
      padding: 12px;
      min-height: 300px;
    
    }

    .top-section {
      gap: 6px;
      flex-direction: column;
      align-items: flex-start;
    }

    .left-section {
      // // width: 340px;
      // height: 168px;
      margin-left: 10px; /* Using margin-left to simulate left: 10px */
      margin-top:-20px;
      background-image: url(${bgImage});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      padding: 12px;
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
      border-right: 1px solid #e2e8f0; /* Assuming a border color */
      border-bottom: 1px solid #e2e8f0;
      border-left: 1px solid #e2e8f0;
      box-sizing: border-box;
    }

   .right-section {
            display: flex;
            flex-wrap: wrap;
            gap: 12px 20px;
            width: 100%;
            margin-left: 0;
            justify-content: flex-start;
          }

    .title {
        width:185px;
        height:27px;
      font-size: 22px;
    }

    .description {
      font-size: 14px;
      width: 90%;
      margin-bottom: 12px;
    }

    .search-bar-wrapper {
      max-width: 50%;
    }

    .search-bar {
      padding: 6px 10px;
      padding-left: 32px;
      font-size: 12px;
    }

    .search-icon {
      left: 8px;
      width: 16px;
      height: 16px;
    }

    .filter-button {
      padding: 4px 6px;
      font-size: 10px;
     
      min-width: 91px;
      height:32px;
      max-width: none;
      gap: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .filter-button img {
      width: 14px;
      height: 14px;
    }

    .filter-button span {
      font-size: 14px;
      -webkit-line-clamp: 2;
      white-space: normal;
    }
  }
      `}</style>

      <div>
        {isStudentsMasters && (
          <div className="students-masters">
            <div className="top-section">
              <div className="left-section">
                <h1 className="title">Students Masters</h1>
                <p className="description">
                  Access and manage comprehensive student details seamlessly. View personalized profiles tailored to your campus.
                </p>
                <div className="search-bar-wrapper">
                  <Search className="search-icon" size={18} />
                  <input
                    type="text"
                    className="search-bar"
                    placeholder="Search for the module"
                  />
                </div>
              </div>
              <div className="right-section">
                {filterButtons.map((button) => (
                  <Link
                    key={button.name}
                    to={button.path}
                    className={`filter-button ${location.pathname.includes(button.path) ? 'active' : ''}`}
                    onClick={() => console.log(`Navigating to ${button.path}`)}
                  >
                    {button.icon}
                    <span>{button.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
        <Outlet />
      </div>
    </>
  );
};

export default StudentsMasters;