import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';

import { Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

import { ThemeColors } from '@/constants/colors';
import { useAppointmentDialogState } from '@/hooks/useAppointmentDialogState';
import { Nav, useNavItems } from '@/hooks/useNavItems';
import { AppointmentDialog } from '@/components/appointment-dialog';

import css from './index.module.css';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: ThemeColors.charcoal,
    '&:hover': {
        backgroundColor: ThemeColors.orangeLightBg
    }
}));

const AppointmentButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: '#fff',
    backgroundColor: ThemeColors.orange,
    '&:hover': {
        backgroundColor: ThemeColors.orange
    },
}));

const NavigationButtons = () => {
    const router = useRouter();
    const { openDialog, handleDialogOpen, handleDialogClose } = useAppointmentDialogState();
    const { navList } = useNavItems();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNavClick = (event: React.MouseEvent<HTMLButtonElement>, nav: Nav) => {
        if (nav.endIcon) {
            setAnchorEl(event.currentTarget);
        } else {
            router.push(nav.route);
        }
    }

    const handleServicesListClick = (id: string) => {
        router.push(`/services/${id}`);
        handleClose();
    }

    const selectedPath = router.query.type ? `/${router.pathname.split('/')[1]}` : router.pathname ?? "";

    return (<>
        {navList.map(item => <Fragment key={item.route}>
            <ColorButton endIcon={item.endIcon} className={`${selectedPath === item.route ? css.activeNav : (item.route === "/" && !selectedPath) ? css.activeNav : ''} ${css.navBtn} `} onClick={(e) => handleNavClick(e, item)} size="small">{item.name}</ColorButton>
            {item.child?.length ? <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => handleServicesListClick("")} className={router.pathname === '/services' ? css.activeRoute : ''}>Services List</MenuItem>
                {item.child.map(item => <MenuItem key={item.route} onClick={() => handleServicesListClick(item.route)} className={router.query.type === item.route ? css.activeRoute : ''}>{item.label}</MenuItem>)}
            </Menu>: null}
        </Fragment>)}
        <AppointmentButton className={css.appointmentBtn} variant="contained" onClick={handleDialogOpen}>Book Appointment</AppointmentButton>
        <AppointmentDialog open={openDialog} handleClose={handleDialogClose} />
    </>)
}

export default NavigationButtons;