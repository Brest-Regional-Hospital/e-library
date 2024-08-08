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
    TextField,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useStore } from 'app/store';
import { observer } from 'mobx-react-lite';
import {
    mockPublications,
    Publication,
} from 'pages/CatalogPage/lib/mockPublications/mockPublications';
import React, { useState } from 'react';
import { Categories } from '../lib/categories';
import { FiltersCard, FiltersContainer } from './FiltersStyle';

const produceAuthors = (mockPublications: Publication[]) => {
    const surnames = mockPublications
        .filter((p) => p.type === 'Книга')
        .map((b) => b.author);
    const uniqueSurnames = Array.from(new Set(surnames));

    return uniqueSurnames;
};

const produceGenres = (mockPublications: Publication[]) => {
    const genres = mockPublications
        .filter((p) => p.type === 'Книга')
        .map((b) => b.genre);
    const uniqueGenres = Array.from(new Set(genres));

    return uniqueGenres;
};

const genres = produceGenres(mockPublications);
const authors = produceAuthors(mockPublications);

interface FiltersProps {
    close?: () => void;
}

export const Filters = observer(({ close }: FiltersProps) => {
    const { catalogStore } = useStore();
    const [formValues, setFormValues] = useState<any>({
        title: '',
        category: Categories.All,
    });
    const [genre, setGenre] = useState<any>();
    const [author, setAuthors] = useState<any>();
    const [date, setDate] = useState<any>();

    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        catalogStore.setFilters(formValues, genre, author, date);
        catalogStore.fetchPublications();

        close?.();
    };

    const handleInputChange = ({ target }: any) => {
        setFormValues((prev: any) => ({
            ...prev,
            [target.name]: target.value,
        }));
    };

    const onResetButtonClick = () => {
        setGenre(undefined);
        setAuthors(undefined);
        setDate(undefined);
        setFormValues({
            title: '',
            category: Categories.All,
        });

        catalogStore.resetFilters();
        catalogStore.fetchPublications();

        close?.();
    };

    return (
        <FiltersCard>
            <form onSubmit={onFormSubmit}>
                <FiltersContainer>
                    <FormControl fullWidth size="small" variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-search">
                            Название
                        </InputLabel>
                        <OutlinedInput
                            name="title"
                            value={formValues.title}
                            onChange={handleInputChange}
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
                            name="category"
                            value={formValues.category}
                            labelId="category-select-label"
                            id="category-select"
                            label="Категория"
                            onChange={handleInputChange}
                        >
                            <MenuItem value={Categories.All}>
                                Все издания
                            </MenuItem>
                            <MenuItem value={Categories.Book}>Книга</MenuItem>
                            <MenuItem value={Categories.Magazine}>
                                Журнал
                            </MenuItem>
                            <MenuItem value={Categories.Newspaper}>
                                Газета
                            </MenuItem>
                        </Select>
                    </FormControl>
                    {formValues.category === Categories.Book && (
                        <>
                            <Autocomplete
                                size="small"
                                fullWidth
                                multiple
                                limitTags={2}
                                id="genres"
                                options={genres}
                                value={genre}
                                onChange={(event, newValue) => {
                                    setGenre(newValue);
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        // eslint-disable-next-line react/jsx-props-no-spreading
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
                                value={author}
                                onChange={(event, newValue) => {
                                    setAuthors(newValue);
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        // eslint-disable-next-line react/jsx-props-no-spreading
                                        {...params}
                                        label="Автор"
                                        placeholder="Автор"
                                    />
                                )}
                            />
                        </>
                    )}
                </FiltersContainer>
                {(formValues.category === Categories.Magazine ||
                    formValues.category === Categories.Newspaper) && (
                    <DatePicker
                        value={date}
                        onChange={(value) => setDate(value)}
                        label="Дата издания"
                        format="YYYY/MM/DD"
                        sx={{ marginTop: '15px', width: '100%' }}
                    />
                )}
                <div style={{ marginTop: '15px', display: 'flex' }}>
                    <Button
                        type="submit"
                        variant="contained"
                        startIcon={<SearchIcon />}
                        sx={{ marginRight: '15px' }}
                    >
                        Поиск
                    </Button>
                    <Button
                        onClick={onResetButtonClick}
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                    >
                        Сбросить
                    </Button>
                </div>
            </form>
        </FiltersCard>
    );
});
