import { SwipeableDrawer } from '@mui/material';
import { useState } from 'react';
import { Filters } from 'widgets/Filters/ui/Filters';

export const BottomDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return (
        <SwipeableDrawer
            anchor="bottom"
            open={isOpen}
            onClose={close}
            onOpen={open}
        >
            <Filters />
        </SwipeableDrawer>
    );
};
