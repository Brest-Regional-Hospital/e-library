import { Navbar } from 'widgets/Navbar';
import './styles/index.scss';
import BookCard from 'widgets/Card/ui/BookCard';
import NewspaperCard from 'widgets/Card/ui/NewspaperCard';
import MagazineCard from 'widgets/Card/ui/MagazineCard';
import { Filters } from 'widgets/Filters/ui/Filters';
import { Box, Card, Grid, Typography, styled } from '@mui/material';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FiltersCard = styled(Card)(({ theme }) => ({
    padding: '20px',
    alignSelf: 'start',
    flexBasis: '30%',
    [theme.breakpoints.down(1000)]: {
        display: 'none',
    },
    [theme.breakpoints.down(1350)]: {
        flexBasis: '40%',
    },
}));

const PageTitleTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    fontSize: 28,
}));

const CatalogContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1450px',
    margin: `${theme.spacing(6)} auto 0 auto`,
    padding: '0 40px',
    [theme.breakpoints.down(900)]: {
        marginTop: theme.spacing(4),
    },
}));

const CatalogGridItem = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down(1000)]: {
        width: '100%',
    },

    [theme.breakpoints.between(700, 1000)]: {
        width: '47%',
    },
}));

const CatalogTitleIcon = styled(Typography)(({ theme }) => ({
    display: 'none',

    [theme.breakpoints.down(1000)]: {
        display: 'block',
        marginTop: '8px',
    },
}));

export const App = () => {
    return (
        <div className="app">
            <Navbar />
            <CatalogContainer>
                <div
                    role="button"
                    onClick={() => console.log(1)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        cursor: 'pointer',
                    }}
                >
                    <PageTitleTypography variant="h3">
                        Весь каталог
                    </PageTitleTypography>
                    <CatalogTitleIcon variant="body1">
                        <ArrowDownIcon color="primary" />
                    </CatalogTitleIcon>
                </div>

                <div
                    style={{
                        display: 'flex',
                        marginTop: '30px',
                    }}
                >
                    <Grid container md={14} sm={14} lg={14} xl={12} gap="40px">
                        <CatalogGridItem item>
                            <BookCard />
                        </CatalogGridItem>
                        <CatalogGridItem item>
                            <BookCard />
                        </CatalogGridItem>
                        <CatalogGridItem item>
                            <BookCard />
                        </CatalogGridItem>
                        <CatalogGridItem item>
                            <BookCard />
                        </CatalogGridItem>
                        <CatalogGridItem item>
                            <BookCard />
                        </CatalogGridItem>
                        <CatalogGridItem item>
                            <BookCard />
                        </CatalogGridItem>
                        <CatalogGridItem item>
                            <BookCard />
                        </CatalogGridItem>
                        <CatalogGridItem item>
                            <BookCard />
                        </CatalogGridItem>
                    </Grid>
                    <FiltersCard>
                        <Filters />
                    </FiltersCard>
                </div>
            </CatalogContainer>
        </div>
    );
};
