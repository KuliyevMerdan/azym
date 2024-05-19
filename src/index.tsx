import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Footer, Navbar } from './shared/Layout/layout';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductList } from './pages/admin/Products/ProductList';
import { CreateProduct } from './pages/admin/Products/CreateProduct';
import { EditProduct } from './pages/admin/Products/EditProduct';
import { ProductDetails } from './pages/ProductDetails';
import { Register } from './pages/auth/Register';
import { Login } from './pages/auth/Login';
import { AppProvider } from './AppContext';
import { AdminRoute, AuthenticatedUserRoute } from './shared/authorization/authorization';
import { UserProfile } from './pages/UserProfile';
import { UserList } from './pages/admin/Users/UserList';
import { UserDetail } from './pages/admin/Users/UserDetails';
import { ProductProvider } from './ProductContext';
import getData from './shared/api/products';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

interface AppProps{}

const App: React.FC<AppProps> = () =>{
  function getStoredCredentials(){
    const data = localStorage.getItem('credentials')
    if(data){
      let json = JSON.parse(data)
      return json
    }
    return null
  }

  const [userCredentials, setUserCredentials] = useState<any>(getStoredCredentials())
  useEffect(()=>{
    let str = JSON.stringify(userCredentials)
    localStorage.setItem('credentials', str)
  },[userCredentials])

  function getStoredProducts(){
    const response = getData()
    // const data = localStorage.getItem('products')
    // if(response){
    //   let json = JSON.parse(data)
    //   return json
    // }
    return response
  }
  const [products, setProducts] = useState<any>(getStoredProducts())
  // useEffect(()=>{
  //   let str = JSON.stringify(products)
  //   // localStorage.setItem('products', str)
  // }, [products])

  return (
    <AppProvider value={{userCredentials, setUserCredentials}}>
      <ProductProvider value={{products, setProducts}}>
        <BrowserRouter>
          <Navbar />
            <Routes> 
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/products/:id' element={<ProductDetails />} />
              <Route path='/profile' element={<AuthenticatedUserRoute><UserProfile /></AuthenticatedUserRoute>} />

              <Route path='/auth/register' element={<Register />} />
              <Route path='/auth/login' element={<Login />} />

              <Route path='*' element={<NotFound />} />
              
              <Route path='/admin/products' element={<AdminRoute><ProductList /></AdminRoute>} />
              <Route path='/admin/products/create' element={<AdminRoute><CreateProduct /></AdminRoute>} />
              <Route path='/admin/products/edit/:id' element={<AdminRoute><EditProduct /></AdminRoute>} />

              <Route path='/admin/users' element={<AdminRoute><UserList /></AdminRoute>} />
              <Route path='/admin/users/details/:id' element={<AdminRoute><UserDetail /></AdminRoute>} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </ProductProvider>
    </AppProvider>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

