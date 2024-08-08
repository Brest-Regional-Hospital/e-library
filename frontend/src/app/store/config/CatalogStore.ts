import dayjs from 'dayjs';
import { makeAutoObservable } from 'mobx';
import { mockPublications, Publication } from 'pages/CatalogPage';
import { Categories } from 'features/Filters/lib/categories';

export class CatalogStore {
    publications: Publication[] = [];
    isLoading = false;
    isAddPubLoading = false;
    filters: any = {};

    constructor() {
        makeAutoObservable(this);
    }

    fetchPublications() {
        this.isLoading = true;
        this.clearPublications();

        setTimeout(() => {
            const filteredMockPublications =
                this.filterMockPublications(mockPublications);
            this.setPublications(filteredMockPublications);
            this.isLoading = false;
        }, 2000);
    }

    addPublication(publication: Publication) {
        this.isAddPubLoading = true;
        const lastId = this.publications[this.publications.length - 1].id + 1;
        const publicationWithId = { ...publication, id: lastId };

        return new Promise((resolve) => {
            setTimeout(() => {
                this.publications.unshift(publicationWithId);
                this.isAddPubLoading = false;

                resolve('');
            }, 2000);
        });
    }

    editPublication(publication: Publication, id: number) {
        this.isAddPubLoading = true;

        return new Promise((resolve) => {
            setTimeout(() => {
                this.publications = this.publications.map((p) =>
                    p.id === id ? publication : p,
                );
                this.isAddPubLoading = false;

                resolve('');
            }, 2000);
        });
    }

    deletePublication(id: number) {
        this.isLoading = true;

        return new Promise((resolve) => {
            setTimeout(() => {
                this.publications = this.publications.filter(
                    (p) => p.id !== id,
                );
                this.isLoading = false;

                resolve('');
            }, 2000);
        });
    }

    setFilters(filters: any, genres: string[], authors: string[], date: any) {
        this.filters = filters;

        const formattedDate = date ? dayjs(date).format('YYYY/MM/DD') : date;

        this.filters = { ...filters, genres, authors, date: formattedDate };
    }

    resetFilters() {
        this.filters = {};
    }

    private clearPublications() {
        this.publications = [];
    }

    private filterMockPublications(mockPublications: Publication[]) {
        let filteredMockPublications = mockPublications;

        if (this.filters.title) {
            filteredMockPublications = filteredMockPublications.filter(
                (p) =>
                    p.title
                        .toLowerCase()
                        .indexOf(this.filters.title.toLowerCase()) > -1,
            );
        }

        if (this.filters.genres && this.filters.genres.length > 0) {
            filteredMockPublications = filteredMockPublications.filter((p) =>
                this.filters.genres.includes(p.genre),
            );
        }

        if (this.filters.authors && this.filters.authors.length > 0) {
            filteredMockPublications = filteredMockPublications.filter((p) =>
                this.filters.authors.includes(p.author),
            );
        }

        if (this.filters.date && this.filters.date.length > 0) {
            filteredMockPublications = filteredMockPublications.filter(
                (p) => p.publicationDate === this.filters.date,
            );
        }

        if (this.filters.category && this.filters.category !== Categories.All) {
            filteredMockPublications = filteredMockPublications.filter(
                (p) => p.type === this.filters.category,
            );
        }

        return filteredMockPublications;
    }

    private setPublications(publications: Publication[]) {
        this.publications = publications;
    }
}
