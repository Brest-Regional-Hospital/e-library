import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Publication } from 'pages/CatalogPage';
import Newspaper from '../../../../public/content/newspapers.jpg';

interface NewspaperCardProps {
    publication: Publication;
}

export default function NewspaperCard({ publication }: NewspaperCardProps) {
    return (
        <Card>
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
