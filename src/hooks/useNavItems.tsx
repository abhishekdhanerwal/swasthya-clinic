import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CollectionsIcon from '@mui/icons-material/Collections';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ReviewsIcon from '@mui/icons-material/Reviews';

import servicesData from "@/contents/services.json";

export type Nav = {
    name: string;
    route: string;
    navIcon: JSX.Element;
    endIcon?: JSX.Element;
    child?: Array<{
        label: string;
        route: string;
    }>;
}

export const useNavItems = () => {
    const specialityList = servicesData.map(item => ({
        label: item.name,
        route: item.id
    }));

    const navList: Array<Nav> = [
        { name: 'Home', route: '/', navIcon: <HomeIcon /> },
        { name: 'About', route: '/about', navIcon: <InfoIcon /> },
        { name: 'Services', route: '/services', endIcon: <ExpandCircleDownIcon />, navIcon: <MedicalServicesIcon />, child: specialityList },
        { name: 'Gallery', route: '/gallery', navIcon: <CollectionsIcon /> },
        { name: 'Patient Testimonials', route: '/reviews', navIcon: <ReviewsIcon /> },
    ];

    return { navList };
}