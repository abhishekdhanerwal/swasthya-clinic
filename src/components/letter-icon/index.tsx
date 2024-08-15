import css from './index.module.css';

interface Props {
    children: React.ReactNode;
    active?: boolean;
}

const LetterIcon = ({ children, active }: Props) => {
    return (
        <span className={`${css.iconContainer} ${active ? css.activeIcon  : ''}`}>
            {children}
        </span>
    )
}

export default LetterIcon;