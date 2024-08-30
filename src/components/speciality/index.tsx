
import Image from 'next/image';

import { SectionHeading } from "@/components/section-heading"
import servicesData from "@/contents/services.json";

import { SpecialityCard } from "./card"
import css from './index.module.css';

export const Speciality = () => {
    const specialityList = servicesData.map(item => ({
        label: item.name,
        icon: <Image src={`/images/${item.image}`} alt={item.imgAlt} fill objectFit="contain" />,
        list: item.children.map(child => child.name).slice(0, 4),
        route: item.id
    }))

    return (
        <section className={css.specialityContainer}>
            <SectionHeading title="Speciality" />
            <div className={css.cardsGroup}>
                {specialityList.map(item => <SpecialityCard icon={item.icon} route={item.route} label={item.label} key={item.label} list={item.list} />)}
            </div>
        </section>
    )
}