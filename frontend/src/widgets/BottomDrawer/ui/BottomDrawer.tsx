import { SwipeableDrawer } from '@mui/material';
import { Filters } from 'widgets/Filters/ui/Filters';

interface BottomDrawerProps {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

export const BottomDrawer = ({ isOpen, open, close }: BottomDrawerProps) => {
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
