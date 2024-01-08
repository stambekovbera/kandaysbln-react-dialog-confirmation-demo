import React from 'react';
import { Box } from '@mui/material';
import { DialogConfirmationComponentVariantSwitcher } from '@/widgets/DialogConfirmationComponentVariantSwitcher';
import { DialogConfirmationOpenButton } from '@/widgets/DialogConfirmationOpenButton';

const MainPage: React.FC = () => {
    return (
        <Box mt={ 2 }>
            <DialogConfirmationComponentVariantSwitcher/>
            <Box
                mt={ 2 }
                sx={ {
                    display: 'flex',
                    justifyContent: 'center'
                } }
            >
                <DialogConfirmationOpenButton/>
            </Box>
        </Box>
    );
};

export default MainPage;
