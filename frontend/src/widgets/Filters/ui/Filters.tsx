import SearchIcon from '@mui/icons-material/Search';
import NameIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    Autocomplete,
    Button,
    FormControl,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    TextField,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useState } from 'react';

const genres = ['Художественная', 'Научная', 'Детективная'];
const authors = ['Пушкин', 'Киз', 'Достоевский', 'Толстой'];

export const Filters = () => {
    const [category, setCategory] = useState('');

    const handleCategoryChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };

    return (
        <>
            <FormControl fullWidth size="small" variant="outlined">
                <InputLabel htmlFor="outlined-adornment-search">
                    Название
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-search"
                    type="text"
                    endAdornment={
                        <InputAdornment position="end">
                            <NameIcon />
                        </InputAdornment>
                    }
                    label="Название"
                />
            </FormControl>
            <FormControl fullWidth size="small" sx={{ marginTop: '15px' }}>
                <InputLabel id="category-select-label">Категория</InputLabel>
                <Select
                    labelId="category-select-label"
                    id="category-select"
                    value={category}
                    label="Категория"
                    onChange={handleCategoryChange}
                >
                    <MenuItem value="Книга">Книга</MenuItem>
                    <MenuItem value="Журнал">Журнал</MenuItem>
                    <MenuItem value="Газета">Газета</MenuItem>
                </Select>
            </FormControl>
            {category === 'Книга' && (
                <Autocomplete
                    size="small"
                    fullWidth
                    multiple
                    limitTags={2}
                    id="genres"
                    options={genres}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Жанр литературы"
                            placeholder="Жанр"
                        />
                    )}
                    sx={{ marginTop: '15px' }}
                />
            )}
            {category === 'Книга' && (
                <Autocomplete
                    size="small"
                    fullWidth
                    multiple
                    limitTags={2}
                    id="authors"
                    options={authors}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Автор"
                            placeholder="Автор"
                        />
                    )}
                    sx={{ marginTop: '15px' }}
                />
            )}
            {(category === 'Журнал' || category === 'Газета') && (
                <DatePicker
                    label="Дата издания"
                    format="YYYY/MM/DD"
                    sx={{ marginTop: '15px', width: '100%' }}
                />
            )}
            <Button
                variant="contained"
                startIcon={<SearchIcon />}
                sx={{ marginTop: '15px', marginRight: '15px' }}
            >
                Поиск
            </Button>
            <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                sx={{ marginTop: '15px' }}
            >
                Сбросить
            </Button>
        </>
    );
};
