import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 3rem;
  text-align: center;
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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitions.default};
  text-align: center;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const MemberImage = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MemberInfo = styled.div`
  padding: 1.5rem 1rem;
  
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }
  
  p {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 500;
    margin-bottom: 0.75rem;
  }
  
  .bio {
    color: ${({ theme }) => theme.colors.lightText};
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.lightGray};
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${({ theme }) => theme.transitions.default};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.white};
      transform: translateY(-3px);
    }
  }
`;

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Principal Investigator',
      bio: 'Expert in neurofibromatosis research with over 15 years of experience in the field.',
      image: 'https://randomuser.me/api/portraits/women/45.jpg'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      role: 'Senior Research Scientist',
      bio: 'Specializes in molecular biology and genetic research related to NF1.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      role: 'Postdoctoral Fellow',
      bio: 'Focuses on therapeutic development and preclinical studies for NF1 treatments.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'PhD Candidate',
      bio: 'Investigating the role of specific genetic mutations in NF1 tumor development.',
      image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
      id: 5,
      name: 'Jennifer Park',
      role: 'Research Assistant',
      bio: 'Supports various research projects and manages laboratory operations.',
      image: 'https://randomuser.me/api/portraits/women/22.jpg'
    },
    {
      id: 6,
      name: 'Alex Morgan',
      role: 'Lab Technician',
      bio: 'Provides technical support for experiments and maintains laboratory equipment.',
      image: 'https://randomuser.me/api/portraits/men/45.jpg'
    }
  ];

  return (
    <Section>
      <Container>
        <Title>Our Team</Title>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', color: '#666' }}>
          Meet our dedicated team of researchers, scientists, and staff working together to advance NF1 research and improve patient outcomes.
        </p>
        
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MemberImage>
                <img src={member.image} alt={member.name} />
              </MemberImage>
              <MemberInfo>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className="bio">{member.bio}</div>
                <SocialLinks>
                  <a href="#" aria-label="Email">✉️</a>
                  <a href="#" aria-label="LinkedIn">🔗</a>
                  <a href="#" aria-label="Google Scholar">📚</a>
                </SocialLinks>
              </MemberInfo>
            </TeamMember>
          ))}
        </TeamGrid>
      </Container>
    </Section>
  );
};

export default Team;
