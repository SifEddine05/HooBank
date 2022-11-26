import NavBar from './Components/navBar';
import Robot from './Components/robot';
import Busniess from './Components/busniess';
import Paypal from './Components/paypal'
import Statistic from './Components/statistic'
import Avis from './Components/avis'
import Footer from './Components/footer';
import './index.css';

function App() {
  return (
  <div className=" bg-[#00040F] w-full h-full" >
    < NavBar />
    <Robot />
    <Busniess />
    <Paypal />
    <Statistic />
    <Avis />
    <Footer />
  </div> 

  ) ;
  
}

export default App;
