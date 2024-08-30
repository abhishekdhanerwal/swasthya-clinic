import Image from "next/image";

import { Rating } from "@mui/material"

import { ArrowCard } from "@/components/arrow-card";
import { SectionHeading } from "@/components/section-heading"
import { useFonts } from "@/hooks/useFonts";
import reviewsList from '@/contents/reviews.json';

import { Review } from "./review";
import css from "./index.module.css";

export const Testimonials = () => {
    const { montserrat } = useFonts();
    return (
        <section className={css.testimonials}>
            <SectionHeading title="See what our patients are saying" hideBorder />
            <div className={css.averageRating}>
                <label className={`${css.ratingLabel} ${montserrat.className}`}>AVERAGE RATING</label>
                <Rating name="read-only" className={css.starRating} value={4.6} precision={0.2} size="large" readOnly />
                <span className={css.ratings}>4.6</span>
            </div>
            <div className={css.reviewContainer}>
                <ArrowCard className={`${css.review} ${css.reviewRight}`} position="left">
                    <Review name={reviewsList[0].name} description={reviewsList[0].description} rating={reviewsList[0].rating} />
                </ArrowCard>
                <ArrowCard className={`${css.review} ${css.reviewRightBottom}`} position="left">
                    <Review name={reviewsList[1].name} description={reviewsList[1].description} rating={reviewsList[1].rating} />
                </ArrowCard>
                <ArrowCard className={`${css.review} ${css.reviewLeft}`} position="right">
                    <Review name={reviewsList[2].name} description={reviewsList[2].description} rating={reviewsList[2].rating} />
                </ArrowCard>
                <ArrowCard className={`${css.review} ${css.reviewLeftBottom}`} position="right">
                    <Review name={reviewsList[3].name} description={reviewsList[3].description} rating={reviewsList[3].rating} />
                </ArrowCard>
                <figure className={css.reivewImage}>
                    <Image src="/images/review.png" alt="a girl thinking about reviews or testimonials" fill objectFit="contain" />
                </figure>
            </div>
        </section>
    )
}