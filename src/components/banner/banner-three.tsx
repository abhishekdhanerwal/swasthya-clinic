import Image from "next/image";
import { useRouter } from "next/router";

import { Avatar, Button, Paper } from "@mui/material";
import { styled, useMediaQuery } from "@mui/system";

import { useFonts } from "@/hooks/useFonts";

import css from './index.module.css';

const BootstrapButton = styled(Button)({
    border: '1px solid',
    textTransform: 'none',
    width: 100,
    height: 30,
    backgroundColor: '#d4e2dc',
    borderColor: '#d4e2dc',
    color: '#36454F',
    boxShadow: 'none',
    '&:hover': {
        backgroundColor: '#36454F',
        borderColor: '#36454F',
        color: '#fff',
        boxShadow: 'none',
    },
    ['@media (max-width: 480px)']: {
        marginTop: 12,
        fontSize: 10,
        padding: '3px 2px',
        width: 140,
        marginRight: 'auto',
        marginLeft: 'auto'
    }
});

const Content = () => {
    const matchesSmallScreen = useMediaQuery('(max-width: 480px)');

    const { unlock, roboto } = useFonts();
    const router = useRouter();

    const goToAboutUs = () => {
        router.push('/about');
    }

    return (
        <div className={css.bannerThreeContent}>
            <div className={`${unlock.className} ${css.bannerOneText}`}>
                <h1>Comprehensive care,</h1>
                <h1>personalized for you</h1>
            </div>
            <div className={`${css.bannerThreeHelperText} ${roboto.className}`}>
                <h2>- by Dr. Sonia Malik</h2>
            </div>
            {matchesSmallScreen ?
                <>
                    <div className={css.bannerThreeIconsGroup}>
                        <Avatar alt="a pregnant lady" src="/images/gif/one.gif" />
                        <Avatar alt="a new born baby" src="/images/gif/two.gif" />
                        <Avatar alt="a healthy family" src="/images/gif/three.gif" />
                        <Avatar alt="stethoscope" src="/images/gif/four.gif" />
                    </div>
                    <BootstrapButton size="small" onClick={goToAboutUs}>About Us</BootstrapButton>
                </>
                : <Paper className={css.bannerThreeActionBar}>
                    <Avatar alt="a pregnant lady" src="/images/gif/one.gif" />
                    <Avatar alt="a new born baby" src="/images/gif/two.gif" />
                    <Avatar alt="a healthy family" src="/images/gif/three.gif" />
                    <Avatar alt="stethoscope" src="/images/gif/four.gif" />
                    <BootstrapButton size="small" onClick={goToAboutUs}>About Us</BootstrapButton>
                </Paper>}
        </div>
    )
}

export function BannerThree() {
    const matchesSmallScreen = useMediaQuery('(max-width: 480px)');

    return (
        <div className={css.bannerThreeContainer}>
            <div className={css.bannerOneImgContainer}>
                <Image
                    alt="a new born baby with mother"
                    src="/images/bg/bg11.jpg"
                    objectFit="cover"
                    className={css.bannerOneImg}
                    fill
                    priority   // instead of lazy load
                    fetchPriority="high"
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