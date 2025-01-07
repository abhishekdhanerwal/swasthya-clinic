import { useState } from 'react';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

import MenuIcon from '@mui/icons-material/Menu';

import NavigationButtons from '@/components/navigation-buttons'
import NavigationDrawer from '@/components/navigation-drawer';
import { useFonts } from '@/hooks/useFonts';

import css from './index.module.css';


export const Header = () => {
    const router = useRouter();
    const pathname = usePathname();
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

    return (
        <header className={css.header}>
            <span className={`${css.title} ${openSans.className}`} onClick={goToHome}><span>Sonia</span> Malik</span>
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