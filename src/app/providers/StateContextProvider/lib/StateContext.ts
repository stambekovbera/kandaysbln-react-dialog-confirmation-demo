import { createContext } from 'react';

export type DialogConfirmationComponentVariant = 'package' | 'custom';

export interface StateContextProps {
    dialogConfirmationComponentVariant: DialogConfirmationComponentVariant;
    setDialogConfirmationComponentVariant?: (variant: DialogConfirmationComponentVariant) => void
}

export const StateContext = createContext<StateContextProps>( {
    dialogConfirmationComponentVariant: 'package',
} );
