import { useState } from 'react';
import { Open_Sans } from 'next/font/google';

import MenuIcon from '@mui/icons-material/Menu';

import NavigationButtons from '@/components/navigation-buttons'
import NavigationDrawer from '@/components/navigation-drawer';

import css from './index.module.css';

const openSans = Open_Sans({weight: "600", subsets: ["latin"]})

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
            <span className={`${css.title} ${openSans.className}`}><span>Sonia</span> Malik</span>
            <nav className={css.navigation}>
                <NavigationButtons />
            </nav>
            <span className={css.menuIcon}>
                <MenuIcon onClick={showDrawer} />
            </span>
            <NavigationDrawer open={openSideMenu} onClose={onCloseDrawer} />
        </header>
    )
}