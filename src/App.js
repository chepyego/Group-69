import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import './App.css';
// import 'daisyui/dist/daisyui.css'
import Footer from "./components/Footer";
import Header from './components/Header';
import Home from "./components/pages/Home";
import ProductsShow from "./components/ProductsShow";


function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<ProductsShow/>}/>
        </Routes>
      </main>
     
      <Footer/>
    </Router>
    
  );
}

export default App;
