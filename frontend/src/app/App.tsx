import { Navbar } from 'widgets/Navbar';
import './styles/index.scss';
import BookCard from 'widgets/Card/ui/BookCard';
import NewspaperCard from 'widgets/Card/ui/NewspaperCard';
import MagazineCard from 'widgets/Card/ui/MagazineCard';
import { Filters } from 'widgets/Filters/ui/Filters';
import { Card } from '@mui/material';

export const App = () => {
    return (
        <div className="app">
            <Navbar />
            <div
                style={{
                    width: '1500px',
                    margin: '50px auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <div>
                    <BookCard />
                    <NewspaperCard />
                    <MagazineCard />
                    <MagazineCard />
                    <MagazineCard />
                    <MagazineCard />
                    <MagazineCard />
                </div>
                <Card
                    style={{
                        width: '20%',
                        padding: '15px',
                        alignSelf: 'start',
                        position: 'sticky',
                        top: 50,
                    }}
                >
                    <Filters />
                </Card>
            </div>
        </div>
    );
};
