import cn from 'classnames';
import React from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import { Translate as TranslateIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

interface ILanguageSwitcherProps {
    className?: string;
}

type LANGUAGES_VALUE = 'ru' | 'en';

interface ILanguages {
    value: LANGUAGES_VALUE;
    title: string;
}

const LANGUAGES: ILanguages[] = [
    {
        value: 'ru',
        title: 'Русский',
    },
    {
        value: 'en',
        title: 'English',
    }
];

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

    const onChangeLanguage = async (lang: LANGUAGES_VALUE) => {
        if (i18n.language !== lang) {
            await i18n.changeLanguage( lang );
            handleClose();

            return;
        }
    };

    return (
        <Box className={ cn( '', {}, [ className ] ) }>
            <IconButton
                id="language-switch-button"
                aria-controls={ open ? 'language-switch-list' : undefined }
                aria-haspopup="true"
                aria-expanded={ open ? 'true' : undefined }
                onClick={ handleClick }
            >
                <TranslateIcon sx={ { color: '#fff' } }/>
            </IconButton>
            <Menu
                id="language-switch-list"
                anchorEl={ anchorEl }
                open={ open }
                onClose={ handleClose }
                aria-labelledby="language-switch-button"
            >
                { LANGUAGES.map( (item) => (
                    <MenuItem key={ `language-${ item.value }` }
                        onClick={ () => onChangeLanguage( item.value ) }>
                        { item.title }
                    </MenuItem>
                ) ) }
            </Menu>
        </Box>
    );
};
