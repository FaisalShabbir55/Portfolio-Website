import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './contexts/DataContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import SEO from './components/SEO';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './styles/index.css';

function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <Router basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
          <SEO />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;

