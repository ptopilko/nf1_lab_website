import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Nav = styled(({ isOpen, ...rest }) => <nav {...rest} />)`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => theme.transitions.default};
    padding: 2rem;
    z-index: 1001;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 4rem;
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  color: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.accent : theme.colors.white};
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 0;
  transition: ${({ theme }) => theme.transitions.default};
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ $isActive }) => ($isActive ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: ${({ theme }) => theme.transitions.default};
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1002;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const Overlay = styled(({ isOpen, ...rest }) => <div {...rest} />)`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/research', label: 'Research' },
    { path: '/team', label: 'Team' },
    { path: '/publications', label: 'Publications' },
    { path: '/news', label: 'News' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/" onClick={closeMenu}>
          NF1 Research Lab
        </Logo>
        
        <MobileMenuButton onClick={toggleMenu} aria-label="Toggle menu">
          <FaBars />
        </MobileMenuButton>
        
        <Nav isOpen={isMenuOpen}>
          <CloseButton onClick={closeMenu} />
          <NavList>
            {navItems.map((item) => (
              <NavItem key={item.path}>
                <NavLink
                  to={item.path}
                  $isActive={location.pathname === item.path}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </Nav>
        
        {isMenuOpen && <Overlay isOpen={isMenuOpen} onClick={closeMenu} />}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
