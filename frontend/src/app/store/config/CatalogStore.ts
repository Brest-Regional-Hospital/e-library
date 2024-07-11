import { makeAutoObservable } from 'mobx';
import {
    MockPublications,
    mockPublications,
    Publication,
    PublicationsCategories,
} from 'pages/CatalogPage';
import { Categories } from 'widgets/Filters/lib/categories';

export class CatalogStore {
    publications: MockPublications = {
        books: [],
        newspapers: [],
        magazines: [],
    };
    allPublications: Publication[] = [];
    isLoading = false;
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
            this.setAllPublications();
            this.isLoading = false;
        }, 2000);
    }

    setFilters(filters: any, genres: string[], authors: string[]) {
        this.filters = filters;

        this.filters = { ...filters, genres, authors };
    }

    resetFilters() {
        this.filters = {};
    }

    private clearPublications() {
        this.publications = {
            books: [],
            newspapers: [],
            magazines: [],
        };
    }

    // eslint-disable-next-line class-methods-use-this
    private filterPublications<T extends Publication>(
        mockPublications: T[],
        property: keyof T,
        searchTerms: string[],
    ): T[] {
        return mockPublications.filter((publication) =>
            searchTerms.some((term) =>
                publication[property]
                    ?.toString()
                    .toLowerCase()
                    .includes(term.toLowerCase()),
            ),
        );
    }

    private filterAllCategories = (
        publications: MockPublications,
        searchTarget: keyof Publication,
        searchTerm: string[],
    ): MockPublications => {
        return {
            books: this.filterPublications(
                publications.books,
                searchTarget,
                searchTerm,
            ),
            magazines: this.filterPublications(
                publications.magazines,
                searchTarget,
                searchTerm,
            ),
            newspapers: this.filterPublications(
                publications.newspapers,
                searchTarget,
                searchTerm,
            ),
        };
    };

    private filterMockPublications(mockPublications: MockPublications) {
        let filteredMockPublications = mockPublications;

        if (this.filters.title) {
            filteredMockPublications = this.filterAllCategories(
                mockPublications,
                'title',
                [this.filters.title],
            );
        }

        if (this.filters.genres && this.filters.genres.length > 0) {
            filteredMockPublications = this.filterAllCategories(
                filteredMockPublications,
                'genre',
                this.filters.genres,
            );
        }

        if (this.filters.authors && this.filters.authors.length > 0) {
            filteredMockPublications = this.filterAllCategories(
                filteredMockPublications,
                'author',
                this.filters.authors,
            );
        }

        if (this.filters.category) {
            filteredMockPublications = this.filterByCategory(
                filteredMockPublications,
                this.filters.category,
            );
        }

        return filteredMockPublications;
    }

    private setPublications(publications: MockPublications) {
        this.publications = publications;
    }

    private setAllPublications() {
        this.allPublications = Object.values(this.publications).flat();
    }

    // eslint-disable-next-line class-methods-use-this
    private filterByCategory(
        publications: MockPublications,
        category: PublicationsCategories,
    ): MockPublications {
        const { [category]: selectedCategory, ...rest } = publications;

        if (category === (Categories.All as any)) return publications;

        return {
            [category]: selectedCategory || [],
            ...Object.keys(rest).reduce(
                (acc, k) => ({ ...acc, [k]: [] }),
                {} as MockPublications,
            ),
        };
    }
}
