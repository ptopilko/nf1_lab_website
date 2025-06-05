import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaTag, FaArrowRight } from 'react-icons/fa';

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

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const NewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const NewsItem = styled(motion.article)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    
    .read-more {
      color: ${({ theme }) => theme.colors.accent};
      
      svg {
        transform: translateX(3px);
      }
    }
  }
  
  .news-image {
    width: 100%;
    height: 250px;
    background-color: ${({ theme }) => theme.colors.lightGray};
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: ${({ theme }) => theme.transitions.default};
    }
    
    &:hover img {
      transform: scale(1.05);
    }
  }
  
  .news-content {
    padding: 1.5rem;
    
    .meta {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 1rem;
      font-size: 0.85rem;
      color: ${({ theme }) => theme.colors.lightText};
      
      span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        
        svg {
          color: ${({ theme }) => theme.colors.accent};
        }
      }
    }
    
    h3 {
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: 0.75rem;
      font-size: 1.5rem;
      line-height: 1.3;
    }
    
    p {
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: 1.25rem;
      line-height: 1.7;
    }
    
    .read-more {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
      text-decoration: none;
      transition: ${({ theme }) => theme.transitions.default};
      
      svg {
        transition: ${({ theme }) => theme.transitions.default};
      }
    }
  }
`;

const Sidebar = styled.aside`
  @media (max-width: 992px) {
    display: none;
  }
`;

const SidebarWidget = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.25rem;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.border};
    font-size: 1.25rem;
  }
`;

const CategoriesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 0.75rem;
    
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: ${({ theme }) => theme.colors.text};
      text-decoration: none;
      padding: 0.5rem 0;
      transition: ${({ theme }) => theme.transitions.default};
      
      &:hover {
        color: ${({ theme }) => theme.colors.accent};
        padding-left: 0.5rem;
      }
      
      span {
        background-color: ${({ theme }) => theme.colors.lightGray};
        padding: 0.15rem 0.5rem;
        border-radius: 50px;
        font-size: 0.75rem;
      }
    }
  }
`;

const RecentPosts = styled.div`
  .recent-post {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    
    &:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }
    
    .post-image {
      width: 80px;
      height: 80px;
      border-radius: 4px;
      overflow: hidden;
      flex-shrink: 0;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    .post-content {
      h4 {
        margin: 0 0 0.5rem;
        font-size: 0.95rem;
        line-height: 1.4;
        
        a {
          color: ${({ theme }) => theme.colors.primary};
          text-decoration: none;
          transition: ${({ theme }) => theme.transitions.default};
          
          &:hover {
            color: ${({ theme }) => theme.colors.accent};
          }
        }
      }
      
      .post-date {
        font-size: 0.8rem;
        color: ${({ theme }) => theme.colors.lightText};
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
`;

const News = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All News', count: 12 },
    { id: 'research', name: 'Research Updates', count: 5 },
    { id: 'awards', name: 'Awards & Grants', count: 3 },
    { id: 'events', name: 'Events', count: 2 },
    { id: 'publications', name: 'Publications', count: 7 },
    { id: 'announcements', name: 'Announcements', count: 4 },
  ];
  
  const recentPosts = [
    {
      id: 1,
      title: 'New Study on NF1 Treatment Shows Promising Results',
      date: 'May 15, 2023',
      image: 'https://via.placeholder.com/80x80',
    },
    {
      id: 2,
      title: 'Dr. Johnson Receives Prestigious Research Grant',
      date: 'April 28, 2023',
      image: 'https://via.placeholder.com/80x80',
    },
    {
      id: 3,
      title: 'Upcoming Webinar: Advances in NF1 Research',
      date: 'April 10, 2023',
      image: 'https://via.placeholder.com/80x80',
    },
  ];
  
  const newsItems = [
    {
      id: 1,
      title: 'Breakthrough in NF1 Research Published in Nature Genetics',
      excerpt: 'Our team has made significant progress in understanding the molecular mechanisms underlying NF1 development and progression...',
      date: 'June 1, 2023',
      author: 'Dr. Sarah Johnson',
      category: 'research',
      image: 'https://via.placeholder.com/800x500',
    },
    {
      id: 2,
      title: 'NF1 Lab Awarded $2.5M Grant for Innovative Research',
      excerpt: 'We are thrilled to announce that our lab has been awarded a major research grant to further our work on developing new therapies...',
      date: 'May 20, 2023',
      author: 'Dr. Michael Chen',
      category: 'awards',
      image: 'https://via.placeholder.com/800x500',
    },
    {
      id: 3,
      title: 'Annual NF1 Research Symposium 2023 - Save the Date',
      excerpt: 'Mark your calendars for our annual research symposium, bringing together leading experts in the field of NF1 research...',
      date: 'May 5, 2023',
      author: 'Dr. Emily Rodriguez',
      category: 'events',
      image: 'https://via.placeholder.com/800x500',
    },
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  return (
    <Section>
      <Container>
        <Title>News & Updates</Title>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', color: '#666' }}>
          Stay informed about the latest news, events, and breakthroughs from our NF1 research lab.
        </p>
        
        <NewsGrid>
          <NewsList>
            {filteredNews.map((item, index) => (
              <NewsItem
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="news-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="news-content">
                  <div className="meta">
                    <span><FaCalendarAlt /> {item.date}</span>
                    <span><FaUser /> {item.author}</span>
                    <span><FaTag /> {item.category}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <a href="#" className="read-more">
                    Read More <FaArrowRight />
                  </a>
                </div>
              </NewsItem>
            ))}
          </NewsList>
          
          <Sidebar>
            <SidebarWidget>
              <h3>Categories</h3>
              <CategoriesList>
                {categories.map(category => (
                  <li key={category.id}>
                    <a 
                      href="#" 
                      className={activeCategory === category.id ? 'active' : ''}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveCategory(category.id);
                      }}
                    >
                      {category.name}
                      <span>{category.count}</span>
                    </a>
                  </li>
                ))}
              </CategoriesList>
            </SidebarWidget>
            
            <SidebarWidget>
              <h3>Recent Posts</h3>
              <RecentPosts>
                {recentPosts.map(post => (
                  <div className="recent-post" key={post.id}>
                    <div className="post-image">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="post-content">
                      <h4>
                        <a href="#">{post.title}</a>
                      </h4>
                      <div className="post-date">
                        <FaCalendarAlt /> {post.date}
                      </div>
                    </div>
                  </div>
                ))}
              </RecentPosts>
            </SidebarWidget>
            
            <SidebarWidget>
              <h3>Subscribe</h3>
              <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
                Stay updated with our latest news and events by subscribing to our newsletter.
              </p>
              <div style={{ display: 'flex' }}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  style={{
                    flex: 1,
                    padding: '0.5rem 0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px 0 0 4px',
                    fontSize: '0.9rem',
                  }}
                />
                <button 
                  style={{
                    backgroundColor: '#2c3e50',
                    color: 'white',
                    border: 'none',
                    padding: '0 1rem',
                    borderRadius: '0 4px 4px 0',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#e74c3c'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#2c3e50'}
                >
                  Subscribe
                </button>
              </div>
            </SidebarWidget>
          </Sidebar>
        </NewsGrid>
      </Container>
    </Section>
  );
};

export default News;
