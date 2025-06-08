import React from 'react';

// This is a test component to verify image loading
const ImageTest = () => {
  return (
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ color: '#333', marginBottom: '2rem' }}>Image Loading Test</h1>
      
      {/* Test 1: Direct image from public folder */}
      <div style={{ marginBottom: '2rem' }}>
        <h3>Test 1: Direct Image Path</h3>
        <div style={{ color: '#666', margin: '0.5rem 0' }}>Path: /frontpage.jpg</div>
        <img 
          src="/frontpage.jpg" 
          alt="Direct Path Test"
          style={{
            maxWidth: '100%',
            maxHeight: '300px',
            border: '2px solid #007bff',
            borderRadius: '8px',
            margin: '1rem 0'
          }}
          onLoad={() => console.log('Direct path image loaded')}
          onError={(e) => console.error('Direct path image failed to load', e)}
        />
      </div>
      
      {/* Test 2: Using require with correct path */}
      <div style={{ marginBottom: '2rem' }}>
        <h3>Test 2: Using require() with process.env.PUBLIC_URL</h3>
        <div style={{ color: '#666', margin: '0.5rem 0' }}>Path: {`${process.env.PUBLIC_URL}/frontpage.jpg`}</div>
        <img 
          src={`${process.env.PUBLIC_URL}/frontpage.jpg`} 
          alt="Public URL Test"
          style={{
            maxWidth: '100%',
            maxHeight: '300px',
            border: '2px solid #28a745',
            borderRadius: '8px',
            margin: '1rem 0'
          }}
          onLoad={() => console.log('Public URL image loaded')}
          onError={(e) => console.error('Public URL image failed to load', e)}
        />
      </div>
      
      <p style={{ marginTop: '2rem', color: '#666' }}>
        Check browser console for loading status
      </p>
    </div>
  );
};

export default ImageTest;
