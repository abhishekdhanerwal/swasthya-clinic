import Image from "next/image";

import { SectionHeading } from "@/components/section-heading"

import css from './index.module.css';
import { Stack, useMediaQuery } from "@mui/system";
import { useFonts } from "@/hooks/useFonts";
import { CountPaper } from "./count-paper";
import { Paper } from "@mui/material";

export const KnowYourDoc = () => {
    const { zillaSlab } = useFonts();
    const matchesSmallScreen = useMediaQuery('(max-width: 820px)');
    const mobileScreen = useMediaQuery('(max-width: 480px)');

    const AboutDoc = () => (
        <>
            <SectionHeading title="Know Your Doctor" hideBorder={matchesSmallScreen && !mobileScreen ? true : false} />
            <p className={`${zillaSlab.className}`}><span className={css.paraFocus}>Dr. Sonia Malik</span> is a senior obstetrician and gynecologist with over eight years of experience based in New Delhi. She completed her MBBS and MS training in high volume Govt. Hospitals like Lady Hardinge Medical College & Kalawati Hospital, Kasturba Hospital and RML Hospital. She is proficient in a wide range of diagnostic and therapeutic procedures. With a remarkable track record of over 50,000 normal deliveries and 20,000 cesarean sections, Dr. Malik is also highly experienced in other gynecological procedures. Her areas of special interest include cosmetic gynecology and adolescent health.</p>
        </>
    )

    return (
        <section className={css.docSection}>
            <div className={css.book}>
                <div className={css.bookPageOne}>
                    <div className={css.docImgContainer}>
                        <Image
                            alt="know your doctor"
                            src="/images/sonia.jpg"
                            objectFit="cover"
                            fill
                        />
                    </div>
                </div>
                <div className={css.bookPageTwo}>
                    <div className={css.content}>
                        {mobileScreen ? <Paper elevation={3} classes={{root: css.aboutPaper}}><AboutDoc /></Paper> : <AboutDoc />}
                    </div>
                </div>
            </div>
            <div className={css.docInfoContainer}>
                <Stack direction={mobileScreen ? "column" : "row"} style={mobileScreen ? { width: '100%', flexWrap: 'wrap', justifyContent: 'center', gap: 18 } : {flexWrap: 'wrap', justifyContent: 'center', gap: 24}}>
                        <CountPaper count={50} title="Award Win" />
                        <CountPaper count={1000000} title="Happy Patients" />
                        <CountPaper count={50000} title="Surgeries" />
                        <CountPaper count={15} title="Years of Experience" />
                </Stack>
            </div>
        </section>
    )
}