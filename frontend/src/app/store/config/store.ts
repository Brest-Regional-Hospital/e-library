import { CatalogStore } from 'app/store/config/CatalogStore';
import CounterStore from 'entities/Counter/model/store/CounterStore';
import { createContext, useContext } from 'react';

interface Store {
    counterStore: CounterStore;
    catalogStore: CatalogStore;
}

export const store: Store = {
    counterStore: new CounterStore(),
    catalogStore: new CatalogStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
