import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
} from '@mui/material';
import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { useStore } from 'app/store';
import { Categories } from 'features/Filters/lib/categories';
import { FiltersContainer } from 'features/Filters/ui/FiltersStyle';
import { observer } from 'mobx-react-lite';
import { Publication } from 'pages/CatalogPage';

interface EditPublicationModalProps {
    open: boolean;
    handleClose: () => void;
    publication: Publication;
}

export const EditPublicationModal = observer(
    ({ open, handleClose, publication }: EditPublicationModalProps) => {
        const { catalogStore } = useStore();
        const [formValues, setFormValues] = useState<any>({
            title: publication.title,
            genre: publication.genre,
            author: publication.author,
            bookNumber: publication.bookNumber,
            category: publication.type,
            amountAvailable: publication.amountAvailable,
        });
        const [date, setDate] = useState<any>(publication.publicationDate);

        const handleInputChange = ({ target }: any) => {
            setFormValues((prev: any) => ({
                ...prev,
                [target.name]: target.value,
            }));
        };

        const onFormSubmit = async (event: React.FormEvent) => {
            event.preventDefault();

            await catalogStore.editPublication(
                {
                    ...formValues,
                    type: formValues.category,
                    publicationDate: date,
                },
                publication.id,
            );

            handleClose();
        };

        return (
            <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
                <DialogTitle sx={{ paddingBottom: '0 !important' }}>
                    Редактировать публикацию
                </DialogTitle>
                <DialogContent sx={{ paddingTop: '20px !important' }}>
                    <form onSubmit={onFormSubmit}>
                        <FiltersContainer>
                            <FormControl
                                fullWidth
                                size="small"
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-search">
                                    Название
                                </InputLabel>
                                <OutlinedInput
                                    name="title"
                                    value={formValues.title}
                                    onChange={handleInputChange}
                                    id="outlined-adornment-search"
                                    type="text"
                                    label="Название"
                                />
                            </FormControl>
                            <FormControl
                                fullWidth
                                size="small"
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-search">
                                    Номер издания
                                </InputLabel>
                                <OutlinedInput
                                    name="bookNumber"
                                    value={formValues.bookNumber}
                                    onChange={handleInputChange}
                                    id="outlined-adornment-search"
                                    type="text"
                                    label="Номер издания"
                                />
                            </FormControl>
                            <FormControl
                                fullWidth
                                size="small"
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-search">
                                    В наличие
                                </InputLabel>
                                <OutlinedInput
                                    name="amountAvailable"
                                    value={formValues.amountAvailable}
                                    onChange={handleInputChange}
                                    id="outlined-adornment-search"
                                    type="text"
                                    label="В наличие"
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
                                    <MenuItem value={Categories.Book}>
                                        Книга
                                    </MenuItem>
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
                                    <FormControl
                                        fullWidth
                                        size="small"
                                        variant="outlined"
                                    >
                                        <InputLabel htmlFor="outlined-adornment-search">
                                            Жанр
                                        </InputLabel>
                                        <OutlinedInput
                                            name="genre"
                                            value={formValues.genre}
                                            onChange={handleInputChange}
                                            id="outlined-adornment-search"
                                            type="text"
                                            label="Жанр"
                                        />
                                    </FormControl>
                                    <FormControl
                                        fullWidth
                                        size="small"
                                        variant="outlined"
                                    >
                                        <InputLabel htmlFor="outlined-adornment-search">
                                            Автор
                                        </InputLabel>
                                        <OutlinedInput
                                            name="author"
                                            value={formValues.author}
                                            onChange={handleInputChange}
                                            id="outlined-adornment-search"
                                            type="text"
                                            label="Автор"
                                        />
                                    </FormControl>
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
                                sx={{ marginRight: '15px' }}
                                disabled={catalogStore.isAddPubLoading}
                            >
                                Редактировать
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        );
    },
);
