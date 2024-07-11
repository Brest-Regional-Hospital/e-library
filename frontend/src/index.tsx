import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { App } from 'app/App';
import ReactDOM from 'react-dom/client';
import 'dayjs/locale/ru';
import { StoreContext, store } from 'app/store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <LocalizationProvider adapterLocale="ru" dateAdapter={AdapterDayjs}>
        <StoreContext.Provider value={store}>
            <App />
        </StoreContext.Provider>
    </LocalizationProvider>,
);
