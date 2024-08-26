import { useRouter } from 'next/router';

import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

import { ThemeColors } from '@/constants/colors';

import css from './index.module.css';
import { useAppointmentDialogState } from '@/hooks/useAppointmentDialogState';
import { AppointmentDialog } from '../appointment-dialog';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: ThemeColors.charcoal,
    '&:hover': {
        backgroundColor: ThemeColors.orangeLightBg
    },
}));

const AppointmentButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: '#fff',
    backgroundColor: ThemeColors.orange,
    '&:hover': {
        backgroundColor: ThemeColors.orange
    },
}));

export const NavList = [
    { name: 'Home', route: '/' },
    { name: 'About', route: 'about' },
    { name: 'Services', route: 'services' },
    { name: 'Patient Testimonials', route: 'reviews' },
] as const;

export type RouteOptions = typeof NavList[number]['route'];

const NavigationButtons = () => {
    const router = useRouter();
    const { openDialog, handleDialogOpen, handleDialogClose } = useAppointmentDialogState();

    const goToPage = (path: RouteOptions) => {
        router.push(`/${path}`)
    }

    const selectedPath = router.query.subPage ?? router.pathname.split("/")?.[1] ?? "";

    return (<>
        {NavList.map(item => <ColorButton key={item.route} className={selectedPath === item.route ? css.activeNav : (item.route === "/" && !selectedPath) ? css.activeNav : ''} onClick={() => goToPage(item.route)} size="small">{item.name}</ColorButton>)}
        <AppointmentButton variant="contained" onClick={handleDialogOpen}>Book Appointment</AppointmentButton>
        <AppointmentDialog open={openDialog} handleClose={handleDialogClose} />
    </>)
}

export default NavigationButtons;