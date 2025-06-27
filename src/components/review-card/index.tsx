import Image from "next/image";

import { Avatar, Rating, useMediaQuery } from "@mui/material"
import GoogleIcon from '@mui/icons-material/Google';

import { Review } from "@/pages/reviews";
import { useFonts } from "@/hooks/useFonts";

import css from './index.module.css';

export const ReviewCard = ({ date, description, name, rating, source, db, img, text, timeAgo }: Review) => {
    const matchesSmallScreen = useMediaQuery('(max-width: 480px)');
    const { openSans, roboto, montserrat } = useFonts();
    return (
        <div className={css.card}>
            <div className={css.heading}>
                <Avatar src={img ?? ""} />
                <div className={css.userDetails}>
                    <span className={openSans.className}>{name}</span>
                    <span className={`${roboto.className} ${css.date}`}>({timeAgo ?? date})</span>
                </div>
                <Rating className={css.rating} size={matchesSmallScreen ? "small" : "medium"} name="read-only" readOnly value={rating} />
            </div>
            <p className={`${css.description} ${roboto.className}}`}>{text ?? description}</p>
            {source ? <div className={`${css.reviewSource} ${montserrat.className}`} style={{color: source === "google" ? '#4285F4' : '#272f8a'}}>
                {source === "google" ? <>
                <GoogleIcon style={{color: '#4285F4'}} />
                Google
                </> : <>
                <Image alt="practo icon" src="/images/practo.png" width={24} height={24} />
                Practo
                </>}
                
            </div> : null}
        </div>
    )
}