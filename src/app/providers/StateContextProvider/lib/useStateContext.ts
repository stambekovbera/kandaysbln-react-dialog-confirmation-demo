import { DialogConfirmationComponentVariant, StateContext } from './StateContext';
import { useContext } from 'react';

interface IUseStateContextResult {
    dialogConfirmationComponentVariant: DialogConfirmationComponentVariant;
    onToggleDialogConfirmationComponentVariant: () => void
}

export const useStateContext = (): IUseStateContextResult => {
    const {
        setDialogConfirmationComponentVariant,
        dialogConfirmationComponentVariant
    } = useContext( StateContext );

    const onToggleDialogConfirmationComponentVariant = () => {
        if (setDialogConfirmationComponentVariant) {
            if (dialogConfirmationComponentVariant === 'custom') {
                setDialogConfirmationComponentVariant( 'package' );

                return;
            }

            setDialogConfirmationComponentVariant( 'custom' );
        }
    };

    return {
        dialogConfirmationComponentVariant,
        onToggleDialogConfirmationComponentVariant,
    };
};
