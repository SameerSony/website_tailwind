import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import HorizontalScroll from './Components/HorizontalScroll';
import Footer from './Components/Footer';
import ServicesSection from './Components/ServiceSection';

function App() {
  return (
    <div>
      <Header />
      <ServicesSection />
      <HorizontalScroll />
      <Footer />
     
    </div>
  );
}

export default App;
