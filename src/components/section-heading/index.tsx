import { Open_Sans } from 'next/font/google';

import css from './index.module.css';

const openSans = Open_Sans({weight: "600", subsets: ["latin"]});

interface Props {
    title: string
    hideBorder?: boolean;
}

export const SectionHeading = ({title, hideBorder}: Props) => {
    return <h2 className={`${hideBorder ? css.titleNoBorder : css.title} ${openSans.className}`}>{title}</h2>;

}