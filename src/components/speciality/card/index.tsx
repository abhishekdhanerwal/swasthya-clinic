import { useRouter } from 'next/router';

import { useFonts } from '@/hooks/useFonts';

import css from './index.module.css';

interface Props {
    label: string;
    icon: JSX.Element;
    list: string[];
    route: string;
}

export const SpecialityCard = ({ label, icon, list, route }: Props) => {
    const { roboto } = useFonts();
    const router = useRouter();
    return (
        <div className={css["flip-card"]}>
            <div className={css["flip-card-inner"]}>
                <div className={css["flip-card-front"]}>
                    <div className={css.imgContainer}>{icon}</div>
                    <h3 className={`${roboto.className} ${css.label}`}>{label}</h3>
                </div>
                <div className={css["flip-card-back"]} onClick={() => router.push(`services/${route}`)}>
                    <ul className={roboto.className}>
                        {list.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}