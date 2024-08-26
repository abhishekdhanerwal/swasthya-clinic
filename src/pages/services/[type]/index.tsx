import { useRouter } from 'next/router';

import { PageHeading } from '@/components/page-heading';
import servicesData from "@/contents/services.json";

import css from './index.module.css';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useFonts } from '@/hooks/useFonts';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function ServiceDetails({ selectedService }: { selectedService?: typeof servicesData[number] }) {
    const { roboto } = useFonts();

    return (
        <section className={css.serviceDetailsContainer}>
            <PageHeading title={selectedService?.name ?? ""} />
            <div className={roboto.className}>
                <div style={{ marginTop: 24, marginBottom: 40 }}>{selectedService?.description}</div>

                <>
                    {selectedService?.children.map(child => (
                        <Accordion key={child.name}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                {child.name}
                            </AccordionSummary>
                            <AccordionDetails>

                                {Array.isArray(child.description) ? <List>
                                    {child.description.map((item, index) => (
                                        <ListItem key={index}>
                                            <ListItemIcon sx={{minWidth: 0}}>
                                                <ArrowRightIcon />
                                            </ListItemIcon>
                                            <Typography variant="body2" color='text.secondary'>{item}</Typography>
                                        </ListItem>
                                    ))}
                                </List> : <Typography variant="body2" color="text.secondary">{child.description}</Typography>}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </>
            </div>
        </section>
    )
}

type A = {
    paths: {

    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const arr: string[] = servicesData.map(item => item.id);
    const paths = arr.map((type) => {
        return {
            params: { type },
        }
    });
    return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps<{ selectedService?: typeof servicesData[number] }> = async (context) => {
    const currentId = context.params?.type ?? "";
    console.log(currentId);
    const selectedService = servicesData.find(item => item.id === currentId);
    return {
        props: { selectedService }
    }
}