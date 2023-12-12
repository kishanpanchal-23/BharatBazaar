import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Superadmin from './pages/admin/Superadmin';
import Admin from './pages/admin/Admin';
import Editdata from './pages/admin/Editdata';
import Productsform from './pages/admin/Productsform';
import Header from './Componets/Header';
import Footer from './Componets/Footer';
import { useState } from 'react';
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
  
  const [selectedCategory,setSelectedCategory] = useState(null)
  const [searchproducts, setSearchproducts] = useState('');
  const [islogged, setIslogged] = useState(false);
  
  const handleSearchChange = (e) => {
     setSearchproducts(e.target.value);
  }

  const handleCategoryChange = (category) =>{
      setSelectedCategory(category);
  }

  const handleLogin = () => {
    setIslogged(!islogged)
  }
  

  return (
    <div className="App">
      <BrowserRouter>
      <Header islogged={islogged} handleSearchChange={handleSearchChange} 
       handleCategoryChange={handleCategoryChange} handleLogin={handleLogin} />
      <Routes>
        <Route path='/' element={ <Home searchproducts={searchproducts} selectedCategory={selectedCategory} /> }></Route>
        <Route path='/signup' index element={<Signup/>} ></Route> 
        <Route path='/login' element={ <Login handleLogin={handleLogin} /> }></Route>
        <Route path="/superadmin" element={<Superadmin/>} ></Route>  
        <Route path='/admin' element={ <Admin/> } ></Route>
        <Route path='/editdata/:id' element={<Editdata/>}></Route>
        <Route path='/productsform' element={ <Productsform/> } ></Route>
        <Route path='/product/:id' element={<Product/>} ></Route>
        <Route path='/cart' element={ <Cart/> } ></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
