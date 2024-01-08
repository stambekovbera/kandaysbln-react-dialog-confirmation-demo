import React from 'react';
import { Box } from '@mui/material';
import { DialogConfirmationComponentVariantSwitcher } from '@/widgets/DialogConfirmationComponentVariantSwitcher';
import { DialogConfirmationOpenButton } from '@/widgets/DialogConfirmationOpenButton';
import { LinkToGuide } from '@/widgets/LinkToGuide';

const MainPage: React.FC = () => {
    return (
        <Box mt={ 2 }>
            <DialogConfirmationComponentVariantSwitcher/>
            <Box
                mt={ 2 }
                sx={ {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px',
                } }
            >
                <DialogConfirmationOpenButton/>
                <LinkToGuide/>
            </Box>
        </Box>
    );
};

export default MainPage;
