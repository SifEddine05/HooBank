import NavBar from './pages /navBar';
import Robot from './pages /robot';
import Busniess from './pages /busniess';
import Paypal from './pages /paypal'
import Statistic from './pages /statistic'
import Avis from './pages /avis'
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
  </div> 

  ) ;
  
}

export default App;
