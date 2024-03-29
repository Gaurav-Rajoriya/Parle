import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element= {<Home/>} />
      
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
