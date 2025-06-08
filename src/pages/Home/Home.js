import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  background: linear-gradient(rgba(44, 62, 80, 0.8), rgba(52, 152, 219, 0.8)), 
              url('/images/frontpage.jpg') no-repeat center center/cover;
  color: ${({ theme }) => theme.colors.white};
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 2rem 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 70vh;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 1rem;
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

const ImageContainer = styled(motion.div)`
  width: 100%;
  max-width: 1000px;
  margin: 4rem auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  }
`;

const Home = () => {
  // Debug: Log the image path
  const imagePath = '/images/frontpage.jpg';
  
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

      <Section>
        <Container>
          <SectionTitle>Welcome to the NF1 Research Lab</SectionTitle>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: '1.8' }}>
            The NF1 Research Lab is committed to advancing our understanding of Neurofibromatosis Type 1 through innovative research, collaborative science, and the translation of discoveries into improved patient outcomes.
          </p>
          
          <ImageContainer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={imagePath} 
              alt="NF1 Research Lab - Advancing the understanding of Neurofibromatosis Type 1" 
            />
          </ImageContainer>
          
          <FeaturesGrid>
            <FeatureCard
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <IconWrapper>
                <i className="fas fa-dna"></i>
              </IconWrapper>
              <h3>Molecular Mechanisms</h3>
              <p>Investigating the genetic and molecular pathways involved in NF1 pathogenesis to identify novel therapeutic targets.</p>
            </FeatureCard>
            
            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <IconWrapper>
                <i className="fas fa-pills"></i>
              </IconWrapper>
              <h3>Drug Discovery</h3>
              <p>Developing and testing new compounds and repurposed drugs to treat NF1-related symptoms and complications.</p>
            </FeatureCard>
            
            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <IconWrapper>
                <i className="fas fa-microscope"></i>
              </IconWrapper>
              <h3>Translational Research</h3>
              <p>Bridging the gap between laboratory discoveries and clinical applications to improve patient care.</p>
            </FeatureCard>
          </FeaturesGrid>
        </Container>
      </Section>
    </>
  );
};

export default Home;
