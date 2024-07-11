import { Button } from '@mui/material';
import { useStore } from 'app/store';
import CounterStore from 'entities/Counter/model/store/CounterStore';
import { observer } from 'mobx-react-lite';

export const Counter = observer(() => {
    const { counterStore } = useStore();

    const increment = () => {
        counterStore.increment();
    };

    const decrement = () => {
        counterStore.decrement();
    };

    return (
        <div>
            <h1>Value = {counterStore.value}</h1>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
    );
});
