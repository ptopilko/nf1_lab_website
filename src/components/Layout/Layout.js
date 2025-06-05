import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Main = styled.main`
  min-height: calc(100vh - 200px);
  padding: 2rem 0;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
