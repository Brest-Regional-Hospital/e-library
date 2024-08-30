import { CatalogPage } from 'pages/CatalogPage';
import { Navbar } from 'features/Navbar';
import './styles/index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from 'pages/LoginPage';

export const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Navbar />
                <div className="page-container">
                    <Routes>
                        <Route path="/" element={<CatalogPage />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};
