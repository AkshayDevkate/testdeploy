import './App.css';
import {BrowserRouter, Route, Link} from "react-router-dom"

// Components 
import Heather from './components/Heather.jsx'
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <>
   <BrowserRouter>
   <Heather></Heather>
   <Main></Main>
   <Footer></Footer>
   </BrowserRouter>
   </>
  );
}

export default App;
