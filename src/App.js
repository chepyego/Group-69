import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import './App.css';
import AboutWiseLeger from "./components/AboutWiseLeger";
import Consultants from "./components/Consultants";
import ContactUs from "./components/ContactUs";
// import 'daisyui/dist/daisyui.css'
import Footer from "./components/Footer";
import FormForProduct from "./components/FormForProduct";
import Header from './components/Header';
import HowWiseLegerHelp from "./components/HowWiseLegerHelp";
import Home from "./components/pages/Home";
import ProductsShow from "./components/ProductsShow";


function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Consultants/>}/>
          <Route path='/about' element={<AboutWiseLeger/>}/>
          <Route path='/features' element={<HowWiseLegerHelp/>}/>
          <Route path ='/form_for_product' element={<FormForProduct/>}/>
          <Route path='products_show' element={<ProductsShow/>}/>
          <Route path='/contact_us' element={<ContactUs/>}/>
        </Routes>
      </main>
     
      <Footer/>
    </Router>
    
  );
}

export default App;
