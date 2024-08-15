import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FavoriteIcon from '@mui/icons-material/Favorite';

import css from './index.module.css';
import { useState } from 'react';

interface Props {
    label: string;
    icon: any;
    flipped?: boolean
}

const Front = ({ label, icon, flipped }: Props) => {
    return (
        <CardContent className={`${css.cardContent} ${flipped ? "flipped-front" : "front"}`}>
            {icon}
            <label>{label}</label>
        </CardContent>
    )
}

const Back = ({flipped}: {flipped: boolean}) => {
    return (
        <CardContent className={`${css.cardContent} ${flipped ? "flipped-back" : "back"}`}>
            Back of the card
        </CardContent>
    )
}

export const SpecialityCard = ({ label, icon }: Props) => {

    const [flipped, setFlipped] = useState(false);

    const toggleFlip = () => setFlipped((flipped) => !flipped);

    return (
        <Card className={`${css.card}`} sx={{ minWidth: 175 }} onMouseEnter={toggleFlip} onMouseLeave={toggleFlip} >
            <Front icon={icon} label={label} flipped={flipped} />
            <Back flipped={flipped} />
        </Card>
    )
}