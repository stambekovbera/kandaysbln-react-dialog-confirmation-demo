import classes from './PageLoader.module.scss';
import cn from 'classnames';
import React from 'react';
import { CircularProgress } from '@mui/material';

interface IPageLoaderProps {
	className?: string;
}

export const PageLoader: React.FC<IPageLoaderProps> = (props) => {
    const {
        className = '',
    } = props;
    return (
        <div className={ cn( classes.pageLoader, {}, [ className ] ) }>
            <CircularProgress/>
        </div>
    );
};
