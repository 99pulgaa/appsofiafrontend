import logo from './logo.svg';
import './App.css';
import ListClientesComponents from './components/ListClientesComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import InicioComponent from './components/InicioComponent';
import LoginComponent from './components/LoginComponent';
import MenuComponent from './components/MenuComponent';
import RegistroComponent from './components/RegistroComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddClienteComponent } from './components/AddClienteComponent';

function App() {
  


  return (
    <div>
      <BrowserRouter>
       <HeaderComponent/>
       <div className='container'>
        <Routes>
          <Route exact path='/' element={<InicioComponent />}></Route>
          <Route path='/MenuComponent' element={<MenuComponent />}></Route>
          <Route path='/InicioComponent' element={<InicioComponent />}></Route>
          <Route path='/RegistroComponent' element={<RegistroComponent />}></Route>
          <Route path='/LoginComponent' element={<LoginComponent />}></Route>
          <Route path='/listaClientes' element={<ListClientesComponents />}></Route>
          <Route path='/clientes' element={<ListClientesComponents />}></Route>
          <Route path='/add-cliente' element={<AddClienteComponent />}></Route>
          <Route path='/update-cliente/:id' element={<AddClienteComponent />}></Route>
        </Routes>
       </div>
       <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
