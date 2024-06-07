import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import Book from '../../../../public/content/books.jpg';

export default function BookCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 160 }} image={Book} />
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    Книга - Художественный жанр
                </Typography>
                <Typography variant="h5" component="div">
                    Цветы для Элджернона
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Даниель Киз
                </Typography>
                <Typography variant="body2">
                    Количество в наличии: 3
                    <br />
                    Номер книги: 223-456
                </Typography>
            </CardContent>
        </Card>
    );
}
