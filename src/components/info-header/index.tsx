import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

import { DATA } from '@/constants/data';
import { useFonts } from '@/hooks/useFonts';

import css from './index.module.css';


export const InfoHeader = () => {
    const { roboto } = useFonts();

    const handleEmailClick = () => {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${DATA.email}`;
        window.open(gmailUrl, '_blank');
    };

    return (<div className={`${css.infoHeader} ${roboto.className}`}>
        <ul>
            <li className={css.data} onClick={() => window.open(`tel:${DATA.number}`)}>
                <CallIcon />
                {DATA.number}
            </li>
            <li className={css.data} onClick={handleEmailClick}>
                <EmailIcon />
                {DATA.email}
            </li>
            <li className={css.data}>
                <AccessTimeFilledIcon />
                Mon-Sat 10:00 AM - 1:00 PM | 5:00 PM - 8:00 PM
            </li>
            <li className={css.socialMedia}>
                <FacebookIcon style={{ color: '#316FF6' }} />
                <InstagramIcon style={{ color: '#962fbf' }} />
                <TwitterIcon style={{ color: '#1DA1F2' }} />
            </li>
        </ul>
    </div>)
}