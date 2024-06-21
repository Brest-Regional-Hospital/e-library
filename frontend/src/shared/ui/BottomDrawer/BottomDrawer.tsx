import { SwipeableDrawer } from '@mui/material';
import { ReactNode } from 'react';

interface BottomDrawerProps {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    children: ReactNode;
}

export const BottomDrawer = (props: BottomDrawerProps) => {
    const { isOpen, open, close, children } = props;

    return (
        <SwipeableDrawer
            anchor="bottom"
            open={isOpen}
            onClose={close}
            onOpen={open}
        >
            {children}
        </SwipeableDrawer>
    );
};
