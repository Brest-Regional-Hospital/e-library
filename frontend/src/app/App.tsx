import { CatalogPage } from 'pages/CatalogPage';
import { Navbar } from 'features/Navbar';
import './styles/index.scss';

export const App = () => {
    return (
        <div className="app">
            <Navbar />
            <div className="page-container">
                <CatalogPage />
            </div>
        </div>
    );
};
