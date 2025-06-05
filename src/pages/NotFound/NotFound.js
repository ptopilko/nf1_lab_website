import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  padding: 2rem;
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 1.5rem 0 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Message = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.75rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const NotFound = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ErrorCode>404</ErrorCode>
        <Title>Page Not Found</Title>
        <Message>
          Oops! The page you're looking for doesn't exist or has been moved. 
          Please check the URL or return to the homepage.
        </Message>
        <HomeButton to="/">Return to Homepage</HomeButton>
      </motion.div>
    </Container>
  );
};

export default NotFound;
