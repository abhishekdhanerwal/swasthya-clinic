import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";

import { supabase } from "@/utils/supabase";

import { Drawer, Rating, useMediaQuery } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import CloseIcon from '@mui/icons-material/Close';

import reviewsList from '@/contents/reviews.json';
import { PageHeading } from "@/components/page-heading";
import { ReviewCard } from "@/components/review-card";
import { ElementOfEvaluation } from "@/components/element-of-evaluation";
import { useFonts } from "@/hooks/useFonts";

import css from './index.module.css';

export type Review = {
    name: string;
    date: string;
    title?: string;
    description: string;
    source?: string;
    rating: number;
    id?: number;
    phoneNumber?: string;
    created_at?: string;
};
type ReviewList = Array<Review>;

export type Evaluation = {
    name: string;
    value: number;
    label: string;
}

interface Props {
    reviewsList: ReviewList;
    evaluation: Array<Evaluation>;
}

function timeAgo(timestamp: string) {
    const now = new Date().getTime();
    const reviewDate = new Date(timestamp).getTime() + (5.5 * 60 * 60 * 1000);
    const timeDifference = now - reviewDate;

    // Constants for time calculations
    const msPerSecond = 1000;
    const msPerMinute = msPerSecond * 60;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerWeek = msPerDay * 7;
    const msPerMonth = msPerDay * 30; // Approximation
    const msPerYear = msPerDay * 365; // Approximation

    // If the time difference is less than a minute, return "just now"
    if (timeDifference < msPerMinute) {
        return "just now";
    }

    // If the time difference is less than an hour, return the number of minutes
    if (timeDifference < msPerHour) {
        const minutes = Math.floor(timeDifference / msPerMinute);
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    }

    // If the time difference is less than a day, return the number of hours
    if (timeDifference < msPerDay) {
        const hours = Math.floor(timeDifference / msPerHour);
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    }

    // If the time difference is less than a week, return the number of days
    if (timeDifference < msPerWeek) {
        const days = Math.floor(timeDifference / msPerDay);
        return days === 1 ? "yesterday" : `${days} days ago`;
    }

    // If the time difference is less than a month, return the number of weeks
    if (timeDifference < msPerMonth) {
        const weeks = Math.floor(timeDifference / msPerWeek);
        return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    }

    // If the time difference is less than a year, return the number of months
    if (timeDifference < msPerYear) {
        const months = Math.floor(timeDifference / msPerMonth);
        return `${months} month${months > 1 ? "s" : ""} ago`;
    }

    // Otherwise, return the number of years
    const years = Math.floor(timeDifference / msPerYear);
    return `${years} year${years > 1 ? "s" : ""} ago`;
}

export default function Reviews({ reviewsList, evaluation }: Props) {
    const matchesSmallScreen = useMediaQuery('(max-width: 480px)');
    const { openSans } = useFonts();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [reviewsFromDb, setReviewsFromDb] = useState<ReviewList>([]);

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    }

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    }

    useEffect(() => {
        async function getData() {
            const { data, error } = await supabase
            .from("reviews")
            .select('*')
            .returns<ReviewList>();

            if (data?.length) {
                data.sort((a, b) => new Date(b.created_at ?? "").getTime() - new Date(a.created_at ?? "").getTime());
                const newData = data.map(item => {
                    if(!item.name.length) {
                        item.name = "Verified Patient";
                    }
                    if(item.created_at) {
                        item.date = timeAgo(item.created_at);
                    }
                    return item;
                });
                
                setReviewsFromDb(newData);
            }
        }
        getData();
    }, []);

    return (
        <>
            <PageHeading title="Patient Testimonials" />
            <div className={css.reviewContainer}>
                <section className={css.commentsSection}>
                    <div className={css.commentsHead}>
                        <Image className={css.imgDoctor} alt="doctor image" src="/images/doctor.png" width={matchesSmallScreen ? 60 : 70} height={matchesSmallScreen ? 60 : 70} />
                        <Image className={css.imgReport} alt="doctor image" src="/images/medical-report.png" width={matchesSmallScreen ? 60 : 70} height={matchesSmallScreen ? 60 : 70} />
                        <h1 className={`${openSans.className} ${css.commentsTitle}`}>4.65</h1>
                        <Rating name="read-only" className={css.commentsStar} value={4.6} precision={0.2} size={matchesSmallScreen ? "medium" : "large"} readOnly />
                        <div className={css.commentsSubInfo}>(1,234 Reviews)</div>
                    </div>
                    {reviewsFromDb.map((item, index) => <ReviewCard key={index} {...item} />)}
                    {reviewsList?.map((item, i) => <ReviewCard key={i} {...item} />)}
                </section>
                <section className={css.ratingSection}>
                    <ElementOfEvaluation evaluation={evaluation} />
                </section>
                <span className={css.drawerBtn} onClick={handleDrawerOpen}><ArrowCircleLeftOutlinedIcon /></span>
                <Drawer
                    anchor={'right'}
                    open={openDrawer}
                    onClose={handleDrawerClose}
                    classes={{root:css.rootDrawer, modal: css.rootDrawer, paperAnchorRight: css.drawer}}
                    elevation={0}
                    slotProps={{backdrop: {classes: {root: css.rootDrawer}}}}
                >   
                    {/* <CloseIcon onClick={handleDrawerClose} className={css.closeIcon} /> */}
                    <ElementOfEvaluation isMobileView evaluation={evaluation} />
                </Drawer>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps<{ reviewsList: ReviewList, evaluation: Array<Evaluation> }> = async (context) => {

    return {
        props: {
            reviewsList,
            evaluation: [
                {
                    name: 'Comfort and Respect',
                    value: 98,
                    label: 'Great'
                },
                {
                    name: 'Explanations',
                    value: 95,
                    label: 'Great'
                },
                {
                    name: 'Personalized Care',
                    value: 92,
                    label: 'Great'
                },
                // {
                //     name: 'Positive Outcomes',
                //     value: 90,
                //     label: 'Great'
                // },
                {
                    name: 'Skillful Procedures',
                    value: 82,
                    label: 'Good'
                }
            ]
        }
    }
}