import React from 'react';
import {
    DialogConfirmationComponentVariant,
    StateContext,
    StateContextProps
} from '../lib/StateContext';

interface IStateContextProviderProps {
    children: React.ReactNode;
}

export const StateContextProvider: React.FC<IStateContextProviderProps> = (props) => {
    const {
        children
    } = props;

    const [ dialogConfirmationComponentVariant, setDialogConfirmationComponentVariant ] = React.useState<DialogConfirmationComponentVariant>( 'package' );

    const providerValue: StateContextProps = React.useMemo( () => ( {
        dialogConfirmationComponentVariant,
        setDialogConfirmationComponentVariant
    } ), [ dialogConfirmationComponentVariant ] );

    return (
        <StateContext.Provider value={ providerValue }>
            { children }
        </StateContext.Provider>
    );
};
