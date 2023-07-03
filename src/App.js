import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import ServiceCard from './components/ServiceCard';
import Carousel from './components/Carousel';
import Badges from './components/Badges';
import Header from './components/HeaderNew';
import Text from './components/Text';
import Blogs from './components/Blogs';

function App() {
  return (
   <>
   <Header/>
   <ServiceCard/>
   <About/>
   <Text/>
   <Badges/>
   <Carousel/>
   <Blogs/>
   <Footer/>
   </>
  );
}

export default App;
