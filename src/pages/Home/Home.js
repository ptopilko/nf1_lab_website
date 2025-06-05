import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const frontpageImage = `${process.env.PUBLIC_URL}/images/frontpage.jpg`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
  color: ${({ theme }) => theme.colors.white};
  padding: 6rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.25rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto 2.5rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const Button = styled(motion.a)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.accent};
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
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.white};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Section = styled.section`
  padding: 5rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.25rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.accent};
    margin: 1rem auto 0;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  text-align: center;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
  
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin: 1.5rem 0 1rem;
  }
  
  p {
    color: ${({ theme }) => theme.colors.lightText};
    line-height: 1.6;
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const FrontpageImage = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  height: 500px;
  background-image: url(${frontpageImage});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin: 3rem auto;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 300px;
  }
`;

const Home = () => {
  return (
    <>
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
            Dedicated to understanding the molecular mechanisms of NF1 and developing innovative treatments to improve the lives of patients worldwide.
          </HeroSubtitle>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Button href="/research" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Our Research
            </Button>
            <SecondaryButton href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Contact Us
            </SecondaryButton>
          </motion.div>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Our Focus Areas</SectionTitle>
          <FeaturesGrid>
            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <IconWrapper>🧬</IconWrapper>
              <h3>Molecular Mechanisms</h3>
              <p>Investigating the genetic and molecular basis of NF1 to identify new therapeutic targets.</p>
            </FeatureCard>
            
            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <IconWrapper>💊</IconWrapper>
              <h3>Drug Development</h3>
              <p>Developing and testing novel treatments to improve outcomes for NF1 patients.</p>
            </FeatureCard>
            
            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <IconWrapper>👥</IconWrapper>
              <h3>Patient Care</h3>
              <p>Providing comprehensive care and support for individuals and families affected by NF1.</p>
            </FeatureCard>
          </FeaturesGrid>
        </Container>
      </Section>

      <Section style={{ padding: '0', marginTop: '4rem' }}>
        <FrontpageImage 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </Section>
    </>
  );
};

export default Home;
