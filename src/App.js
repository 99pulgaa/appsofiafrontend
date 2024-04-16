import './App.css';
import Revision from './components/Revision';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import InicioComponent from './components/InicioComponent';
import LoginComponent from './components/LoginComponent';
import MenuComponent from './components/MenuComponent';
import ReporteComponent from './components/ReporteComponent';
import RegistroComponent from './components/RegistroComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  


  return (
    <div>
      <BrowserRouter>
       <HeaderComponent/>
       <div className='container'>
        <Routes>
          <Route exact path='/' element={<InicioComponent />}></Route>
          <Route path='/MenuComponent' element={<MenuComponent />}></Route>
          <Route path='/ReporteComponent' element={<ReporteComponent />}></Route>
          <Route path='/InicioComponent' element={<InicioComponent />}></Route>
          <Route path='/RegistroComponent' element={<RegistroComponent />}></Route>
          <Route path='/LoginComponent' element={<LoginComponent />}></Route>
          <Route path='/Revision' element={<Revision />}></Route>
        </Routes>
       </div>
       <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
