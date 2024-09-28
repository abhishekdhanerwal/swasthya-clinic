import Image from "next/image";

import { styled, useMediaQuery } from "@mui/system";
import { Button, Paper } from "@mui/material";
import EastIcon from '@mui/icons-material/East';

import { AppointmentDialog } from "@/components/appointment-dialog";
import { useFonts } from "@/hooks/useFonts";
import { useAppointmentDialogState } from "@/hooks/useAppointmentDialogState";

import css from './index.module.css';

const BootstrapButton = styled(Button)({
    padding: '8px 2px',
    border: '1px solid',
    width: 200,
    backgroundColor: '#feb1b2',
    borderColor: '#feb1b2',
    borderRadius: '50px',
    color: '#fff',
    boxShadow: 'none',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 32,
    '&:hover': {
        backgroundColor: '#e68081',
        borderColor: '#e68081',
        color: '#fff',
        boxShadow: 'none',
    },
    ['@media (max-width: 480px)']: {
        marginTop: 12,
        fontSize: 10,
        padding: '3px 2px',
        width: 140,
    }
});

interface Props {
    handleDialogOpen: () => void;
}

const Content = ({ handleDialogOpen } : Props) => {
    const matchesSmallScreen = useMediaQuery('(max-width: 480px)');
    const { playpenSans, roboto } = useFonts();
    return (
        <div className={css.bannerOneContent}>
            <div className={`${playpenSans.className} ${css.bannerOneText}`}>
                <h1>Menstrual health and</h1>
                <h1>period care</h1>
            </div>
            <div className={`${css.bannerTwoHelperText} ${roboto.className}`}>
                <h4>Periods are part of life, embrace the flow.</h4>
                <h4>Healthy habits, let your body grow.</h4>
            </div>
            <BootstrapButton variant="contained" classes={{ startIcon: css.bannerTwoBtnIcon }} startIcon={<EastIcon style={matchesSmallScreen ? {width: 14, height: 14} : {}} />} onClick={handleDialogOpen}>
                Get Appointment
            </BootstrapButton>
        </div>
    )
}

export const BannerTwo = () => {
    const { openDialog, handleDialogOpen, handleDialogClose } = useAppointmentDialogState();
    const matchesSmallScreen = useMediaQuery('(max-width: 480px)');

    return (
        <div className={css.bannerTwoContainer}>
            <div className={css.bannerTwoImgContainer}>
                <Image
                    alt="gynae check image"
                    src="/images/bg/bg3.jpg"
                    objectFit="cover"
                    className={css.bannerOneImg}
                    fill
                />
            </div>
            {matchesSmallScreen ?
                <Paper className={css.bannerPaper} elevation={1}>
                    <Content handleDialogOpen={handleDialogOpen} />
                </Paper> 
            : <Content handleDialogOpen={handleDialogOpen} />}
            <AppointmentDialog open={openDialog} handleClose={handleDialogClose} />
        </div>
    )
}