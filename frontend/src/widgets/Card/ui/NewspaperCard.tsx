import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import Newspaper from '../../../../public/content/newspapers.jpg';

export default function NewspaperCard() {
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
                    Вечерний Минск
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Издана 30.10.2018
                </Typography>
                <Typography variant="body2">Количество в наличии: 3</Typography>
            </CardContent>
        </Card>
    );
}
