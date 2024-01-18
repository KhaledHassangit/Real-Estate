import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import Popular from './Components/Popular/Popular';
import { Footer } from './Components/Footer/Footer';
import { Landing } from './Components/Header/Landing';
import Brands from './Components/Brands/Brands';
import { Value } from './Components/Value/Value';
import { Contact } from './Components/Contact/Contact';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <div>
      <NavBar/>
      <Landing/>
      <Brands/>
      <Popular/>
      <Value/>
      <Contact/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
