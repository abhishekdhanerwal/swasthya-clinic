import Image from "next/image";

import { Avatar, Rating } from "@mui/material"
import GoogleIcon from '@mui/icons-material/Google';

import { Review } from "@/pages/reviews";
import { useFonts } from "@/hooks/useFonts";

import css from './index.module.css';

export const ReviewCard = ({ date, description, name, rating, source }: Review) => {
    const { openSans, roboto, montserrat } = useFonts();
    return (
        <div className={css.card}>
            <div className={css.heading}>
                <Avatar />
                <div className={css.userDetails}>
                    <span className={openSans.className}>{name}</span>
                    <span className={`${roboto.className} ${css.date}`}>({date})</span>
                </div>
                <Rating className={css.rating} name="read-only" readOnly value={rating} />
            </div>
            <p className={`${css.description} ${roboto.className}}`}>{description}</p>
            <div className={`${css.reviewSource} ${montserrat.className}`} style={{color: source === "google" ? '#4285F4' : '#272f8a'}}>
                {source === "google" ? <>
                <GoogleIcon style={{color: '#4285F4'}} />
                Google Reviews
                </> : <>
                <Image alt="practo icon" src="/images/practo.png" width={24} height={24} />
                Practo Reviews
                </>}
                
            </div>
        </div>
    )
}