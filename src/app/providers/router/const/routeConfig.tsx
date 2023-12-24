import { GuidePage } from '@/pages/GuidePage';
import { MainPage } from '@/pages/MainPage';
import { Navigate, RouteProps } from 'react-router-dom';

export type AppRoute = 'main' | 'guide' | 'not_found';

export const RoutePath: Record<AppRoute, string> = {
    guide: '/guide',
    main: '/',
    not_found: '*',
};

export const routeConfig: Record<AppRoute, RouteProps> = {
    guide: {
        path: RoutePath.guide,
        element: <GuidePage/>
    },
    main: {
        path: RoutePath.main,
        element: <MainPage/>,
    },
    not_found: {
        path: RoutePath.not_found,
        element: <Navigate to={ RoutePath.main }
            replace/>,
    }
};
