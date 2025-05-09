import React, { useState } from 'react';
import { Bell, Search as SearchIcon, ChevronDown } from 'lucide-react'; // Importing icons from lucide-react library
import styled from 'styled-components'; // Importing styled-components for CSS-in-JS styling
import Ellipse6 from '../Images/Ellipse6.png'; // Importing user profile image
import logo from '../Images/SriChaitanyalogo.png'; // Importing logo image

// Styled components for the header layout and elements
const HeaderContainer = styled.div`
  display: flex; /* Flexbox layout for header */
  align-items: center; /* Vertically center items */
  justify-content: space-between; /* Space out children (LeftSection and UserProfile) */
  padding: 9px 16px; /* Padding for header */
  background-color: white; /* White background */
  border-bottom: 1px solid #e2e8f0; /* Bottom border for visual separation */
  position: fixed; /* Fix header to top of the page */
  top: 0;
  left: 0;
  right: 0;
  width: 100%; /* Full width */
  z-index: 1000; /* Ensure header stays above other content */

  @media (max-width: 768px) {
    padding: 13px; /* Increase padding for tablet view */
  }

  @media (max-width: 480px) {
    padding: 10px; /* Reduce padding for mobile view */
    flex-wrap: nowrap; /* Prevent wrapping to keep elements in one line */
  }
`;

const LeftSection = styled.div`
  display: flex; /* Flexbox layout for logo and search elements */
  align-items: center; /* Vertically center items */
  gap: 20px; /* Space between logo and search elements */
  flex: 1; /* Take up remaining space */
  min-width: 0; /* Allow shrinking if needed */

  @media (max-width: 768px) {
    gap: 10px; /* Reduce gap for tablet view */
    flex-wrap: nowrap; /* Prevent wrapping */
  }

  @media (max-width: 480px) {
    gap:20px; /* Further reduce gap for mobile */
    flex: 0 1 auto; /* Allow shrinking to fit in one line */
  }
`;

const LogoContainer = styled.div`
  display: flex; /* Flexbox layout for logo */
  align-items: center; /* Vertically center logo */
  gap: 8px; /* Space between logo image and other elements (if any) */
  margin-right: 20px; /* Space between logo and search elements */

  @media (max-width: 768px) {
    margin-right: 10px; /* Reduce margin for tablet */
  }

  @media (max-width: 480px) {
    margin-right: 5px; /* Further reduce margin for mobile */
  }
`;

const LogoImage = styled.img`
  width: 150px; /* Logo width for desktop */
  height: 40px; /* Logo height for desktop */

  @media (max-width: 768px) {
    width: 120px; /* Reduce logo size for tablet */
    height: 32px;
  }

  @media (max-width: 480px) {
    width: 80px; /* Further reduce logo size for mobile */
    height: 24px;
  }
`;

const SearchContainer = styled.div`
  flex: 1; /* Take up remaining space in LeftSection */
  max-width: 500px; /* Max width for search bar on desktop */
  margin: 0 8px; /* Horizontal margin */
  display: flex; /* Flexbox layout for search icon and input */
  align-items: center; /* Vertically center items */
  position: relative; /* For absolute positioning of SearchIconStyled */

  @media (max-width: 768px) {
    max-width: 60%; /* Reduce max width for tablet */
    margin: 0 4px; /* Reduce margin for tablet */
  }

  @media (max-width: 480px) {
    display: flex; /* Ensure flex layout */
    flex: 1; /* Take up available space */
    max-width: ${props => (props.isOpen ? '60%' : '0')}; /* Expand when open, collapse when closed */
    margin: 0; /* Remove margin to fit in header */
    overflow: hidden; /* Hide overflow when collapsed */
    transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')}; /* Slide in from left */
    transition: transform 0.3s ease-in-out, max-width 0.3s ease-in-out; /* Smooth animation for sliding and width */
  }
`;

const SearchIconStyled = styled(SearchIcon)`
  position: absolute; /* Position inside SearchContainer */
  left: 12px; /* Position from the left */
  color: #A1A5B0; /* Icon color */
  pointer-events: none; /* Prevent interaction with the icon */

  @media (max-width: 768px) {
    left: 8px; /* Adjust position for tablet */
  }
`;

const SearchIconToggle = styled(SearchIcon)`
  display: none; /* Hidden on desktop and tablet */
  color: #A1A5B0; /* Icon color */
  cursor: pointer; /* Indicate clickable */

  @media (max-width: 480px) {
    display: block; /* Show on mobile */
   
  }
`;

const SearchBar = styled.input`
  width: 100%; /* Full width of SearchContainer */
  padding: 8px 12px 8px 38px; /* Padding with space for icon on the left */
  border: 1px solid #e2e8f0; /* Border for input */
  background: #FFFFFF; /* White background */
  border-radius: 26px; /* Rounded corners */
  font-size: 14px; /* Font size for desktop */
  box-shadow: 0px 0px 0px 3px #F5F6F7; /* Subtle shadow */

  &::placeholder {
    color: rgba(0, 0, 0, 0.25); /* Placeholder text color */
  }

  @media (max-width: 768px) {
    padding: 6px 10px 6px 30px; /* Adjust padding for tablet */
    font-size: 12px; /* Smaller font size for tablet */
  }

  @media (max-width: 480px) {
    display: ${props => (props.isOpen ? 'block' : 'none')}; /* Show/hide based on toggle state */
  }
`;

const UserProfile = styled.div`
  display: flex; /* Flexbox layout for user profile elements */
  align-items: center; /* Vertically center items */
  gap: 15px; /* Space between elements */
  min-width: 0; /* Allow shrinking */
  margin-right: 20px; /* Space from the right edge */
  position: relative; /* For absolute positioning of Dropdown */

  @media (max-width: 768px) {
    gap: 8px; /* Reduce gap for tablet */
    margin-right: 10px; /* Reduce margin for tablet */
    flex-wrap: nowrap; /* Prevent wrapping */
  }

  @media (max-width: 480px) {
    gap: 6px; /* Further reduce gap for mobile */
    margin-right: 5px; /* Reduce margin for mobile */
    flex: 0 1 auto; /* Allow shrinking to fit in one line */
  }
`;

const NotificationIcon = styled(Bell)`
  color: #666; /* Icon color */
`;

const UserInfo = styled.div`
  display: flex; /* Flexbox layout for user info */
  flex-direction: column; /* Stack user ID and role vertically */
  align-items: flex-start; /* Align text to the left */

  @media (max-width: 480px) {
    display: none; /* Hide on mobile, shown in dropdown */
  }
`;

const UserId = styled.span`
  font-size: 14px; /* Font size for desktop */
  font-weight: 500; /* Medium weight */
  color: #333; /* Text color */

  @media (max-width: 768px) {
    font-size: 12px; /* Smaller font for tablet */
  }
`;

const UserRole = styled.span`
  font-size: 12px; /* Font size for desktop */
  color: #666; /* Text color */

  @media (max-width: 768px) {
    font-size: 10px; /* Smaller font for tablet */
  }
`;

const Dropdown = styled.div`
  display: none; /* Hidden on desktop and tablet */

  @media (max-width: 480px) {
    display: ${props => (props.isOpen ? 'block' : 'none')}; /* Show/hide based on toggle state */
    position: absolute; /* Position below profile icon */
    top: 40px; /* Distance from top of header */
    right: 0; /* Align to the right */
    background-color: white; /* White background */
    border: 1px solid #e2e8f0; /* Border for dropdown */
    border-radius: 8px; /* Rounded corners */
    padding: 10px; /* Padding inside dropdown */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    z-index: 1001; /* Ensure dropdown is above other content */
    min-width: 150px; /* Minimum width for dropdown */
  }

  @media (max-width: 425px) {
    min-width: 140px; /* Adjust for large mobile */
    top: 38px; /* Adjust position */
  }

  @media (max-width: 375px) {
    min-width: 130px; /* Adjust for medium mobile */
    top: 36px; /* Adjust position */
  }

  @media (max-width: 320px) {
    min-width: 120px; /* Adjust for small mobile */
    top: 34px; /* Adjust position */
  }
`;

const DropdownUserInfo = styled.div`
  display: flex; /* Flexbox layout for dropdown user info */
  flex-direction: column; /* Stack user ID and role vertically */
  align-items: flex-start; /* Align text to the left */
`;

const DropdownUserId = styled.span`
  font-size: 12px; /* Font size for dropdown user ID */
  font-weight: 500; /* Medium weight */
  color: #333; /* Text color */
`;

const DropdownUserRole = styled.span`
  font-size: 10px; /* Font size for dropdown user role */
  color: #666; /* Text color */
`;

const ProfileIconContainer = styled.div`
  display: flex; /* Flexbox layout for profile icon and chevron */
  align-items: center; /* Vertically center items */
  gap: 8px; /* Space between profile image and chevron */
  cursor: pointer; /* Indicate clickable */
`;

const Header = () => {
  // State to manage user profile dropdown visibility on mobile
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // State to manage search bar visibility on mobile
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Function to toggle user profile dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to toggle search bar visibility
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <HeaderContainer>
      <LeftSection>
        {/* Logo section */}
        <LogoContainer>
          <LogoImage src={logo} alt="Sri Chaitanya Logo" />
        </LogoContainer>

        {/* Search icon toggle for mobile */}
        <SearchIconToggle size={18} isOpen={isSearchOpen} onClick={toggleSearch} />
        {/* Search bar container, toggles on mobile */}
        <SearchContainer isOpen={isSearchOpen}>
          <SearchIconStyled size={18} />
          <SearchBar type="text" placeholder="Ask for anything" isOpen={isSearchOpen} />
        </SearchContainer>
      </LeftSection>

      <UserProfile>
        {/* Notification icon */}
        <NotificationIcon size={18} />
        {/* Profile icon and dropdown toggle */}
        <ProfileIconContainer onClick={toggleDropdown}>
          <img src={Ellipse6} alt="User Profile" width="32" height="32" />
          <ChevronDown size={18} color="#666" />
        </ProfileIconContainer>
        {/* User info for desktop and tablet */}
        <UserInfo>
          <UserId>HYD 256789</UserId>
          <UserRole>Cashier</UserRole>
        </UserInfo>
        {/* Dropdown for user info on mobile */}
        <Dropdown isOpen={isDropdownOpen}>
          <DropdownUserInfo>
            <DropdownUserId>HYD 256789</DropdownUserId>
            <DropdownUserRole>Cashier</DropdownUserRole>
          </DropdownUserInfo>
        </Dropdown>
      </UserProfile>
    </HeaderContainer>
  );
};

export default Header;