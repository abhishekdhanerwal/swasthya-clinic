import Image from "next/image";

import { useFonts } from "@/hooks/useFonts";
import { ReviewRatingProgress } from "@/components/review-rating-progress";
import { Evaluation } from "@/pages/reviews";

import css from './index.module.css';

interface Props {
    evaluation: Array<Evaluation>;
    isMobileView?: boolean;
}

export const ElementOfEvaluation = ({evaluation, isMobileView}: Props) => {
    const {openSans} = useFonts();
    return (
        <>
            <h3 className={`${openSans.className} ${css.ratingTitle}`}>Element of Evaluation</h3>
            <ReviewRatingProgress evaluation={evaluation} />
            <div className={css.images}>
                {!isMobileView ? <Image alt="stethoscope" src={"/images/stethoscope.png"} width={230} height={300} /> : null}
                <Image alt="stethoscope" src={"/images/report.png"} width={260} height={300} />
            </div>
        </>
    )
}