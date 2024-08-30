import { LinearProgress, linearProgressClasses } from "@mui/material";
import { styled } from "@mui/system";

import { ThemeColors } from "@/constants/colors";
import { useFonts } from "@/hooks/useFonts"
import { Evaluation } from "@/pages/reviews";

import css from './index.module.css';

const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#fff',
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: ThemeColors.orange,
    },
}));

interface Props {
    evaluation: Array<Evaluation>;
}

export const ReviewRatingProgress = ({ evaluation }: Props) => {
    const { roboto, robotoBold } = useFonts();
    return (
        <div className={css.ratingContainer}>
            {evaluation.map(item => (
                <div key={item.name} className={css.ratings}>
                    <h4 className={roboto.className}>{item.name}</h4>
                    <div className={css.progress}>
                        <span className={robotoBold.className}>{item.value}%</span>
                        <span className={roboto.className}>{item.label}</span>
                        <BorderLinearProgress variant="determinate" value={item.value} />
                    </div>
                </div>
            ))}
        </div>
    )
}