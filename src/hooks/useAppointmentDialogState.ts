import { useState } from "react";

export const useAppointmentDialogState = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  return {
    openDialog,
    handleDialogClose,
    handleDialogOpen,
  };
};
