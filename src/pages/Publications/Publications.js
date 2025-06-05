import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 1000px;
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

const Filters = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2.5rem;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1.25rem;
  background-color: ${({ active, theme }) => 
    active ? theme.colors.accent : theme.colors.lightGray};
  color: ${({ active, theme }) => 
    active ? theme.colors.white : theme.colors.text};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme, active }) => 
      !active && theme.colors.border};
  }
`;

const PublicationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const PublicationItem = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-3px);
  }
  
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }
  
  .authors {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 500;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }
  
  .journal {
    font-style: italic;
    color: ${({ theme }) => theme.colors.lightText};
    margin-bottom: 0.75rem;
    display: block;
  }
  
  .details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    
    .year, .doi, .tags {
      font-size: 0.85rem;
      color: ${({ theme }) => theme.colors.lightText};
    }
    
    .tags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      
      span {
        background-color: ${({ theme }) => theme.colors.lightGray};
        padding: 0.25rem 0.75rem;
        border-radius: 50px;
        font-size: 0.75rem;
      }
    }
    
    .links {
      display: flex;
      gap: 1rem;
      
      a {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
        font-weight: 500;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;
        
        &:hover {
          color: ${({ theme }) => theme.colors.accent};
          text-decoration: underline;
        }
      }
    }
  }
`;

const Publications = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Publications' },
    { id: '2023', label: '2023' },
    { id: '2022', label: '2022' },
    { id: '2021', label: '2021' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'clinical', label: 'Clinical Studies' },
  ];
  
  const publications = [
    {
      id: 1,
      title: 'Novel Therapeutic Approaches for NF1-Associated Tumors',
      authors: 'Johnson S, Chen M, Rodriguez E, et al.',
      journal: 'Nature Genetics',
      year: 2023,
      doi: '10.1038/s41588-023-01445-2',
      tags: ['therapeutics', 'tumors', 'preclinical'],
      pdf: '#',
      link: '#',
    },
    {
      id: 2,
      title: 'Genetic Markers and Clinical Outcomes in NF1 Patients',
      authors: 'Kim D, Park J, Morgan A, Johnson S',
      journal: 'Journal of Medical Genetics',
      year: 2023,
      doi: '10.1136/jmg-2022-108753',
      tags: ['genetics', 'clinical', 'biomarkers'],
      pdf: '#',
      link: '#',
    },
    {
      id: 3,
      title: 'The Role of RAS-MAPK Pathway in NF1 Pathogenesis',
      authors: 'Chen M, Johnson S, Williams R, et al.',
      journal: 'Cell Reports Medicine',
      year: 2022,
      doi: '10.1016/j.xcrm.2022.100689',
      tags: ['molecular biology', 'pathways'],
      pdf: '#',
      link: '#',
    },
    {
      id: 4,
      title: 'Cognitive and Behavioral Aspects of NF1: A Comprehensive Review',
      authors: 'Rodriguez E, Johnson S, Thompson L',
      journal: 'Neuroscience & Biobehavioral Reviews',
      year: 2022,
      doi: '10.1016/j.neubiorev.2022.104813',
      tags: ['reviews', 'neuropsychology'],
      pdf: '#',
      link: '#',
    },
    {
      id: 5,
      title: 'Precision Medicine Approaches for NF1: Current Status and Future Directions',
      authors: 'Johnson S, Chen M, Davis K, et al.',
      journal: 'Annual Review of Genomics and Human Genetics',
      year: 2021,
      doi: '10.1146/annurev-genom-121321-093405',
      tags: ['reviews', 'precision medicine'],
      pdf: '#',
      link: '#',
    },
  ];

  const filteredPublications = activeFilter === 'all' 
    ? publications 
    : activeFilter === 'reviews' || activeFilter === 'clinical'
      ? publications.filter(pub => pub.tags.includes(activeFilter))
      : publications.filter(pub => pub.year === parseInt(activeFilter));

  return (
    <Section>
      <Container>
        <Title>Publications</Title>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', color: '#666' }}>
          Browse our latest research publications and contributions to the field of Neurofibromatosis Type 1 research.
        </p>
        
        <Filters>
          {filters.map(filter => (
            <FilterButton
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </FilterButton>
          ))}
        </Filters>
        
        <PublicationList>
          {filteredPublications.map((pub, index) => (
            <PublicationItem
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <h3>{pub.title}</h3>
              <span className="authors">{pub.authors}</span>
              <span className="journal">{pub.journal}</span>
              <p>{pub.abstract}</p>
              <div className="details">
                <span className="year">{pub.year}</span>
                <span className="doi">DOI: {pub.doi}</span>
                <div className="tags">
                  {pub.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="links">
                  <a href={pub.pdf} target="_blank" rel="noopener noreferrer">
                    <span>PDF</span>
                  </a>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    <span>View Online</span>
                  </a>
                </div>
              </div>
            </PublicationItem>
          ))}
        </PublicationList>
      </Container>
    </Section>
  );
};

export default Publications;
