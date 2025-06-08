import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Research from './pages/Research/Research';
import Team from './pages/Team/Team';
import Publications from './pages/Publications/Publications';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

function App() {
  console.log('App component rendered');
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Outlet /></Layout>}>
            <Route index element={<Home />} />
            <Route path="research" element={<Research />} />
            <Route path="team" element={<Team />} />
            <Route path="publications" element={<Publications />} />
            <Route path="news" element={<News />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
