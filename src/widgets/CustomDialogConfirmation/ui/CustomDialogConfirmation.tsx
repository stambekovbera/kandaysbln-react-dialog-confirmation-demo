import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useDialogConfirmation } from 'kandaysbln-react-dialog-confirmation';

export const CustomDialogConfirmation: React.FC = () => {
    const {
        acceptEvent,
        cancelEvent,
        isOpen,
        cancelButtonText,
        acceptButtonText,
        description,
        title,
        onCloseDialogConfirmation,
    } = useDialogConfirmation( true );

    const onClose = React.useCallback( () => {
        onCloseDialogConfirmation();
    }, [ onCloseDialogConfirmation ] );

    const handleCloseEvent = React.useCallback( () => {
        if (cancelEvent) {
            cancelEvent();
        }

        onClose();
    }, [ cancelEvent, onClose ] );

    const handleAcceptEvent = React.useCallback( () => {
        if (acceptEvent) {
            acceptEvent();
        }

        onClose();
    }, [ acceptEvent, onClose ] );

    return (
        <Dialog
            fullWidth
            maxWidth='sm'
            open={ isOpen }
        >
            <DialogTitle>
                { title }
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    { description }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    variant='outlined'
                    onClick={ handleCloseEvent }
                >
                    { cancelButtonText }
                </Button>
                <Button
                    variant='contained'
                    onClick={ handleAcceptEvent }
                >
                    { acceptButtonText }
                </Button>
            </DialogActions>
        </Dialog>
    );
};
