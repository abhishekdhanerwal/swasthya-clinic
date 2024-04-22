import { useState } from 'react';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuDrawer } from '@/components/shared/drawer';
import css from './index.module.css';

export const Header = () => {

    const [openSideMenu, setOpenSideMenu] = useState(false);
    const showDrawer = () => {
        setOpenSideMenu(true);
    };
  
    const onCloseDrawer = () => {
        setOpenSideMenu(false);
    };
 
    return (
        <header className={css.header}>
            <span className={css.title}>Swasthya Clinic</span>
            <nav className={css.navigation}>
                <Button size="small">Specialities</Button>
                <Button size="small">Health Checkup</Button>
                <Button size="small">About</Button>
                <Button size="small">Contact Us</Button>
            </nav>
            <span className={css.menuIcon}>
                <MenuIcon onClick={showDrawer} />
            </span>
            <MenuDrawer open={openSideMenu} onClose={onCloseDrawer} />
        </header>
    )
}