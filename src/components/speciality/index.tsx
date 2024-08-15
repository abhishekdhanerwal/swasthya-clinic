import { SectionHeading } from "../section-heading"
import { SpecialityCard } from "./card"

import FavoriteIcon from '@mui/icons-material/Favorite';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import ChildCareIcon from '@mui/icons-material/ChildCare';

import css from './index.module.css';

const specialityList = [
    {label: 'Gynecological Care', icon: <FavoriteIcon sx={{ fontSize: 64, color: '#fd6c02' }} />},
    {label: 'Gynae Surgeries', icon: <AllInboxIcon sx={{ fontSize: 64, color: '#fd6c02' }} />},
    {label: 'Antenatal care', icon: <ChildCareIcon sx={{ fontSize: 64, color: '#fd6c02' }} />},
    {label: 'Fertility Care', icon: <FavoriteIcon sx={{ fontSize: 64, color: '#fd6c02' }} />},
    {label: 'Cosmatic Gynaecology', icon: <AllInboxIcon sx={{ fontSize: 64, color: '#fd6c02' }} />},
    {label: 'Lab Investigations', icon: <ChildCareIcon sx={{ fontSize: 64, color: '#fd6c02' }} />},
]

export const Speciality = () => {
    return (
        <section className={css.specialityContainer}>
            <SectionHeading title="Speciality" />
            <div className={css.cardsGroup}>
                {specialityList.map(item => <SpecialityCard icon={item.icon} label={item.label} key={item.label} />)}
            </div>
        </section>
    )
}