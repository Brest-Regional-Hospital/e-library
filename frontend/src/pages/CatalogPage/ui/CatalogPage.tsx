import { Box, Card, Grid, styled } from '@mui/material';
import { BottomDrawer } from 'widgets/BottomDrawer/ui/BottomDrawer';
import BookCard from 'widgets/Card/ui/BookCard';
import { Filters } from 'widgets/Filters/ui/Filters';
import { Header } from 'widgets/Header';

const FiltersCard = styled(Card)(({ theme }) => ({
    alignSelf: 'start',
    flexBasis: '30%',
    [theme.breakpoints.down(1000)]: {
        display: 'none',
    },
    [theme.breakpoints.down(1350)]: {
        flexBasis: '40%',
    },
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

export const CatalogPage = () => {
    return (
        <>
            <BottomDrawer />
            <CatalogContainer>
                <Header title="Весь каталог" clickable />

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
        </>
    );
};
