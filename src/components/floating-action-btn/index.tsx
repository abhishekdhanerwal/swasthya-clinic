import { useEffect, useState } from "react";

import { Fab, Popover } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';

import css from './index.module.css';
import Link from "next/link";

const fabStyle = {
    position: 'fixed',
    bottom: 16,
    right: 16,
};

export const FloatingActionBtn = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                classes={{paper: css.hiddenPopover}}
            >
                <ul className={css.dataContainer}>
                    <li>
                        <span className={css.data}><Link href={'https://wa.me/+919911866043'}>+919911866043</Link></span>
                        <span className={css.data}><WhatsAppIcon style={{ color: '#25D366' }} /></span>
                    </li>
                    <li>
                        <span className={css.data}><Link href={'tel:+919911866043'}>+919911866043</Link></span>
                        <span className={css.data}><CallIcon style={{ color: '#0000ff' }} /></span>
                    </li>
                </ul></Popover>
            <Fab sx={fabStyle} color="primary" aria-label="add" onClick={handleClick}>
                <AddIcon />
            </Fab>
        </>
    )
}