import './styles/index.scss';
import React from 'react';
import { AppRouter } from '@/app/providers/router';

export const App: React.FC = () => {
    return (
        <div className={ 'wrapper' }>
            <AppRouter/>
        </div>
    );
};
