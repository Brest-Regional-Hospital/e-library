import {
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Tooltip,
    Typography,
} from '@mui/material';
import { Publication } from 'pages/CatalogPage/lib/mockPublications/mockPublications';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useStore } from 'app/store';
import { EditPublicationModal } from 'features/Modal/EditPublicationModal';
import { useState } from 'react';
import Book from '../../../../public/content/books.jpg';

interface BookCardProps {
    publication: Publication;
}

export const BookCard = (props: BookCardProps) => {
    const { publication } = props;
    const { bookNumber, title, type, genre, author, amountAvailable } =
        publication;
    const { catalogStore } = useStore();
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    const onDelete = () => {
        catalogStore.deletePublication(publication.id);
    };

    return (
        <>
            <Card sx={{ position: 'relative' }}>
                <div style={{ position: 'absolute', right: 0 }}>
                    <Tooltip title="Редактировать">
                        <IconButton
                            sx={{ padding: 0 }}
                            color="primary"
                            onClick={open}
                        >
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Удалить">
                        <IconButton color="primary" onClick={onDelete}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </div>

                <CardMedia sx={{ height: 160 }} image={Book} />
                <CardContent>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        {type} - {genre}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {author}
                    </Typography>
                    <Typography variant="body2">
                        Количество в наличии: {amountAvailable}
                        <br />
                        Номер книги: {bookNumber}
                    </Typography>
                </CardContent>
            </Card>
            <EditPublicationModal
                open={isOpen}
                handleClose={close}
                publication={publication}
            />
        </>
    );
};
