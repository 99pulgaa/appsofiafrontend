import './App.css';
import Revision from './components/Revision';
import Header from './components/Header';
import AcercaDe from './components/AcercaDe';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Menu from './components/Menu';
import Reporte from './components/Reporte';
import Registro from './components/Registro';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  


  return (
    <div>
      <BrowserRouter>
       <Header/>
       <div className='container'>
        <Routes>
          <Route exact path='/' element={<Inicio />}></Route>
          <Route path='/Menu' element={<Menu />}></Route>
          <Route path='/Reporte' element={<Reporte />}></Route>
          <Route path='/Inicio' element={<Inicio />}></Route>
          <Route path='/Registro' element={<Registro />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Revision' element={<Revision />}></Route>
          <Route path='/AcercaDe' element={<AcercaDe />}></Route>
        </Routes>
       </div>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
