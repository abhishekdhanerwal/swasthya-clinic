import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";

import { supabase } from "@/utils/supabase";

import { Drawer, Rating, useMediaQuery } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

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
    db?: boolean;
    img?: string;
    text?: string;
    timeAgo?: string;
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
                setReviewsFromDb(data);
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
                    {reviewsFromDb.map((item, index) => <ReviewCard key={index} db {...item} />)}
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