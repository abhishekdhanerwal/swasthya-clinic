import { useFonts } from '@/hooks/useFonts';
import css from './index.module.css';

interface Props {
    title: string;
}

export const PageHeading = ({ title }: Props) => {
    const { openSans } = useFonts();
    return (
        <h2 className={`${css.heading} ${openSans.className}`}>
            <span>{title}</span>
        </h2>
    )
}