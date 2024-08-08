import {
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Tooltip,
    Typography,
} from '@mui/material';
import { Publication } from 'pages/CatalogPage';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useStore } from 'app/store';
import Newspaper from '../../../../public/content/newspapers.jpg';

interface NewspaperCardProps {
    publication: Publication;
}

export default function NewspaperCard({ publication }: NewspaperCardProps) {
    const { catalogStore } = useStore();

    const onDelete = () => {
        catalogStore.deletePublication(publication.id);
    };

    return (
        <Card sx={{ position: 'relative' }}>
            <div style={{ position: 'absolute', right: 0 }}>
                <Tooltip title="Редактировать">
                    <IconButton sx={{ padding: 0 }} color="primary">
                        <EditIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Удалить">
                    <IconButton color="primary" onClick={onDelete}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </div>
            <CardMedia sx={{ height: 160 }} image={Newspaper} />
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    Газета
                </Typography>
                <Typography variant="h5" component="div">
                    {publication.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Издана{' '}
                    {new Date(publication.publicationDate).toLocaleString(
                        'ru-ru',
                        {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                        },
                    )}
                </Typography>
                <Typography variant="body2">
                    Количество в наличии: {publication.amountAvailable}
                </Typography>
            </CardContent>
        </Card>
    );
}
