import React, { useCallback } from 'react';
import { Box, Button } from '@mui/material';
import { DialogConfirmationComponentVariantSwitcher } from '@/widgets/DialogConfirmationComponentVariantSwitcher';
import { useDialogConfirmation } from 'kandaysbln-react-dialog-confirmation';
import { useTranslation } from 'react-i18next';

const MainPage: React.FC = () => {

    const { t } = useTranslation();

    const {
        onOpenDialogConfirmation
    } = useDialogConfirmation( false );

    const openDialogConfirmation = useCallback( (isConfirm = false) => {
        if (!isConfirm) {
            onOpenDialogConfirmation( {
                title: t( 'dialog_confirmation_title' ),
                description: t( 'dialog_confirmation_description' ),
                acceptButtonText: t( 'dialog_confirmation_accept_button_text' ),
                cancelButtonText: t( 'dialog_confirmation_cancel_button_text' ),
                acceptEvent: openDialogConfirmation.bind( null, true ),
                cancelEvent: () => {
                    alert( t( 'dialog_confirmation_cancel_text' ) );
                },
            } );
            return;
        }

        alert( t( 'dialog_confirmation_confirm_text' ) );

        return;

    }, [ onOpenDialogConfirmation, t ] );

    return (
        <Box mt={ 2 }>
            <DialogConfirmationComponentVariantSwitcher/>
            <Box
                mt={ 2 }
                sx={ {
                    display: 'flex',
                    justifyContent: 'center'
                } }
            >
                <Button
                    variant='outlined'
                    onClick={ () => openDialogConfirmation(false) }
                >
                    { t( 'open_button_text' ) }
                </Button>
            </Box>
        </Box>
    );
};

export default MainPage;
