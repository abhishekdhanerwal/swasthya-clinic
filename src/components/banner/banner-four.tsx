import { useRouter } from "next/router";
import Image from "next/image";

import { styled, useMediaQuery } from "@mui/system";
import { Button, Paper } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useFonts } from "@/hooks/useFonts";

import css from './index.module.css';

const BootstrapButton = styled(Button)({
    padding: '6px 0',
    border: '1px solid',
    width: 450,
    height: 40,
    textTransform: 'none',
    backgroundColor: '#fff',
    borderColor: '#ebc9e1',
    borderTopRightRadius: '50px',
    borderBottomRightRadius: '50px',
    color: '#36454F',
    boxShadow: 'none',
    justifyContent: 'left',
    marginTop: 16,
    paddingLeft: 8,
    paddingRight: 16,
    '&:hover': {
        backgroundColor: '#e77dab',
        color: '#fff',
        boxShadow: 'none',
    },
    ['@media (max-width: 480px)']: {
        marginTop: 12,
        fontSize: 10,
        width: '100%',
        height: 30,
        paddingRight: 10,
        backgroundColor: '#e77dab',
        color: '#fff',
    }
});

const Content = () => {
    const matchesSmallScreen = useMediaQuery('(max-width: 480px)');

    const { sofadiOne, roboto } = useFonts();
    const router = useRouter();

    const goToService = (path: string) => {
        router.push(`/services/${path}`)
    }
    return (
        <div className={css.bannerFourContent}>
            <div className={`${sofadiOne.className} ${css.bannerOneText}`}>
                <h1>Caring for women at</h1>
                <h1>every stage of life</h1>
            </div>
            <div className={`${css.bannerTwoHelperText} ${roboto.className}`}>
                <h4>Discover the solutions to common gynecological concerns</h4>
            </div>
            <div className={css.bannerFourIcons}>
                <BootstrapButton classes={{ endIcon: css.bannerFourEndIcon }} startIcon={<Image alt="gyanec" src="/images/icons/i1.png" width={matchesSmallScreen ? 16 : 32} height={matchesSmallScreen ? 16 : 32} />} endIcon={<ArrowForwardIosIcon />} onClick={() => goToService('gynecological-care')}>PCOD, Pelvic Pain, Menstrual disorders</BootstrapButton>
                <BootstrapButton classes={{ endIcon: css.bannerFourEndIcon }} startIcon={<Image alt="gyanec" src="/images/icons/i3.png" width={matchesSmallScreen ? 16 : 32} height={matchesSmallScreen ? 16 : 32} />} endIcon={<ArrowForwardIosIcon />} onClick={() => goToService('antenatal-care')}>High risk pregnancies, Recurrent pregnancy losses</BootstrapButton>
                <BootstrapButton classes={{ endIcon: css.bannerFourEndIcon }} startIcon={<Image alt="gyanec" src="/images/icons/i2.png" width={matchesSmallScreen ? 16 : 32} height={matchesSmallScreen ? 16 : 32} />} endIcon={<ArrowForwardIosIcon />} onClick={() => goToService('gynae-surgeries')}>Gynae Surgeries, Ovarian Cyst, Endometriosis</BootstrapButton>
                <BootstrapButton classes={{ endIcon: css.bannerFourEndIcon }} startIcon={<Image alt="gyanec" src="/images/icons/i4.png" width={matchesSmallScreen ? 16 : 32} height={matchesSmallScreen ? 16 : 32} />} endIcon={<ArrowForwardIosIcon />} onClick={() => goToService('fertility-care')}>Infertility Specialist, Hysterosalpingography (HSG)</BootstrapButton>
            </div>
        </div>
    )
}

export const BannerFour = () => {
    const matchesSmallScreen = useMediaQuery('(max-width: 480px)');

    return (
        <div className={css.bannerFourContainer}>
            <div className={css.bannerFourImgContainer}>
                <Image
                    alt="gynae check image"
                    src="/images/bg/bg21.jpg"
                    objectFit="cover"
                    className={css.bannerOneImg}
                    fill
                />
            </div>
            {matchesSmallScreen ?
                <Paper className={css.bannerPaperFour} elevation={1}>
                    <Content />
                </Paper> 
            : <Content />}
        </div>
    )
}