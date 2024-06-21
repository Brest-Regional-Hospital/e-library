import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { MockPublication } from 'pages/CatalogPage/lib/mockPublications/mockPublications';
import Book from '../../../../public/content/books.jpg';

interface BookCardProps {
    publication: MockPublication;
}

export const BookCard = (props: BookCardProps) => {
    const { publication } = props;
    const { bookNumber, title, category, genre, author, amountAvailable } =
        publication;

    return (
        <Card>
            <CardMedia sx={{ height: 160 }} image={Book} />
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {category} - {genre}
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
    );
};
