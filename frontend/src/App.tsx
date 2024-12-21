import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThirdwebProvider } from '@thirdweb-dev/react';
import './App.css';
import Header from './components/header'
import Dashboard from './pages/dashboard';
import MainPage from './pages/mainPage';
import ContextProvider from './context';
import { arbitrum_sepolia } from './blockchain/thirdweb-networks';

const App = () => {
    return (
        <ThirdwebProvider activeChain={arbitrum_sepolia}>
            <ContextProvider>
                <Router>
                    <Header />
                    <Routes>
                        <Route path='/contract-builder' element={<MainPage />} />
                        <Route path='/' element={<Dashboard />} />
                    </Routes>
                </Router>
            </ContextProvider>
        </ThirdwebProvider>
    )
}

export default App;