import React from 'react';
import { Container } from '@mui/material';
import { PageLoader } from '@/widgets/PageLoader';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../const/routeConfig';

export const AppRouter: React.FC = () => {
    return (
        <React.Suspense fallback={ <PageLoader/> }>
            <Routes>
                { Object.values( routeConfig ).map( ({ path, element }) => (
                    <Route
                        key={ path }
                        path={ path }
                        element={ (
                            <Container className="page-wrapper"
                                maxWidth='lg'>
                                { element }
                            </Container>
                        ) }
                    />
                ) ) }
            </Routes>
        </React.Suspense>
    );
};
