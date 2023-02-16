import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import './App.css';
// import 'daisyui/dist/daisyui.css'
import Header from './components/Header';
import Home from "./components/pages/Home";


function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path='/home' element={<Home/>}/>
        </Routes>
        This is the main section
      </main>
     

    </Router>
    
  );
}

export default App;
