import React, { useState } from 'react';
import { Bell, Search as SearchIcon, ChevronDown, Menu } from 'lucide-react';
import styled from 'styled-components';
import Ellipse6 from '../Images/Ellipse6.png';
import logo from '../Images/SriChaitanyalogo.png';

// Styled components for the header layout and elements
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 16px;
  background-color: white;
  border-bottom: 1px solid #e2e8f0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 13px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    flex-wrap: nowrap;
    background: #F6F8F9;

  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  flex: 1;
  min-width: 0;

  @media (max-width: 768px) {
    gap: 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 480px) {
    gap: 10px;
    flex: 0 1 auto;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 10px;
  }

  @media (max-width: 480px) {
    margin-right: 5px;
  }
`;

const LogoImage = styled.img`
  width: 150px;
  height: 40px;

  @media (max-width: 768px) {
    width: 120px;
    height: 32px;
  }

  @media (max-width: 480px) {
    width: 112px;
    height: 26px;
  }
`;

const SearchContainer = styled.div`
  flex: 1;
  max-width: 500px;
  margin: 0 8px;
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    max-width: 60%;
    margin: 0 4px;
  }

  @media (max-width: 480px) {
    flex: 1;
    max-width: ${props => (props.isOpen ? '60%' : '0')};
    margin: 0;
    overflow: hidden;
    transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out, max-width 0.3s ease-in-out;
  }
`;

const SearchIconStyled = styled(SearchIcon)`
  position: absolute;
  left: 12px;
  color: #A1A5B0;
  pointer-events: none;

  @media (max-width: 768px) {
    left: 8px;
  }

  @media (max-width: 480px) {
    display: ${props => (props.isOpen ? 'block' : 'none')};
  }
`;

const SearchIconToggle = styled(SearchIcon)`
  display: none;
  color: #A1A5B0;
  cursor: pointer;

  @media (max-width: 480px) {
    // display: block;
      oveflow:hidden;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 8px 12px 8px 38px;
  border: 1px solid #e2e8f0;
  background: #FFFFFF;
  border-radius: 26px;
  font-size: 14px;
  box-shadow: 0px 0px 0px 3px #F5F6F7;

  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    padding: 6px 10px 6px 30px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    display: ${props => (props.isOpen ? 'block' : 'none')};
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  min-width: 0;
  margin-right: 20px;
  position: relative;

  @media (max-width: 768px) {
    gap: 8px;
    margin-right: 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 480px) {
    display: none; /* Completely hide on small screens */
  }
`;

const NotificationIcon = styled(Bell)`
  color: #666;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UserId = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #333;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const UserRole = styled.span`
  font-size: 12px;
  color: #666;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Dropdown = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: ${props => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    top: 40px;
    right: 0;
    background-color: white;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1001;
    min-width: 150px;
  }

  @media (max-width: 425px) {
    min-width: 140px;
    top: 38px;
  }

  @media (max-width: 375px) {
    min-width: 130px;
    top: 36px;
  }

  @media (max-width: 320px) {
    min-width: 120px;
    top: 34px;
  }
`;

const DropdownUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DropdownUserId = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #333;
`;

const DropdownUserRole = styled.span`
  font-size: 10px;
  color: #666;
`;

const ProfileIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const MenuIcon = styled(Menu)`
  display: none;
  color: #666;
  cursor: pointer;

  @media (max-width: 480px) {
    display: block;
    position: absolute;
    right: 38px; /* Adjust this as needed */
    top: 16px;
  }
`;


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <HeaderContainer>
      <LeftSection>
        <LogoContainer>
          <LogoImage src={logo} alt="Sri Chaitanya Logo" />
        </LogoContainer>
        <SearchIconToggle size={18} onClick={toggleSearch} />
        <SearchContainer isOpen={isSearchOpen}>
          <SearchIconStyled size={18} isOpen={isSearchOpen} />
          <SearchBar type="text" placeholder="Ask for anything" isOpen={isSearchOpen} />
        </SearchContainer>
      </LeftSection>

      <UserProfile>
        <NotificationIcon size={18} />
        <ProfileIconContainer onClick={toggleDropdown}>
          <img src={Ellipse6} alt="User Profile" width="32" height="32" />
         
        </ProfileIconContainer>
        <UserInfo>
          <UserId>HYD 256789</UserId>
          <UserRole>Cashier</UserRole>
        </UserInfo>
         <ChevronDown size={18} color="#666" />
        <Dropdown isOpen={isDropdownOpen}>
          <DropdownUserInfo>
            <DropdownUserId>HYD 256789</DropdownUserId>
            <DropdownUserRole>Cashier</DropdownUserRole>
          </DropdownUserInfo>
        </Dropdown>
      </UserProfile>

      <MenuIcon size={18} />
    </HeaderContainer>
  );
};

export default Header;