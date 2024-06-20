import { Box, Typography, styled } from '@mui/material';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TitleContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '5px',

    [theme.breakpoints.down(1000)]: {
        cursor: 'pointer',
    },
}));

const PageTitleTypography = styled(Typography)(() => ({
    fontWeight: 500,
    fontSize: 28,
}));

const TitleIcon = styled(Typography)(({ theme }) => ({
    display: 'none',

    [theme.breakpoints.down(1000)]: {
        display: 'block',
        marginTop: '8px',
    },
}));

interface HeaderProps {
    title: string;
    clickable?: boolean;
}

export const Header = (props: HeaderProps) => {
    const { title, clickable } = props;

    return (
        <TitleContainer>
            <PageTitleTypography variant="h3">{title}</PageTitleTypography>
            {clickable && (
                <TitleIcon variant="body1">
                    <ArrowDownIcon color="primary" />
                </TitleIcon>
            )}
        </TitleContainer>
    );
};
