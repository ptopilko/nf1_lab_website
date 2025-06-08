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
  console.log('Publications component loaded');
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Publications' },
    { id: '2023', label: '2023' },
    { id: '2022', label: '2022' },
    { id: '2020', label: '2020' },
    { id: '2019', label: '2019' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'neurofibromas', label: 'Neurofibromas' },
  ];
  
  const publications = [
    {
      id: 1,
      title: 'A Call for Discovery and Therapeutic Development for Cutaneous Neurofibromas',
      authors: 'Topilko P, et al.',
      journal: 'Journal of Investigative Dermatology',
      year: 2023,
      doi: '10.1016/j.jid.2023.05.001',
      tags: ['neurofibromas', 'therapeutics', 'review'],
      pdf: 'https://www.researchgate.net/publication/371778780_A_Call_for_Discovery_and_Therapeutic_Development_for_Cutaneous_Neurofibromas',
      link: 'https://www.jidonline.org/article/S0022-202X(23)00223-5/fulltext',
    },
    {
      id: 2,
      title: 'Myelinating Schwann cells and Netrin-1 control intra-nervous vascularization of the developing mouse sciatic nerve',
      authors: 'Topilko P, et al.',
      journal: 'Development',
      year: 2022,
      doi: '10.1242/dev.199513',
      tags: ['schwann cells', 'nerve development', 'vascularization'],
      pdf: 'https://www.researchgate.net/publication/357787585_Myelinating_Schwann_cells_and_Netrin-1_control_intra-nervous_vascularization_of_the_developing_mouse_sciatic_nerve',
      link: 'https://journals.biologists.com/dev/article/149/2/dev199513/273902',
    },
    {
      id: 3,
      title: 'Mapping the Fine-Scale Organization and Plasticity of the Brain Vasculature',
      authors: 'Topilko P, et al.',
      journal: 'Cell',
      year: 2020,
      doi: '10.1016/j.cell.2020.01.028',
      tags: ['brain vasculature', 'imaging', 'plasticity'],
      pdf: 'https://www.researchgate.net/publication/339249812_Mapping_the_Fine-Scale_Organization_and_Plasticity_of_the_Brain_Vasculature',
      link: 'https://www.cell.com/cell/fulltext/S0092-8674(20)30050-5',
    },
    {
      id: 4,
      title: 'Developing uniform datasets for tissue-based studies of cutaneous neurofibromas',
      authors: 'Topilko P, et al.',
      journal: 'Journal of Investigative Dermatology',
      year: 2019,
      doi: '10.1016/j.jid.2019.07.009',
      tags: ['neurofibromas', 'datasets', 'tissue studies'],
      pdf: 'https://www.researchgate.net/publication/335536192_LB1084_Developing_uniform_datasets_for_tissue_based_studies_of_cutaneous_neurofibromas',
      link: 'https://www.jidonline.org/article/S0022-202X(19)31726-3/fulltext',
    },
    {
      id: 5,
      title: 'Blood vessels guide Schwann cell migration in the adult demyelinated CNS through Eph/ephrin signaling',
      authors: 'Topilko P, et al.',
      journal: 'Acta Neuropathologica',
      year: 2019,
      doi: '10.1007/s00401-019-02019-7',
      tags: ['schwann cells', 'demyelination', 'CNS repair'],
      pdf: 'https://www.researchgate.net/publication/332566439_Blood_vessels_guide_Schwann_cell_migration_in_the_adult_demyelinated_CNS_through_Ephephrin_signaling',
      link: 'https://link.springer.com/article/10.1007/s00401-019-02019-7',
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
