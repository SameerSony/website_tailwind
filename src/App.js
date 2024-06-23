import { BrowserRouter,Router,Route } from 'react-router-dom';



import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import HorizontalScroll from './Components/HorizontalScroll';
import Footer from './Components/Footer';
import ServicesSection from './Components/ServiceSection';
import TeamSection from './Components/TeamSectionHome';
import Clients from './Components/ClientsGrayBg';
import WhyChooseUs from './Components/WhyChooseUs';
import Home from './HomePage';
import About from './AboutPage';
import ServicesPage from './ServicesPage';
import ContactUs from './ContactUs';
function App() {
  return (
    <div>
      <ContactUs />
    </div>
  );
}

export default App;
