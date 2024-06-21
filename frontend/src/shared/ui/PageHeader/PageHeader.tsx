import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
    PageTitleTypography,
    TitleContainer,
    TitleIcon,
} from './PageHeaderStyles';

interface HeaderProps {
    title: string;
    clickable?: boolean;
    onClick?: () => void;
}

export const PageHeader = (props: HeaderProps) => {
    const { title, clickable, onClick } = props;

    return (
        <TitleContainer onClick={clickable ? onClick : undefined}>
            <PageTitleTypography variant="h3">{title}</PageTitleTypography>
            {clickable && (
                <TitleIcon variant="body1">
                    <ArrowDownIcon color="primary" />
                </TitleIcon>
            )}
        </TitleContainer>
    );
};
