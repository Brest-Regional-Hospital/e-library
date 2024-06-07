import { Navbar } from 'widgets/Navbar';
import './styles/index.scss';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar';

export const App = () => {
    return (
        <div className="app">
            <Navbar />
            <div className="content-page">
                <Sidebar />
            </div>
        </div>
    );
};
