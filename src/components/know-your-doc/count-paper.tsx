import { Paper } from "@mui/material";
import { styled } from "@mui/system";

import { useFonts } from "@/hooks/useFonts";

import css from './index.module.css';

interface Props {
    title: string;
    count: number
}

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 240,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down("sm")]: {
        width: '100%',
        marginRight: 20,
        marginLeft: 20
    }
}));

export const CountPaper = ({ count, title }: Props) => {
    const { openSans } = useFonts();
    return (
        <DemoPaper elevation={3} className={openSans.className}>
            <div className={css.paperContent}>
                <span className={css.paperTitle}>{title} - </span>
                <span className={css.paperCount} id="count-number">{count}+</span>
            </div>
        </DemoPaper>
    )
}