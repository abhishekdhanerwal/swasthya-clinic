import Link from 'next/link';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import css from './index.module.css';

export const SubHeader = () => {
    return (
        <div className={css.subHeader}>
            <span>
                <CalendarMonthIcon/>
                Book an Appointment
            </span>
            <span>
                <PersonAddAltIcon/>
                Find Doctor
            </span>
            <span>
                <HealthAndSafetyIcon/>
                Health Checkup
            </span>
        </div>
    )
}