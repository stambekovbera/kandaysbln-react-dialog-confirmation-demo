import classes from './LinkToGuide.module.scss';
import cn from 'classnames';
import React from 'react';
import { Link } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface ILinkToGuideProps {
	className?: string;
}

export const LinkToGuide: React.FC<ILinkToGuideProps> = (props) => {
    const {
        className = '',
    } = props;

    const {t} = useTranslation();

    return (
        <Link
            variant='h5'
            className={ cn( classes.link, {}, [ className ] ) }
            href={ t( 'guide_link' ) }
            target='_blank'
            rel="noreferrer"
        >
            { t( 'guide_link_title' ) }
        </Link>
    );
};
