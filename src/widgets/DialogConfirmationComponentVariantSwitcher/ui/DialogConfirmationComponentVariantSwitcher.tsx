import classes from './DialogConfirmationComponentVariantSwitcher.module.scss';
import cn from 'classnames';
import React from 'react';
import { Box, Switch, Typography } from '@mui/material';
import { useStateContext } from '@/app/providers/StateContextProvider';
import { useTranslation } from 'react-i18next';

interface IDialogConfirmationComponentVariantSwitcherProps {
	className?: string;
}

export const DialogConfirmationComponentVariantSwitcher: React.FC<IDialogConfirmationComponentVariantSwitcherProps> = (props) => {
    const {
        className = '',
    } = props;

    const {
        dialogConfirmationComponentVariant,
        onToggleDialogConfirmationComponentVariant
    } = useStateContext();

    const { t } = useTranslation();

    return (
        <Box className={ cn( classes.switcherComponent, {}, [ className ] ) }>
            <Typography variant='h5'>{ t( 'dialog_confirmation_component_variant_title' ) }</Typography>
            <Box>
                <Typography variant='caption'>
                    { t( 'package_variant_component' ) }
                </Typography>
                <Switch
                    checked={ dialogConfirmationComponentVariant === 'custom' }
                    onChange={onToggleDialogConfirmationComponentVariant}
                />
                <Typography variant='caption'>
                    { t( 'custom_variant_component' ) }
                </Typography>
            </Box>
        </Box>
    );
};
