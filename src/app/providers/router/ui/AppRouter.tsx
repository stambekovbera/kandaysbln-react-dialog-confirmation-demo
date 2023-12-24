import React from 'react';
import { PageLoader } from '@/widgets/PageLoader';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../const/routeConfig';

export const AppRouter: React.FC = () => {
    return (
        <React.Suspense fallback={ <PageLoader/> }>
            <Routes>
                { Object.values( routeConfig ).map( ({ path, element }) => (
                    <Route key={ path }
                        path={ path }
                        element={ ( <div className="page-wrapper">{ element }</div> ) }/>
                ) ) }
            </Routes>
        </React.Suspense>
    );
};
