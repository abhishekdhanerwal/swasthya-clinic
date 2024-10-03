import { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';

import NavigationButtons from '@/components/navigation-buttons'
import NavigationDrawer from '@/components/navigation-drawer';

import css from './index.module.css';
import { useFonts } from '@/hooks/useFonts';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';


export const Header = () => {
    const router = useRouter();
    const [openSideMenu, setOpenSideMenu] = useState(false);

    const { openSans } = useFonts();
    const showDrawer = () => {
        setOpenSideMenu(true);
    };
  
    const onCloseDrawer = () => {
        setOpenSideMenu(false);
    };

    const goToHome = () => router.push("/");
 
    return (
        <header className={css.header}>
            <span className={`${css.title} ${openSans.className}`} onClick={goToHome}><span>Sonia</span> Malik</span>
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