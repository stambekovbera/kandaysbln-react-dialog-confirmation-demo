import './styles/index.scss';
import React from 'react';
import { AppRouter } from '@/app/providers/router';
import { DialogConfirmationComponentVariant } from '@/widgets/DialogConfirmationComponentVariant';
import { Header } from '@/widgets/Header';

export const App: React.FC = () => {
    return (
        <>
            <div className={ 'wrapper' }>
                <Header/>
                <AppRouter/>
            </div>
            <DialogConfirmationComponentVariant/>
        </>
    );
};
