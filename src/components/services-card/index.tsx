import { useRouter } from 'next/router';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import { Service } from '@/pages/services';

import css from './index.module.css';

export const ServicesCard = ({ image, imgAlt, name, description, id }: Service) => {
    const router = useRouter();

    return (
        <Card className={css.card} onClick={() => router.push(`services/${id}`)}>
            <CardActionArea className={css.cardAction}>
                <CardMedia
                    component="img"
                    className={css.image}
                    image={`/images/${image}`}
                    alt={imgAlt}
                />
                <CardContent className={css.cardContent}>
                    <Typography className={css.cardHeading} gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant='button' className={css.btn}>
                        read more
                        <ArrowRightAltIcon />
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}