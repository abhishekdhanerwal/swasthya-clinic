import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import css from './index.module.css';

export const InfoHeader = () => {
    return (<div className={css.infoHeader}>
        <ul>
            <li>Email Id</li>
            <li>Phone Number</li>
            <li>Working Hours</li>
            <li>
                <FacebookIcon style={{ color: '#316FF6' }} />
                <InstagramIcon style={{ color: '#962fbf' }} />
                <TwitterIcon style={{ color: '#1DA1F2' }} />
            </li>
        </ul>
    </div>)
}