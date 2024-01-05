import React from 'react';
import { CustomDialogConfirmation } from '@/widgets/CustomDialogConfirmation';
import { DialogConfirmationModal } from 'kandaysbln-react-dialog-confirmation';
import { useStateContext } from '@/app/providers/StateContextProvider';

export const DialogConfirmationComponentVariant: React.FC = () => {

    const {
        dialogConfirmationComponentVariant
    } = useStateContext();

    if (dialogConfirmationComponentVariant === 'package') {
        return <DialogConfirmationModal/>;
    }

    return <CustomDialogConfirmation/>;
};
