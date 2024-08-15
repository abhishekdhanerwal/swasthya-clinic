import { useRouter } from 'next/router';

import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

import { ThemeColors } from '@/constants/colors';

import css from './index.module.css';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: ThemeColors.charcoal,
    '&:hover': {
        backgroundColor: ThemeColors.orangeLightBg
    },
}));

export const NavList = [
    {name: 'Home', route: '/'},
    {name: 'About Us', route: 'about'},
    {name: 'Services', route: 'services'},
    {name: 'Patient Testimonials', route: 'reviews'},
    {name: 'Procedure', route: 'procedure'},
    {name: 'Our Gallery', route: 'gallery'},
    {name: 'Health Camps', route: 'health-camps'},
    {name: 'Contact Us', route: 'contact-us'},
] as const;

export type RouteOptions = typeof NavList[number]['route'];

const NavigationButtons = () => {
    const router = useRouter();

    const goToPage = (path: RouteOptions) => {
        router.push(path)
    }

    return (<>
        {NavList.map(item => <ColorButton key={item.route} className={router.query.subPage === item.route ? css.activeNav :  (item.route === "/" && !router.query.subPage) ? css.activeNav : ''} onClick={() => goToPage(item.route)} size="small">{item.name}</ColorButton>)}
    </>)
}

export default NavigationButtons;