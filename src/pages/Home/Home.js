import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/images/frontpage.jpg') no-repeat center center/cover;
  z-index: -1;
`;

const HeroSection = styled.section`
  color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  padding: 6rem 0;
  background: rgba(0, 0, 0, 0.3);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1.5rem;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  line-height: 1.6;
  font-weight: 300;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
`;

const Button = styled(motion.a)`
  display: inline-block;
  background-color: #ffa167;
  color: ${({ theme }) => theme.colors.white};
  padding: 0.75rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  margin: 0.5rem;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: transparent;
    border-color: #ffa167;
    color: #ffa167;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  
  &:hover {
    background-color: #ffa167;
    border-color: #ffa167;
    color: white;
  }
`;


const Home = () => {
  
  return (
    <>
      <PageBackground />
      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Advancing Research in Neurofibromatosis Type 1
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dedicated to understanding the molecular mechanisms of NF1 and developing novel therapeutic strategies
          </HeroSubtitle>
          <Button
            as={motion.a}
            href="/research"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Research
          </Button>
          <SecondaryButton
            as={motion.a}
            href="/team"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Meet the Team
          </SecondaryButton>
        </Container>
      </HeroSection>


    </>
  );
};

export default Home;
