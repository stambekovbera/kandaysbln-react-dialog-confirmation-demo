import classes from './DialogConfirmationOpenButton.module.scss';
import cn from 'classnames';
import React, { useCallback } from 'react';
import { Button } from '@mui/material';
import { useDialogConfirmation } from 'kandaysbln-react-dialog-confirmation';
import { useTranslation } from 'react-i18next';

interface IDialogConfirmationOpenButtonProps {
	className?: string;
}

export const DialogConfirmationOpenButton: React.FC<IDialogConfirmationOpenButtonProps> = (props) => {
    const {
        className = '',
    } = props;

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

    return <Button
        className={ cn( classes.button, [ className ], {} ) }
        variant='outlined'
        onClick={ () => openDialogConfirmation( false ) }
    >
        { t( 'open_button_text' ) }
    </Button>;
};
