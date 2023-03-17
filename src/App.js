
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipment from './components/Shipment/Shipment';
import Update from './Update/Update';
import Home from './components/Home/Home';
import FTR from './components/Footer/FTR';
import NotFound from './components/NotFound/NotFound';

function App() {
  
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={
          <RequireAuth>
              <Orders></Orders>
          </RequireAuth>
        }></Route>
        <Route path='/inventory' element={
          <RequireAuth>
              <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/shipment' element={
          <RequireAuth>
            <Shipment></Shipment>
          </RequireAuth>
        } ></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>} > </Route>
        <Route path='/signup' element={<Signup></Signup>} ></Route>
        <Route path='/shipment/update/:id' element={ <Update></Update> } ></Route>
        <Route path='*' element={ <NotFound></NotFound> } ></Route>
      </Routes>
      <FTR></FTR>
    </div>
  );
}

export default App;
