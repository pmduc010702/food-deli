import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import PlaceOrder from './pages/place-order/PlaceOrder';
import Footer from './components/footer/Footer';
import LoginForm from './components/login-form/LoginForm';

const App = () => {

    const [showLogin, setShowLogin] = useState(false)

    return (
        <div className='container'>
        {showLogin ? <LoginForm setShowLogin={setShowLogin} /> : null} 
            <div className='app'>
                <Navbar setShowLogin={setShowLogin} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/order' element={<PlaceOrder />} />
                </Routes>
                <Footer />
            </div>
        </div>
    )
}

export default App