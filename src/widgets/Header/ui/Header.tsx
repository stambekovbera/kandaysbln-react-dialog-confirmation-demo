import classes from './Header.module.scss';
import cn from 'classnames';
import Logo from '@/shared/assets/img/svg/kandaysbln-logo-white.svg?react';
import React from 'react';
import { Box, Container } from '@mui/material';
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher';
import { Link } from 'react-router-dom';

interface IHeaderProps {
	className?: string;
}

export const Header: React.FC<IHeaderProps> = (props) => {
    const {
        className = '',
    } = props;

    return (
        <Box className={ cn( classes.header, {}, [ className ] ) }>
            <Container maxWidth='lg'>
                <Box className={ classes.headerInner }>
                    <Link className={classes.headerLogoWrapper}
                        to='/'>
                        <Logo/>
                    </Link>
                    <LanguageSwitcher/>
                </Box>
            </Container>
        </Box>
    );
};
