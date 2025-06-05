import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const ResearchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ResearchCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const ResearchImage = styled.div`
  height: 200px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const ResearchContent = styled.div`
  padding: 1.5rem;
  
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.75rem;
  }
  
  p {
    color: ${({ theme }) => theme.colors.lightText};
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const Research = () => {
  const researchAreas = [
    {
      id: 1,
      title: 'Genetic Research',
      description: 'Investigating the genetic mutations and pathways involved in NF1 development and progression.',
      icon: '🧬'
    },
    {
      id: 2,
      title: 'Therapeutic Development',
      description: 'Developing targeted therapies to treat NF1-related tumors and other manifestations.',
      icon: '💊'
    },
    {
      id: 3,
      title: 'Clinical Trials',
      description: 'Conducting clinical trials to evaluate new treatments for NF1 patients.',
      icon: '📊'
    },
    {
      id: 4,
      title: 'Biomarker Discovery',
      description: 'Identifying biomarkers for early detection and monitoring of NF1 progression.',
      icon: '🔍'
    },
    {
      id: 5,
      title: 'Neurocognitive Studies',
      description: 'Understanding and addressing the cognitive and behavioral aspects of NF1.',
      icon: '🧠'
    },
    {
      id: 6,
      title: 'Patient Outcomes',
      description: 'Research focused on improving quality of life and long-term outcomes for NF1 patients.',
      icon: '❤️'
    }
  ];

  return (
    <Section>
      <Container>
        <Title>Our Research</Title>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', color: '#666' }}>
          Our lab is at the forefront of NF1 research, working to understand the underlying mechanisms of the disease and develop effective treatments. Explore our research areas below.
        </p>
        
        <ResearchGrid>
          {researchAreas.map((area, index) => (
            <ResearchCard
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ResearchImage>
                <span role="img" aria-label={area.title} style={{ fontSize: '4rem' }}>
                  {area.icon}
                </span>
              </ResearchImage>
              <ResearchContent>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </ResearchContent>
            </ResearchCard>
          ))}
        </ResearchGrid>
      </Container>
    </Section>
  );
};

export default Research;
