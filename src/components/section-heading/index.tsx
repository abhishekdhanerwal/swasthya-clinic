
import { useFonts } from '@/hooks/useFonts';

import css from './index.module.css';

interface Props {
    title: string
    hideBorder?: boolean;
}

export const SectionHeading = ({title, hideBorder}: Props) => {
    const { openSans } = useFonts();
    return <h2 className={`${hideBorder ? css.titleNoBorder : css.title} ${openSans.className}`}>{title}</h2>;

}