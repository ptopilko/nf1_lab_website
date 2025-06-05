import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  max-width: 1200px;
  margin: 3rem auto;
  padding: 2rem;
  text-align: center;
  border: 2px dashed #ccc;
  
  img {
    max-width: 100%;
    height: auto;
    max-height: 500px;
    border: 2px solid #007bff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    display: block;
    margin: 0 auto;
  }
  
  .debug-info {
    margin-top: 1rem;
    color: #666;
    font-size: 0.9rem;
  }
`;

const Home = () => {
  // Debug: Log the image path
  const imagePath = '/images/frontpage.jpg';
  console.log('Image path:', imagePath);
  
  // Test if image exists
  const testImage = new Image();
  testImage.src = imagePath;
  testImage.onload = () => console.log('Image exists and loaded successfully');
  testImage.onerror = () => console.error('Failed to load image from:', testImage.src);
  
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
          <SectionTitle>Our Mission</SectionTitle>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: '1.8' }}>
            The NF1 Research Lab is committed to advancing our understanding of Neurofibromatosis Type 1 through innovative research, collaborative science, and the translation of discoveries into improved patient outcomes.
          </p>
          
          <ImageContainer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Debug Image Container</h3>
            <p className="debug-info">Trying to load image from: {imagePath}</p>
            <img 
              src={imagePath} 
              alt="NF1 Research Lab" 
              onLoad={(e) => {
                console.log('Image loaded successfully', e);
                console.log('Image dimensions:', e.target.naturalWidth, 'x', e.target.naturalHeight);
              }}
              onError={(e) => {
                console.error('Image failed to load', e);
                console.error('Image source:', e.target.src);
              }}
              style={{
                border: '3px solid #28a745',
                maxWidth: '100%',
                height: 'auto'
              }}
            />
            <p className="debug-info">Check browser console for loading status</p>
          </ImageContainer>
        </Container>
      </Section>

      <Section style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <SectionTitle>Our Research Focus</SectionTitle>
          <FeaturesGrid>
            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
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
