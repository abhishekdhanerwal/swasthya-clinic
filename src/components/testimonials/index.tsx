import Image from "next/image";

import { Rating } from "@mui/material"

import { ArrowCard } from "@/components/arrow-card";
import { SectionHeading } from "@/components/section-heading"
import { useFonts } from "@/hooks/useFonts";

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
                    <Review />
                </ArrowCard>
                <ArrowCard className={`${css.review} ${css.reviewRightBottom}`} position="left">
                    <Review />
                </ArrowCard>
                <ArrowCard className={`${css.review} ${css.reviewLeft}`} position="right">
                    <Review />
                </ArrowCard>
                <ArrowCard className={`${css.review} ${css.reviewLeftBottom}`} position="right">
                    <Review />
                </ArrowCard>
                <figure className={css.reivewImage}>
                    <Image src="/images/review.png" alt="a girl thinking about reviews or testimonials" fill objectFit="contain" />
                </figure>
            </div>
        </section>
    )
}