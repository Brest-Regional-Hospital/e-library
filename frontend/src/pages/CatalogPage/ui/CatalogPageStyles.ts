import { Box, styled } from '@mui/material';

export const CatalogContainer = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    columnGap: '60px',
    rowGap: '30px',

    [theme.breakpoints.down(1000)]: {
        gridTemplateColumns: '1fr',
        rowGap: '10px',
    },
}));

export const HeaderContainer = styled(Box)(({ theme }) => ({
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.breakpoints.down(1000)]: {
        marginTop: '30px',
    },
}));

export const PublicationsContainer = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '30px',

    [theme.breakpoints.down(1200)]: {
        gridTemplateColumns: '1fr 1fr',
    },

    [theme.breakpoints.down(600)]: {
        gridTemplateColumns: '1fr',
    },
}));

export const FiltersContainer = styled(Box)(({ theme }) => ({
    alignSelf: 'start',
    position: 'sticky',
    top: '8%',

    [theme.breakpoints.down(1000)]: {
        display: 'none',
    },
}));
