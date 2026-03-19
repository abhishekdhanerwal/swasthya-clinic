import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import { PageHeading } from "@/components/page-heading";
import { ServicesCard } from "@/components/services-card";
import servicesData from "@/contents/services.json";

import css from './index.module.css';

export type Service = {
    name: string;
    id: string;
    image: string;
    imgAlt: string;
    description: string;
    children: Array<{
        name: string;
        description: string | string[];
    }>
}

export default function Services({ servicesData }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
        <Head>
            <title>Gynecology Services in New Delhi | Dr. Sonia Malik</title>
            <meta
                name="description"
                content="Explore comprehensive gynecology services by Dr. Sonia Malik in New Delhi including pregnancy care, fertility treatments, gynecological surgeries, cosmetic gynecology, and lab investigations."
            />
        </Head>
        <section>
            <PageHeading title="Services" />
            <div className={css.cardList}>
                {servicesData.map(item => (
                    <ServicesCard key={item.id} {...item} />
                ))}
            </div>
        </section>
        </>
    )
}


export const getStaticProps: GetStaticProps<{servicesData: typeof servicesData}> = async (context) => {
    return {
        props: { servicesData }
    }
  }
  