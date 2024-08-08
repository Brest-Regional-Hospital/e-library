/* eslint-disable indent */
import { Button, Typography, useMediaQuery } from '@mui/material';
import { useStore } from 'app/store';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { BottomDrawer } from 'shared/ui/BottomDrawer/BottomDrawer';
import { PageHeader } from 'shared/ui/PageHeader/PageHeader';
import { SkeletonCard } from 'shared/ui/SkeletonCard/SkeletonCard';
import { BookCard } from 'features/Card';
import MagazineCard from 'features/Card/ui/MagazineCard';
import NewspaperCard from 'features/Card/ui/NewspaperCard';
import { Filters } from 'features/Filters/ui/Filters';
import AddIcon from '@mui/icons-material/Add';
import { AddPublicationModal } from 'features/Modal/AddPublicationModal';
import {
    CatalogContainer,
    FiltersContainer,
    HeaderContainer,
    PublicationsContainer,
} from './CatalogPageStyles';

export const CatalogPage = observer(() => {
    const { catalogStore } = useStore();
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsOpenModal] = useState(false);
    const isHeaderClickable = useMediaQuery('(max-width:1000px)');

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    const openModal = () => setIsOpenModal(true);
    const closeModal = () => setIsOpenModal(false);

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
                        title="Каталог"
                        clickable={isHeaderClickable}
                        onClick={open}
                    />
                    <Button
                        onClick={openModal}
                        variant="contained"
                        endIcon={<AddIcon />}
                    >
                        Добавить
                    </Button>
                </HeaderContainer>

                <br />

                <PublicationsContainer>
                    {catalogStore.isLoading &&
                        Array.from({ length: 9 }).map((_, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <SkeletonCard key={`skeleton-${index}`} />
                        ))}
                    {catalogStore.publications &&
                    catalogStore.publications.length > 0 ? (
                        catalogStore.publications.map((publication) => {
                            if (publication.type === 'Книга') {
                                return <BookCard publication={publication} />;
                            }

                            if (publication.type === 'Журнал') {
                                return (
                                    <MagazineCard publication={publication} />
                                );
                            }

                            if (publication.type === 'Газета') {
                                return (
                                    <NewspaperCard publication={publication} />
                                );
                            }

                            return <BookCard publication={publication} />;
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

            <AddPublicationModal open={isModalOpen} handleClose={closeModal} />
        </>
    );
});
