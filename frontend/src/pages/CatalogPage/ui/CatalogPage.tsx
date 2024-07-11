/* eslint-disable indent */
import { Typography, useMediaQuery } from '@mui/material';
import { useStore } from 'app/store';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { BottomDrawer } from 'shared/ui/BottomDrawer/BottomDrawer';
import { PageHeader } from 'shared/ui/PageHeader/PageHeader';
import { SkeletonCard } from 'shared/ui/SkeletonCard/SkeletonCard';
import { BookCard } from 'widgets/Card';
import MagazineCard from 'widgets/Card/ui/MagazineCard';
import NewspaperCard from 'widgets/Card/ui/NewspaperCard';
import { Filters } from 'widgets/Filters/ui/Filters';
import {
    mockPublications,
    PublicationsCategories,
} from '../lib/mockPublications/mockPublications';
import {
    CatalogContainer,
    FiltersContainer,
    HeaderContainer,
    PublicationsContainer,
} from './CatalogPageStyles';

export const CatalogPage = observer(() => {
    const { catalogStore } = useStore();
    const [isOpen, setIsOpen] = useState(false);
    const isHeaderClickable = useMediaQuery('(max-width:1000px)');

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    useEffect(() => {
        catalogStore.fetchPublications();
    }, []);

    return (
        <>
            <BottomDrawer isOpen={isOpen} open={open} close={close}>
                <Filters close={close} />
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
                    {catalogStore.isLoading &&
                        Array.from({ length: 9 }).map((_, index) => (
                            <SkeletonCard key={`skeleton-${index}`} />
                        ))}
                    {catalogStore.publications &&
                    catalogStore.allPublications.length > 0 ? (
                        Object.keys(catalogStore.publications).map((type) => {
                            const Component = {
                                books: BookCard,
                                magazines: MagazineCard,
                                newspapers: NewspaperCard,
                            }[type];

                            return catalogStore.publications[
                                type as PublicationsCategories
                            ].map((publication) => (
                                <Component
                                    key={publication.bookNumber}
                                    publication={publication}
                                />
                            ));
                        })
                    ) : (
                        <Typography
                            sx={{ fontSize: 16 }}
                            color="text.secondary"
                        >
                            Нет публикаций, удовлетворяющих ваши параметры
                            поиска!
                        </Typography>
                    )}
                </PublicationsContainer>
                <FiltersContainer>
                    <Filters />
                </FiltersContainer>
            </CatalogContainer>
        </>
    );
});
