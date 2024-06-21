import { Box, Card, styled } from '@mui/material';

export const FiltersCard = styled(Card)(() => ({
    padding: '20px',
}));

export const FiltersContainer = styled(Box)(({ theme }) => ({
    display: 'grid',
    flexDirection: 'column',
    gap: '15px',

    [theme.breakpoints.down(1000)]: {
        gridTemplateColumns: '1fr 1fr',
    },

    [theme.breakpoints.down(600)]: {
        gridTemplateColumns: '1fr',
    },
}));
