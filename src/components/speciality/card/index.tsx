import { useFonts } from '@/hooks/useFonts';

import css from './index.module.css';
import { useRouter } from 'next/router';

interface Props {
    label: string;
    icon: any;
    list: string[];
}

export const SpecialityCard = ({ label, icon, list }: Props) => {
    const { roboto } = useFonts();
    const router = useRouter();
    return (
        <div className={css["flip-card"]}>
            <div className={css["flip-card-inner"]}>
                <div className={css["flip-card-front"]}>
                    <div className={css.imgContainer}>{icon}</div>
                    <h3 className={roboto.className}>{label}</h3>
                </div>
                <div className={css["flip-card-back"]} onClick={() => router.push('services')}>
                    <ul className={roboto.className}>
                        {list.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}