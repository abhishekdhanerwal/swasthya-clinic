import { Dialog, DialogContent, DialogTitle, Divider, List, ListItemButton } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import css from './index.module.css';
import Link from "next/link";
import { DATA } from "@/constants/data";
import { useFonts } from "@/hooks/useFonts";

interface Props {
    open: boolean;
    handleClose: () => void;
}

export const AppointmentDialog = ({ open, handleClose }: Props) => {
    const { roboto } = useFonts();
    return (
        <Dialog onClose={handleClose} open={open} classes={{ paper: css.dialogRoot }}>
            <div className={css.dialogPaper}></div>
            <div className={css.dialogText}>
                <DialogTitle className={css.dialogTitle}>Request An Appointment</DialogTitle>
                <DialogContent className={css.dialogContent}>
                    <div className={css.links}>
                        <List>
                            <Divider />
                            <ListItemButton>
                                <Link className={`${css.items} ${roboto.className}`} href={`https://wa.me/${DATA.number}`} target="_blank" rel="noopener noreferrer"><WhatsAppIcon style={{ color: '#25D366' }} /> Whatsapp Us </Link>
                            </ListItemButton>
                            <Divider />
                            <ListItemButton>
                                <Link className={`${css.items} ${roboto.className}`} href={`tel:${DATA.number}`} target="_blank" rel="noopener noreferrer"><CallIcon style={{ color: '#0000ff' }} /> Call Us </Link>
                            </ListItemButton>
                            <Divider />
                        </List>
                    </div>
                    <div className={css.socialMedia}>
                        <h3 className={`${roboto.className} ${css.title}`}>Social Media</h3>
                        <div className={css.icons}>
                            <FacebookIcon style={{ color: '#316FF6' }} />
                            <InstagramIcon style={{ color: '#c13584' }} />
                            <TwitterIcon style={{ color: '#1DA1F2' }} />
                        </div>
                    </div>
                </DialogContent>
            </div>
        </Dialog>
    )
}