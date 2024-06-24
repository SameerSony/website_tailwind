import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';



import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import HorizontalScroll from './Components/HorizontalScroll';
import Footer from './Components/Footer';
import ServicesSection from './Components/ServiceSection';
import TeamSection from './Components/TeamSectionHome';
import Clients from './Components/ClientsGrayBg';
import WhyChooseUs from './Components/WhyChooseUs';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';
import ContactUs from './ContactUs';
import PortfolioPage from './PortfolioPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
