import Image from "next/image";

import { SectionHeading } from "@/components/section-heading"

import css from './index.module.css';
import { Stack, useMediaQuery } from "@mui/system";
import { useFonts } from "@/hooks/useFonts";
import { CountPaper } from "./count-paper";

export const KnowYourDoc = () => {
    const { roboto } = useFonts();
    const matchesSmallScreen = useMediaQuery('(max-width: 480px)');

    return (
        <section className={css.docSection}>
            <div className={css.docContainer}>
                <div className={css.imgContainer}>
                    <Image 
                        alt="know your doc" 
                        src="/images/sonia.jpg" 
                        objectFit="cover" 
                        className={css.myImg} 
                        fill
                    />
                </div>
                <div className={css.content}>
                    <SectionHeading title="Know Your Doctor" />
                    <p className={`${roboto.className}`}><span className={css.paraFocus}>Dr. Sonia Malik</span> is a senior obstetrician and gynecologist with over eight years of experience based in New Delhi. She completed her MBBS and MS training in high volume Govt. Hospitals like Lady Hardinge Medical College & Kalawati Hospital, Kasturba Hospital and RML Hospital. She is proficient in a wide range of diagnostic and therapeutic procedures. With a remarkable track record of over 50,000 normal deliveries and 20,000 cesarean sections, Dr. Malik is also highly experienced in other gynecological procedures. Her areas of special interest include cosmetic gynecology and adolescent health.</p>
                </div>
            </div>
            <div className={css.docInfoContainer}>
                <Stack spacing={2} style={matchesSmallScreen ? {width: '100%'} : {}}>
                    <Stack direction={matchesSmallScreen ? "column" : "row"} spacing={2}>
                        <CountPaper count={50} title="Award Win" />
                        <CountPaper count={1000000} title="Happy Patients" />
                    </Stack>
                    <Stack direction={matchesSmallScreen ? "column" : "row"} spacing={2}>
                        <CountPaper count={50000} title="Surgeries" />
                        <CountPaper count={15} title="Years of Experience" />
                    </Stack>
                </Stack>
                <div className={css.extraImgContainer}>
                    <Image alt="know your doc 2" src="/images/know-doc-2.jpg" className={css.docImage} objectFit="cover" fill />
                </div>
            </div>
        </section>
    )
}