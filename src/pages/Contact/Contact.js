import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

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

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
  }
  
  p {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 2rem;
    line-height: 1.7;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  .icon {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    margin-right: 1.25rem;
    flex-shrink: 0;
  }
  
  .content {
    h3 {
      color: ${({ theme }) => theme.colors.primary};
      margin: 0 0 0.5rem;
      font-size: 1.1rem;
    }
    
    p, a {
      color: ${({ theme }) => theme.colors.lightText};
      margin: 0;
      text-decoration: none;
      transition: ${({ theme }) => theme.transitions.default};
      
      &:hover {
        color: ${({ theme }) => theme.colors.accent};
      }
    }
  }
`;

const ContactForm = styled(motion.form)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 2.5rem;
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
    
    label {
      display: block;
      margin-bottom: 0.5rem;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 500;
    }
    
    input, textarea, select {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 4px;
      font-family: inherit;
      font-size: 1rem;
      transition: ${({ theme }) => theme.transitions.default};
      
      &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.accent};
        box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
      }
    }
    
    textarea {
      min-height: 150px;
      resize: vertical;
    }
  }
  
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
      gap: 1.5rem 0;
    }
  }
  
  .form-actions {
    margin-top: 2rem;
  }
`;

const Button = styled(motion.button)`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightText};
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: #e8f5e9;
  border-left: 4px solid #4caf50;
  padding: 1.5rem;
  border-radius: 4px;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  .icon {
    color: #4caf50;
    font-size: 1.5rem;
  }
  
  p {
    margin: 0;
    color: #2e7d32;
    font-weight: 500;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <Section>
      <Container>
        <Title>Get In Touch</Title>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', color: '#666' }}>
          Have questions or want to learn more about our research? We'd love to hear from you.
        </p>
        
        <ContactWrapper>
          <ContactInfo>
            <h2>Contact Information</h2>
            <p>
              We're here to answer any questions you may have about our research, collaborations, 
              or any other inquiries. Reach out to us and we'll respond as soon as possible.
            </p>
            
            <InfoItem>
              <div className="icon">
                <FaMapMarkerAlt />
              </div>
              <div className="content">
                <h3>Our Location</h3>
                <p>123 Research Drive, City, State 12345, Country</p>
              </div>
            </InfoItem>
            
            <InfoItem>
              <div className="icon">
                <FaPhone />
              </div>
              <div className="content">
                <h3>Phone Number</h3>
                <p><a href="tel:+15551234567">+1 (555) 123-4567</a></p>
              </div>
            </InfoItem>
            
            <InfoItem>
              <div className="icon">
                <FaEnvelope />
              </div>
              <div className="content">
                <h3>Email Address</h3>
                <p><a href="mailto:info@nf1lab.edu">info@nf1lab.edu</a></p>
              </div>
            </InfoItem>
            
            <InfoItem>
              <div className="icon">
                <FaClock />
              </div>
              <div className="content">
                <h3>Working Hours</h3>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              </div>
            </InfoItem>
            
            <div style={{ marginTop: '2rem' }}>
              <h3>Follow Us</h3>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <a href="#" style={socialLinkStyle} aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" style={socialLinkStyle} aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" style={socialLinkStyle} aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" style={socialLinkStyle} aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </ContactInfo>
          
          <div>
            <ContactForm 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Send Us a Message</h2>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Research Collaboration">Research Collaboration</option>
                    <option value="Clinical Trials">Clinical Trials</option>
                    <option value="Media">Media</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <div className="form-actions">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <FaPaperPlane />}
                </Button>
              </div>
              
              {isSubmitted && (
                <SuccessMessage
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FaCheckCircle className="icon" />
                  <p>Your message has been sent successfully. We'll get back to you soon!</p>
                </SuccessMessage>
              )}
            </ContactForm>
            
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                <em>Fields marked with * are required</em>
              </p>
            </div>
          </div>
        </ContactWrapper>
      </Container>
    </Section>
  );
};

// Inline styles for social media icons
const socialLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#f4f4f4',
  color: '#2c3e50',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  textDecoration: 'none',
};

export default Contact;
