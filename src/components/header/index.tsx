import { useState } from 'react';
import Image from "next/image";
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import NavigationButtons from '@/components/navigation-buttons'
import NavigationDrawer from '@/components/navigation-drawer';
import { useFonts } from '@/hooks/useFonts';

import css from './index.module.css';


export const Header = () => {
    const router = useRouter();
    const pathname = usePathname();
    const matchesMobileScreen = useMediaQuery('(max-width: 480px)');
    const matchesSmallScreen = useMediaQuery('(max-width: 820px)');
    const [openSideMenu, setOpenSideMenu] = useState(false);

    const { openSans } = useFonts();
    const showDrawer = () => {
        setOpenSideMenu(true);
    };

    const onCloseDrawer = () => {
        setOpenSideMenu(false);
    };

    const goToHome = () => router.push("/");

    const isCustomerReviewPage = pathname === "/customer-review";

    const logoDimensions = {
        width: 64,
        height: 54
    }

    if (matchesSmallScreen) {
        logoDimensions.width = 54;
        logoDimensions.height = 48;
    }

    if (matchesMobileScreen) {
        logoDimensions.width = 48;
        logoDimensions.height = 40;
    }

    return (
        <header className={css.header}>
            <div className={css.logoTitle}>
                <Image onClick={goToHome} className={css.logo} alt='logo' width={logoDimensions.width} height={logoDimensions.height} src={'/logo.png'} />
                <span className={`${css.title} ${openSans.className}`} onClick={goToHome}><span>Dr. Sonia</span> Malik</span>
            </div>
            {isCustomerReviewPage ? null :
                <>
                    <nav className={css.navigation}>
                        <NavigationButtons />
                    </nav>
                    <span className={css.menuIcon}>
                        <MenuIcon onClick={showDrawer} />
                    </span>
                    <NavigationDrawer open={openSideMenu} onClose={onCloseDrawer} />
                </>}
        </header>
    )
}