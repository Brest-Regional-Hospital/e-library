import { Card, CardContent, Skeleton } from '@mui/material';
import React from 'react';

export const SkeletonCard = () => {
    return (
        <Card>
            <Skeleton
                sx={{ height: 160 }}
                animation="wave"
                variant="rectangular"
            />
            <CardContent>
                <Skeleton animation="wave" height={20} width="90%" />
                <Skeleton animation="wave" height={50} />
                <Skeleton
                    animation="wave"
                    height={30}
                    sx={{ mb: 1.5 }}
                    width="60%"
                />
                <Skeleton animation="wave" height={20} width="80%" />
                <Skeleton animation="wave" height={20} width="70%" />
            </CardContent>
        </Card>
    );
};
