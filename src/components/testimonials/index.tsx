import { Avatar, Rating } from "@mui/material"
import { SectionHeading } from "../section-heading"

import { Montserrat } from "next/font/google";

import css from "./index.module.css";
import Image from "next/image";

import { ArrowCard } from "../arrow-card";
import { Review } from "./review";

const montserrat = Montserrat({ subsets: ["latin"] });

export const Testimonials = () => {
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
                    <Image src="/images/review.png" alt="a girl thinking" fill objectFit="contain" />
                </figure>
            </div>
        </section>
    )
}