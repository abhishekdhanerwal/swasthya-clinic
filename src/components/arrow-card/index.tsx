import css from './index.module.css';

interface Props {
    children: JSX.Element; 
    position: "top" | "right" | "bottom" | "left";
    className?: string; 
}

export const ArrowCard = ({children, position, className}: Props) => {
    return (
        <div className={`${css.box} ${css[`arrow-${position}`]} ${className}`}>
            {children}
        </div>
    )
}