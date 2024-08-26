import Link from 'next/link';

import { styled, textAlign } from '@mui/system';
import { Button, ButtonProps } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { NavList } from '@/components/navigation-buttons';
import { AppointmentDialog } from '@/components/appointment-dialog';
import { ThemeColors } from '@/constants/colors';
import { useAppointmentDialogState } from '@/hooks/useAppointmentDialogState';
import { useFonts } from '@/hooks/useFonts';

import css from './index.module.css';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    width: 200,
    color: ThemeColors.orange,
    borderColor: ThemeColors.orange,
    backgroundColor: '#fff',
    '&:hover': {
        borderColor: ThemeColors.orange,
        backgroundColor: ThemeColors.orange,
        color: '#fff'
    },
}));

export const Footer = () => {
    const { roboto } = useFonts();
    const { openDialog, handleDialogOpen, handleDialogClose } = useAppointmentDialogState();

    const links = [...NavList];
    links.shift();
    return (
        <footer className={css.footerContainer}>
            <section className={css.socialMedia}>
                <FacebookIcon className={css.icons} />
                <InstagramIcon className={css.icons} />
                <TwitterIcon className={css.icons} />
            </section>
            <section className={`${css.content}`}>
                <div className={`${css.section} ${css.routesSection} ${roboto.className}`}>
                    <h3 className={`${roboto.className} ${css.routeTitle}`}>Useful Links</h3>
                    <ul className={css.routeList}>
                        {links.map(item => <li key={item.name}><Link href={item.route}>{item.name}</Link></li>)}
                    </ul>
                </div>
                <div className={`${css.section} ${css.openingHours}`}>
                    <h3 className={`${roboto.className} ${css.title}`}>Opening Hours</h3>
                    <table className={css.table}>
                        <tbody>
                            <tr>
                                <td>Mon - Sat</td>
                                <td align='right'>10:00 AM - 2:00 PM (Morning Shifts)</td>
                            </tr>
                            <tr>
                                <td>Mon - Sat</td>
                                <td align='right'>2:00 PM - 8:00 PM (Evening Shifts)</td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td align='right'>Closed</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={`${css.section} ${css.appointment} ${roboto.className}`}>
                    <h3 className={`${roboto.className} ${css.title}`}>Make An Appointment</h3>

                    <div className={` ${css.location}`}>
                        <LocationOnIcon sx={{ color: ThemeColors.orange }} />
                        <p>L-81, Street Number 7, near Labour Chowk, Block F, Mahipalpur Extension, Mahipalpur, New Delhi, Delhi 110037</p>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <ColorButton variant="outlined" onClick={handleDialogOpen}>For Appointment</ColorButton>
                        <AppointmentDialog open={openDialog} handleClose={handleDialogClose} />
                    </div>
                </div>
            </section>
            <section className={css.trademark}>
                2024 @ Copyright - Dr Sonia Malik | All Rights Reserved
            </section>
        </footer>
    )
}