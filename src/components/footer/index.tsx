import Link from 'next/link';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { useFonts } from '@/hooks/useFonts';
import { useNavItems } from '@/hooks/useNavItems';

import css from './index.module.css';

export const Footer = () => {
    const { roboto, montserrat } = useFonts();
    const { navList } = useNavItems();
    const googleMapsUrl = `https://goo.gl/maps/PWdZH4yPeWn5myvH7`;

    return (
        <footer className={css.footerContainer}>
            <section className={`${css.content}`}>
                <div className={`${css.section} ${css.routesSection} ${montserrat.className}`}>
                    <h2 className={`${roboto.className} ${css.routeTitle}`}>Useful Links</h2>
                    <ul className={css.routeList}>
                        {navList.map(item => (
                            <li key={item.name}>
                                <Link href={item.route}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`${css.section} ${css.openingHours} ${montserrat.className}`}>
                    <h2 className={`${roboto.className} ${css.title}`}>Opening Hours</h2>
                    <table className={css.table}>
                        <tbody>
                            <tr>
                                <td>Mon - Sat</td>
                                <td align='left'>10:00 AM - 2:00 PM (Morning Shifts)</td>
                            </tr>
                            <tr>
                                <td>Mon - Sat</td>
                                <td align='left'>5:00 PM - 8:00 PM (Evening Shifts)</td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td align='left'>Closed</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={css.timeInfo}>
                        <h3 className={`${roboto.className} ${css.timeInfoTitle}`}>Monday to Saturday</h3>
                        <div>Morning: 10:00 AM to 2:00 PM</div>
                        <div>Evening: 5:00 AM to 8:00 PM</div>
                    </div>
                </div>
                <div className={`${css.section} ${css.appointment} ${montserrat.className}`}>
                    <h2 className={`${roboto.className} ${css.title}`}>Locate Us</h2>

                    <a
                        className={css.location}
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <LocationOnIcon />
                        <p>L-81, Street Number 7, near Labour Chowk, Block F, Mahipalpur Extension, Mahipalpur, New Delhi, Delhi 110037</p>
                    </a>

                    <h2 className={`${roboto.className} ${css.title}`}>Follow Us</h2>
                    <div className={css.socialMedia}>
                        <FacebookIcon className={css.icons} />
                        <InstagramIcon className={css.icons} />
                        <TwitterIcon className={css.icons} />
                    </div>
                </div>
            </section>
            <section className={css.trademark}>
                2024 @ Copyright - Dr Sonia Malik | All Rights Reserved
            </section>
        </footer>
    )
}
