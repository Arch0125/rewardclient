import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import Gateway from './pages/Gateway';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <div  className=' flex flex-row justify-end w-screen absolute z-10'>
    <Navbar/>
    </div>
    <Gateway/>
    </>
    );
}

export default App;
