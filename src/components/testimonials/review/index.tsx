
import { useCallback, useEffect, useState } from 'react';

import { Avatar, Rating } from "@mui/material"

import { useFonts } from "@/hooks/useFonts";

import css from './index.module.css';

const maxLength = {
    sm: 80,
    mid: 100,
    lg: 200
}

interface Props {
    name: string;
    description: string;
    rating: number
}

export const Review = ({ name, description, rating }: Props) => {
    const [truncatedDescription, setTruncatedDescription] = useState(description);

    const { roboto, robotoBold } = useFonts();

    const getMaxTextLength = useCallback(() => {
        if (typeof window !== 'undefined') {
            if (window?.innerWidth < 480) return maxLength.sm;
            if (window?.innerWidth < 821) return maxLength.mid;
        }
        return maxLength.lg;
    }, []);

    const getDescriptionLength = useCallback(() => {
        if (description) {
            const maxLength = getMaxTextLength();
            const truncatedText = description.length > maxLength ? description.substring(0, maxLength) + "..." : description;
            setTruncatedDescription(truncatedText);
        }
    }, [description, getMaxTextLength]);

    useEffect(() => {
        getDescriptionLength();
    }, [getDescriptionLength]);

    return (
        <>
            <div className={css.heading}>
                <Avatar className={css.avatar} alt="review user image" />
                <div className={css.userDetails}>
                    <h3 className={css.name} style={robotoBold.style}>{name}</h3>
                    <Rating className={css.rating} name="read-only" value={rating} size="small" readOnly />
                </div>
            </div>
            <p className={css.description} style={roboto.style}>{truncatedDescription}</p>
        </>
    )
}