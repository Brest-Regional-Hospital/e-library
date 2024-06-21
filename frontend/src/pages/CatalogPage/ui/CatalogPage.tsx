import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { BottomDrawer } from 'shared/ui/BottomDrawer/BottomDrawer';
import { PageHeader } from 'shared/ui/PageHeader/PageHeader';
import { BookCard } from 'widgets/Card';
import { Filters } from 'widgets/Filters/ui/Filters';
import { mockPublications } from '../lib/mockPublications/mockPublications';
import {
    CatalogContainer,
    FiltersContainer,
    HeaderContainer,
    PublicationsContainer,
} from './CatalogPageStyles';

export const CatalogPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isHeaderClickable = useMediaQuery('(max-width:1000px)');

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return (
        <>
            <BottomDrawer isOpen={isOpen} open={open} close={close}>
                <Filters />
            </BottomDrawer>
            <CatalogContainer>
                <HeaderContainer>
                    <PageHeader
                        title="Весь каталог"
                        clickable={isHeaderClickable}
                        onClick={open}
                    />
                </HeaderContainer>

                <PublicationsContainer>
                    {mockPublications.map((publication) => (
                        <BookCard
                            key={publication.bookNumber}
                            publication={publication}
                        />
                    ))}
                </PublicationsContainer>
                <FiltersContainer>
                    <Filters />
                </FiltersContainer>
            </CatalogContainer>
        </>
    );
};
