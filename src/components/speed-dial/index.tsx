import { useState } from 'react';
import Link from 'next/link';

import { Backdrop, SpeedDial, SpeedDialAction } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import CloseIcon from '@mui/icons-material/Close';

import { DATA } from '@/constants/data';

import css from './index.module.css';

const actions = [
  { icon: <Link className={css.icon} href={`tel:${DATA.number}`}><CallIcon style={{ color: '#0000ff' }} /></Link>, name: 'Calling Hours (10:00 AM - 8:00 PM)' },
  { icon: <Link className={css.icon} href={`https://wa.me/${DATA.number}`}><WhatsAppIcon style={{ color: '#25D366' }} /></Link>, name: 'Whatsapp Us for Appointment' },
];

export default function SpeedDialTooltipOpen() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip"
        className={css.speedDial}
        icon={open ? <CloseIcon /> : <CallIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        classes={{fab: css.btn}}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
            classes={{staticTooltipLabel: css.tooltip}}
          />
        ))}
      </SpeedDial>
    </>
  );
}