import './shared/config/i18n/i18n';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@/app/App';
import { BrowserRouter } from 'react-router-dom';
import { StateContextProvider } from '@/app/providers/StateContextProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <StateContextProvider>
                <App />
            </StateContextProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
