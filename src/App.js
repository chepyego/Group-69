import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import './App.css';
// import 'daisyui/dist/daisyui.css'
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Header/>
      <main>
        This is the main section
      </main>
     

    </Router>
    
  );
}

export default App;
