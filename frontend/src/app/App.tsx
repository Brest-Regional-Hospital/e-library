import { Navbar } from 'widgets/Navbar';
import './styles/index.scss';
import { CatalogPage } from 'pages/CatalogPage/ui/CatalogPage';

export const App = () => {
    return (
        <div className="app">
            <Navbar />
            <CatalogPage />
        </div>
    );
};
