import Image from "next/image";
import { useRouter } from "next/router";

import { Button, Paper } from "@mui/material";
import { styled, useMediaQuery } from "@mui/system";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import SendIcon from '@mui/icons-material/Send';

import { useFonts } from "@/hooks/useFonts";

import css from './index.module.css';

const BootstrapButton = styled(Button)({
    padding: '6px 2px',
    border: '1px solid',
    width: 180,
    backgroundColor: '#d9aee5',
    borderColor: '#866ec5',
    borderRadius: '50px',
    color: '#6328b5',
    boxShadow: 'none',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 32,
    '&:hover': {
        backgroundColor: '#866ec5',
        color: '#fff',
        boxShadow: 'none',
    },
    ['@media (max-width: 480px)']: {
        marginTop: 12,
        fontSize: 10,
        padding: '3px 2px',
        width: 140,
    }
});

const Content = () => {
    const { exo2, roboto } = useFonts();
    const router = useRouter();
    const matchesSmallScreen = useMediaQuery('(max-width: 480px)');

    const goToServices = () => {
        router.push('/services');
    }
    return (<div className={css.bannerOneContent}>
        <div className={`${exo2.className} ${css.bannerOneText}`}>
            <h1>Comprehensive Gynecological Care</h1>
            <h1>tailored to you</h1>
        </div>
        <div className={`${css.bannerTwoHelperText} ${roboto.className}`}>
            <h4>Personalized care, just for you.</h4>
            <h4>Gynecological health, always new.</h4>
        </div>
        <div className={`${css.bannerOneIconsGroup} ${roboto.className}`}>
            <div className={css.bannerOneIcon}>
                <HealthAndSafetyIcon />
                <span>Health</span>
            </div>
            <div className={css.bannerOneIcon}>
                <MedicalInformationIcon />
                <span>Happiness</span>
            </div>
            <div className={css.bannerOneIcon}>
                <MonitorHeartIcon />
                <span>Harmony</span>
            </div>
        </div>
        <BootstrapButton variant="contained" endIcon={<SendIcon style={matchesSmallScreen ? {width: 14, height: 14} : {}} />} onClick={goToServices}>
            Our Services
        </BootstrapButton>
    </div>)
}

export function BannerOne() {
    const matchesSmallScreen = useMediaQuery('(max-width: 480px)');

    return (
        <div className={css.bannerOneContainer}>
            <div className={css.bannerOneImgContainer}>
                <Image
                    alt="gynae check image"
                    src="/images/bg/bg2.jpg"
                    objectFit="cover"
                    className={css.bannerOneImg}
                    fill
                />
            </div>
            {matchesSmallScreen ?
                <Paper className={css.bannerPaper} elevation={1}>
                    <Content />
                </Paper> 
            : <Content />}
        </div>
    )
}