import './index.css';
import './shared/config/i18n/i18n';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@/app/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
