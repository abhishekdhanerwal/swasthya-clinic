import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import css from './index.module.css';
import Link from "next/link";
import { DATA } from "@/constants/data";

interface Props {
    open: boolean;
    handleClose: () => void;
}

export const AppointmentDialog = ({ open, handleClose }: Props) => {
    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Make An Appointment</DialogTitle>
            <DialogContent className={css.dialogContent} >
                {/* <div><CalendarMonthIcon style={{color: ThemeColors.orange, fontSize: 80}} /></div> */}
                <Link className={css.items} href={`https://wa.me/${DATA.number}`} target="_blank" rel="noopener noreferrer"><WhatsAppIcon style={{ color: '#25D366' }} /> Whatsapp Us </Link>
                <Link className={css.items} href={`tel:${DATA.number}`} target="_blank" rel="noopener noreferrer"><CallIcon style={{ color: '#0000ff' }} /> Call Us </Link>
            </DialogContent>
        </Dialog>
    )
}