import { Roboto } from 'next/font/google';

import { Avatar, Rating } from "@mui/material"

import css from './index.module.css';
import { useCallback, useEffect, useState } from 'react';

const robotoBold = Roboto({ weight: "700", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const nameC = "Verified User";
const descriptionC = "123456 8901234 67890 234Doctor first explained everything thoroughly and then only started the procedure. Even during the recovery period I get calls inquiring about any discomfort or any other issue.";

const maxLength = {
    sm: 80,
    mid: 100,
    lg: 200
}

interface Props {
    name?: string;
    description?: string;
}

export const Review = ({ name, description }: Props) => {
    name = nameC;
    description = descriptionC;

    console.log(descriptionC.length)

    const [truncatedDescription, setTruncatedDescription] = useState(description);

    const getMaxTextLength = useCallback(() => {
        if (typeof window !== 'undefined') {
            console.log(window?.innerWidth)
            if(window?.innerWidth < 480) return maxLength.sm;
            if(window?.innerWidth < 768) return maxLength.mid;
        }
        return maxLength.lg;
    }, []);

    const getDescriptionLength = useCallback(() => {
        if (description) {
            const maxLength = getMaxTextLength();
            console.log(maxLength)
                const truncatedText = description.length > maxLength ? description.substring(0, maxLength) + "..." : description;
                setTruncatedDescription(truncatedText);
        }
    }, []);

    useEffect(() => {
        getDescriptionLength();
    }, []);

    console.log(truncatedDescription.length)

    return (
        <>
            <div className={css.heading}>
                <Avatar className={css.avatar} alt="Remy Sharp" src="/images/review.png" />
                <div className={css.userDetails}>
                    <h4 className={css.name} style={robotoBold.style}>{name}</h4>
                    <Rating className={css.rating} name="read-only" value={4.6} precision={0.2} size="small" readOnly />
                </div>
            </div>
            <p className={css.description} style={roboto.style}>{truncatedDescription}</p>
        </>
    )
}