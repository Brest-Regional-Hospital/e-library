import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Publication } from 'pages/CatalogPage';
import Magazine from '../../../../public/content/magazines.jpg';

interface MagazineCardProps {
    publication: Publication;
}

export default function MagazineCard({ publication }: MagazineCardProps) {
    return (
        <Card>
            <CardMedia sx={{ height: 160 }} image={Magazine} />
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    Журнал
                </Typography>
                <Typography variant="h5" component="div">
                    {publication.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Издан{' '}
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
