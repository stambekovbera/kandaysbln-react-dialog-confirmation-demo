import './shared/config/i18n/i18n';
import 'kandaysbln-react-dialog-confirmation/kandaysbln-react-dialog-confirmation.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@/app/App';
import { BrowserRouter } from 'react-router-dom';
import { DialogConfirmationProvider } from 'kandaysbln-react-dialog-confirmation';
import { StateContextProvider } from '@/app/providers/StateContextProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <DialogConfirmationProvider>
                <StateContextProvider>
                    <App />
                </StateContextProvider>
            </DialogConfirmationProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
