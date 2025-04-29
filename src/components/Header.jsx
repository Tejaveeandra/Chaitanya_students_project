import React from 'react';
import { Bell, Search as SearchIcon, PersonStanding, ChevronDown } from 'lucide-react';

import styled from 'styled-components';
import Ellipse6 from '../Images/Ellipse6.png';
import logo from '../Images/SriChaitanyalogo.png';

// Styled components
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
  width: 100%; /* Ensure it takes full width */
  
  z-index: 1000;
`;



const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  flex: 1;
  min-width: 0; /* Prevent overflow issues */
`;


const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 60px;
`;

const LogoText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #d32f2f;
`;

const LogoSubtext = styled.div`
  font-size: 12px;
  color: #666;
`;

const SearchContainer = styled.div`
  flex: 1;
  max-width: 500px;
  margin: 0 8px; /* Reduced from 20px */
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchIconStyled = styled(SearchIcon)`
  position: absolute;
  left: 12px;
  color: #A1A5B0;
  pointer-events: none;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 8px 12px 8px 38px;
  border: 1px solid #e2e8f0;
  border-radius: 26px;
  font-size: 14px;
  background: #FFFFFF;
  box-shadow: 0px 0px 0px 3px #F5F6F7;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  min-width: 0; /* Prevent overflow issues */
  margin-right:60px;
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
`;

const UserRole = styled.span`
  font-size: 12px;
  color: #666;
`;

const Header = () => {
  return (
    <HeaderContainer>
  <LeftSection>
    <LogoContainer>
    <img
  src={logo}
  alt="Sri Chaitanya Logo"
  style={{ width: '150px', height: '40px' }}
/>
      
    </LogoContainer>

    <SearchContainer>
      <SearchIconStyled size={18} />
      <SearchBar type="text" placeholder="Ask for anything" />
    </SearchContainer>
  </LeftSection>

  <UserProfile>
    <NotificationIcon size={18} />
    <img src={Ellipse6} alt="User Profile" width="32" height="32" />
    <UserInfo>
      <UserId>HYD 256789</UserId>
      <UserRole>Cashier</UserRole>
      
    </UserInfo>
    <ChevronDown size={18} color="#666" />
  </UserProfile>
</HeaderContainer>

  );
};

export default Header;
