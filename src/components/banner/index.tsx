import { Carousel } from 'react-responsive-carousel';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useMediaQuery } from '@mui/system';

import { BannerOne } from './banner-one';
import { BannerTwo } from './banner-two';
import { BannerThree } from './banner-three';
import { BannerFour } from './banner-four';

import css from './index.module.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Banner = () => {
    const matchesSmallScreen = useMediaQuery('(max-width: 480px)');
    return (
        <Carousel 
            infiniteLoop 
            autoPlay
            showArrows 
            showThumbs={false} 
            emulateTouch 
            interval={2000} 
            showStatus={false}
            showIndicators={!matchesSmallScreen}
            renderArrowPrev={(clickHandler) => <span onClick={clickHandler} className={`${css.leftBtn} ${css.swipeBtn}`}><ArrowBackIosIcon /></span>}
            renderArrowNext={(clickHandler) => <span onClick={clickHandler} className={`${css.rightBtn} ${css.swipeBtn}`}><ArrowForwardIosIcon /></span>}
        >
            <BannerOne />
            <BannerTwo />
            <BannerThree />
            <BannerFour />
        </Carousel>
    )
}