import classes from './LanguageSwitcher.module.scss';
import cn from 'classnames';
import React, { useCallback } from 'react';
import RuFlag from '@/shared/assets/img/svg/ru_flag.svg?react';
import UsFlag from '@/shared/assets/img/svg/us_flag.svg?react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface ILanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher: React.FC<ILanguageSwitcherProps> = (props) => {
    const {
        className = '',
    } = props;

    const {
        i18n
    } = useTranslation();

    const [ anchorEl, setAnchorEl ] = React.useState<null | HTMLElement>( null );
    const open = Boolean( anchorEl );

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl( event.currentTarget );
    };

    const handleClose = () => {
        setAnchorEl( null );
    };

    const onToggleLanguage = async () => {
        await i18n.changeLanguage( i18n.language === 'ru' ? 'en' : 'ru' );
        handleClose();
    };

    const renderFlag = useCallback( (reverse: boolean = false) => {
        if (reverse) {
            return i18n.language === 'ru'
                ? <UsFlag/>
                : <RuFlag/>;
        }

        return i18n.language === 'ru'
            ? <RuFlag/>
            : <UsFlag/>;
    }, [ i18n.language ] );

    return (
        <Box className={ cn( '', {}, [ className ] ) }>
            <IconButton
                className={ classes.switcherButton }
                id="language-switch-button"
                aria-controls={ open ? 'language-switch-list' : undefined }
                aria-haspopup="true"
                aria-expanded={ open ? 'true' : undefined }
                onClick={ handleClick }
            >
                { renderFlag() }
            </IconButton>
            <Menu
                classes={{
                    paper: classes.switcherListPaper,
                    list: classes.switcherList,
                }}
                id="language-switch-list"
                anchorEl={ anchorEl }
                open={ open }
                onClose={ handleClose }
                aria-labelledby="language-switch-button"
            >
                <MenuItem onClick={ onToggleLanguage }>
                    <IconButton
                        className={ classes.switcherButton }
                    >
                        { renderFlag( true ) }
                    </IconButton>
                </MenuItem>
            </Menu>
        </Box>
    );
};
