import { PageHeading } from "@/components/page-heading";

import css from './index.module.css';
import Image from "next/image";
import { useFonts } from "@/hooks/useFonts";
import { styled, useMediaQuery } from "@mui/system";
import { LinearProgress, Slider, linearProgressClasses } from "@mui/material";
import { ReviewRatingProgress } from "@/components/review-rating-progress";
import { ThemeColors } from "@/constants/colors";

const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#fff',
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: ThemeColors.orange,
    },
    ['@media (max-width: 480px)']: {
        height: 8
    }
}));
interface InfoProps {
    count: string;
    label: string;
}

const INFO_CONTENT = [{ count: '20,000', label: 'Cesarean sections' }, { count: '50,000', label: 'Normal deliveries' }];

const EVALUATION = [
    {
        name: 'Comfort and Respect',
        value: 98,
    },
    {
        name: 'Explanations',
        value: 95,
    },
    {
        name: 'Personalized Care',
        value: 92,
    },
    {
        name: 'Skillful Procedures',
        value: 82,
    }
];

const Info = ({ count, label }: InfoProps) => {
    const { roboto, openSans } = useFonts();
    return (
        <div className={css.info}>
            <span className={openSans.className}>{count} +</span>
            <span className={roboto.className}>{label}</span>
        </div>
    )
}

const About = () => {
    const { roboto, openSans } = useFonts();
    const matchesSmallScreen = useMediaQuery('(max-width: 480px)');

    return (
        <section className={css.aboutSection}>
            <PageHeading title="About Me" />
            <div className={css.aboutContainer}>
                <div className={css.summaryContainer}>
                    <div className={css.summaryChild}>
                        <h1 className={openSans.className}>Experience</h1>
                        <ul className={roboto.className}>
                            <li>Lady Hardinge Hospital</li>
                            <li>Kasturba Hospital</li>
                            <li>RML Hospital</li>
                        </ul>
                    </div>
                    <div className={css.summaryChild}>
                        <div className={css.docImgContainer}>
                            <Image
                                alt="know your doc"
                                src="/images/sonia.jpg"
                                objectFit="cover"
                                className={css.docImg}
                                fill
                            />
                        </div>
                    </div>
                    <div className={css.summaryChild}>
                        <h1 className={openSans.className}>Degrees</h1>
                        <ul className={roboto.className}>
                            <li>MBBS - Lady Hardinge Medical College</li>
                            <li>MS - Kalawati Hospital</li>
                        </ul>
                    </div>
                </div>
                <div className={css.infoContainer}>
                    {INFO_CONTENT.map(item => <Info {...item} />)}
                </div>
                <div className={css.ratingInfoContainer}>
                        <Image
                            alt="about image"
                            src="/images/about-3.png"
                            width={matchesSmallScreen ? 130 : 200}
                            height={matchesSmallScreen ? 250 : 350}
                        />
                    <div className={css.ratingInfo}>
                        <p className={roboto.className}>These ratings represent the percentage of patients who reported feeling satisfied with the indicated aspect of their care. We are proud to offer a high level of patient satisfaction and are committed to providing the best possible care.</p>
                        <div className={css.ratingContainer}>
                            {EVALUATION.map(item => (
                                <div key={item.name} className={css.progress}>
                                        <span className={roboto.className}>{item.name}</span>
                                        <span className={roboto.className}>{item.value}%</span>
                                        <BorderLinearProgress variant="determinate" value={item.value} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={css.description}>
                    <p className={roboto.className}>Dr. Sonia Malik is a senior obstetrician and gynecologist with over eight years of experience based in New Delhi. She completed her MBBS and MS training in high volume Govt. Hospitals like Lady Hardinge Medical College & Kalawati Hospital, Kasturba Hospital and RML Hospital. She is proficient in a wide range of diagnostic and therapeutic procedures. With a remarkable track record of over 50,000 normal deliveries and 20,000 cesarean sections, Dr. Malik is also highly experienced in other gynecological procedures. Her areas of special interest include cosmetic gynecology and adolescent health.</p>
                </div>
            </div>
        </section>
    )
}

export default About;