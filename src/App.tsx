import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';
import PageHeroWidget from './components/PageHeroWidget';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import AboutFounder from './pages/AboutFounder';
import Sitemap from './pages/Sitemap';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CityPage from './pages/CityPage';

function App() {
  return (
    <div className="min-h-screen bg-off-white">
      <ScrollIndicator />
      <Header />
      <main>
        <PageHeroWidget />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:caseId" element={<CaseStudyDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-founder" element={<AboutFounder />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/city/:cityName" element={<CityPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

