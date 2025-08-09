import { useState } from 'react';

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PhotoIcon from '@mui/icons-material/Photo';

import { useMediaQuery } from '@mui/system';

import css from './index.module.css';
import { useFonts } from '@/hooks/useFonts';

const itemData = [
    {
        img: '/images/gallery/1.jpg',
        title: 'Dedicated Consultation'
    },
    {
        img: '/images/gallery/2.jpg',
        title: 'Our Clinic'
    },
    {
        img: '/images/gallery/3.jpg',
        title: 'Caring Team'
    },
    {
        img: '/images/gallery/4.jpg',
        title: 'Certified Excellence'
    },
    {
        img: '/images/gallery/5.jpg',
        title: 'Patient Comfort'
    },
    {
        img: '/images/gallery/6.jpg',
        title: 'Joyful Moments'
    },
    {
        img: '/images/gallery/8.jpg',
        title: 'Glimpses from C-Section Surgery'
    },
    {
        img: '/images/gallery/9.jpg',
        title: 'Safe delivery, expert care'
    },
    {
        img: '/images/gallery/10.jpg',
        title: 'Precise hands, healthy baby'
    },
    {
        img: '/images/gallery/11.jpg',
        title: 'Compassionate cesarean procedure'
    },
    {
        img: '/images/gallery/7.jpg',
        title: 'Find Us'
    }
];

const Gallery = () => {
    const { roboto } = useFonts();

    const matchesSmallScreen = useMediaQuery('(max-width: 480px)');
    
    const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

    return (
        <div>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab className={css.tabs} icon={<PhotoIcon />} iconPosition="start" label="Images" />
                    <Tab className={css.tabs} icon={<OndemandVideoIcon />} iconPosition="start" label="Videos" />
                </Tabs>
            </Box>
            {value === 0 ?
            <div className={css.imagesContainer}>
                <ImageList variant="masonry" cols={matchesSmallScreen ? 1 : 3} gap={8}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} className={css.imgCont}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
            :
            <div className={css.videoContainer}>
                <h3 className={`${roboto.className} ${css.title}`}>Patient Success Story</h3>
                <video controls preload="none">
                    <source src="/images/gallery/v1.MP4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            }
        </div>
    )
}

export default Gallery;