import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import HorizontalScroll from './Components/HorizontalScroll';
import Footer from './Components/Footer';
import ServicesSection from './Components/ServiceSection';
import TeamSection from './Components/TeamSectionHome';
import Clients from './Components/ClientsGrayBg';
import WhyChooseUs from './Components/WhyChooseUs';

function Home() {
  return (
    <div>
      <Header />
      <ServicesSection />
      <Clients />
      
      <TeamSection />
      <WhyChooseUs />
      <Footer />
     
    </div>
  );
}

export default Home;
