import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import Magazine from '../../../../public/content/magazines.jpg';

export default function MagazineCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
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
                    В мире наук
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Издан 21.13.2020
                </Typography>
                <Typography variant="body2">Количество в наличии: 3</Typography>
            </CardContent>
        </Card>
    );
}
