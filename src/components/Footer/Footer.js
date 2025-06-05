import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 3rem 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
  }
`;

const FooterLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;

const FooterText = styled.p`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: 1.6;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.lightGray};
  
  svg {
    margin-right: 0.75rem;
    margin-top: 0.25rem;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.75rem;
  
  a {
    color: ${({ theme }) => theme.colors.lightGray};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.default};
    display: inline-block;
    
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      transform: translateX(5px);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(255, 255, 255, 0.1);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 0.875rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>NF1 Research Lab</FooterLogo>
          <FooterText>
            Advancing research and treatment for Neurofibromatosis Type 1 through innovative science and compassionate care.
          </FooterText>
          <SocialLinks>
            <SocialLink href="#" aria-label="Twitter">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="#" aria-label="GitHub">
              <FaGithub />
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLinks>
            <FooterLink><Link to="/">Home</Link></FooterLink>
            <FooterLink><Link to="/research">Research</Link></FooterLink>
            <FooterLink><Link to="/team">Our Team</Link></FooterLink>
            <FooterLink><Link to="/publications">Publications</Link></FooterLink>
            <FooterLink><Link to="/news">News & Events</Link></FooterLink>
            <FooterLink><Link to="/contact">Contact Us</Link></FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Contact Info</h3>
          <ContactInfo>
            <FaMapMarkerAlt />
            <div>123 Research Drive<br />City, State 12345<br />Country</div>
          </ContactInfo>
          <ContactInfo>
            <FaEnvelope />
            <div>info@nf1lab.edu</div>
          </ContactInfo>
          <ContactInfo>
            <FaPhone />
            <div>+1 (555) 123-4567</div>
          </ContactInfo>
        </FooterSection>
      </FooterContent>
      
      <FooterContent>
        <Copyright>
          &copy; {currentYear} NF1 Research Lab. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
