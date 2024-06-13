import { Navbar } from 'widgets/Navbar';
import './styles/index.scss';
import BookCard from 'widgets/Card/ui/BookCard';
import NewspaperCard from 'widgets/Card/ui/NewspaperCard';
import MagazineCard from 'widgets/Card/ui/MagazineCard';
import { Filters } from 'widgets/Filters/ui/Filters';
import { Card, Grid, styled } from '@mui/material';

const FiltersCard = styled(Card)(({ theme }) => ({
    width: '350px',
    padding: '20px',
    alignSelf: 'start',
    marginRight: '20px',
    [theme.breakpoints.down('lg')]: {
        width: '500px',
    },
    [theme.breakpoints.down(1000)]: {
        display: 'none',
    },
}));

export const App = () => {
    return (
        <div className="app">
            <Navbar />

            <div style={{ display: 'flex', marginTop: '50px' }}>
                <Grid
                    justifyContent="center"
                    container
                    md={14}
                    sm={14}
                    lg={9}
                    xl={9}
                    spacing={6}
                >
                    <Grid item>
                        <BookCard />
                    </Grid>
                    <Grid item>
                        <BookCard />
                    </Grid>
                    <Grid item>
                        <BookCard />
                    </Grid>
                    <Grid item>
                        <BookCard />
                    </Grid>
                    <Grid item>
                        <BookCard />
                    </Grid>
                    <Grid item>
                        <BookCard />
                    </Grid>
                    <Grid item>
                        <BookCard />
                    </Grid>
                    <Grid item>
                        <BookCard />
                    </Grid>
                </Grid>
                <FiltersCard>
                    <Filters />
                </FiltersCard>
            </div>
        </div>
    );
};
