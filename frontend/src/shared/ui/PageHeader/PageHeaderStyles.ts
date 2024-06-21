import { Box, Typography, styled } from '@mui/material';

export const TitleContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '5px',

    [theme.breakpoints.down(1000)]: {
        cursor: 'pointer',
    },
}));

export const PageTitleTypography = styled(Typography)(() => ({
    fontWeight: 500,
    fontSize: 28,
}));

export const TitleIcon = styled(Typography)(({ theme }) => ({
    display: 'none',

    [theme.breakpoints.down(1000)]: {
        display: 'block',
        marginTop: '8px',
    },
}));
