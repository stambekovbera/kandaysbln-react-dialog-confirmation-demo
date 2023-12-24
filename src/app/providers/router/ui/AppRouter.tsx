import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../const/routeConfig';

export const AppRouter: React.FC = () => {
    return (
        <React.Suspense fallback={ 'loading' }>
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
