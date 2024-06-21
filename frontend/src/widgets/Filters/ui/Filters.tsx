import DeleteIcon from '@mui/icons-material/Delete';
import NameIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
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
import { Categories } from '../lib/categories';
import { FiltersCard, FiltersContainer } from './FiltersStyle';

const genres = ['Художественная', 'Научная', 'Детективная'];
const authors = ['Пушкин', 'Киз', 'Достоевский', 'Толстой'];

export const Filters = () => {
    const [category, setCategory] = useState(Categories.All);

    const handleCategoryChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as Categories);
    };

    return (
        <FiltersCard>
            <FiltersContainer>
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
                <FormControl fullWidth size="small">
                    <InputLabel id="category-select-label">
                        Категория
                    </InputLabel>
                    <Select
                        labelId="category-select-label"
                        id="category-select"
                        value={category}
                        label="Категория"
                        onChange={handleCategoryChange}
                    >
                        <MenuItem value={Categories.All}>Все издания</MenuItem>
                        <MenuItem value={Categories.Book}>Книга</MenuItem>
                        <MenuItem value={Categories.Magazine}>Журнал</MenuItem>
                        <MenuItem value={Categories.Newspaper}>Газета</MenuItem>
                    </Select>
                </FormControl>
                {category === Categories.Book && (
                    <>
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
                        />
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
                        />
                    </>
                )}
            </FiltersContainer>
            {(category === Categories.Magazine ||
                category === Categories.Newspaper) && (
                <DatePicker
                    label="Дата издания"
                    format="YYYY/MM/DD"
                    sx={{ marginTop: '15px', width: '100%' }}
                />
            )}
            <div style={{ marginTop: '15px' }}>
                <Button
                    variant="contained"
                    startIcon={<SearchIcon />}
                    sx={{ marginRight: '15px' }}
                >
                    Поиск
                </Button>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Сбросить
                </Button>
            </div>
        </FiltersCard>
    );
};
