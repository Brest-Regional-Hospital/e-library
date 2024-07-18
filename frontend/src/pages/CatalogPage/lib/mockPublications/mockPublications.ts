export type Publication = {
    bookNumber?: string;
    title: string;
    category?: string;
    genre?: string;
    author?: string;
    publicationDate?: string;
    amountAvailable: number;
};

export enum PublicationsCategories {
    BOOKS = 'books',
    NEWSPAPERS = 'newspapers',
    MAGAZINES = 'magazines',
}

export type MockPublications = {
    [key in PublicationsCategories]: Publication[];
};

export const mockPublications: MockPublications = {
    books: [
        {
            bookNumber: '223-332',
            title: 'Цветы для Элджернона',
            category: 'Книга',
            genre: 'Детективная книга',
            author: 'Даниель Киз',
            amountAvailable: 3,
        },
        {
            bookNumber: '111-222',
            title: 'Капитанская дочка',
            category: 'Книга',
            genre: 'Художественная книга',
            author: 'Александр Пушкин',
            amountAvailable: 5,
        },
        {
            bookNumber: '233-674',
            title: 'Мастер и Маргарита',
            category: 'Книга',
            genre: 'Детективная книга',
            author: 'Михаил Булгаков',
            amountAvailable: 2,
        },
        {
            bookNumber: '098-334',
            title: 'Гордость и предупеждение',
            category: 'Книга',
            genre: 'Научная книга',
            author: 'Джейн Остен',
            amountAvailable: 3,
        },
        {
            bookNumber: '111-111',
            title: 'Портрет Дориана Грея',
            category: 'Книга',
            genre: 'Научная книга',
            author: 'Оскар Уайлд',
            amountAvailable: 3,
        },
        {
            bookNumber: '223-218',
            title: 'Тихий Дон',
            category: 'Книга',
            genre: 'Художественная книга',
            author: 'Михаил Шолохов',
            amountAvailable: 3,
        },
        {
            bookNumber: '223-217',
            title: 'Тихий Дон',
            category: 'Книга',
            genre: 'Художественная книга',
            author: 'Михаил Шолохов',
            amountAvailable: 3,
        },
    ],
    newspapers: [
        {
            title: 'Вечерний Минск',
            publicationDate: '2018/10/30',
            amountAvailable: 4,
        },
        {
            title: 'Брест Сегодня',
            publicationDate: '2019/01/22',
            amountAvailable: 1,
        },
        {
            title: 'Новостные Будни',
            publicationDate: '2021/10/09',
            amountAvailable: 2,
        },
        {
            title: 'Медицина Экспресс',
            publicationDate: '2017/09/12',
            amountAvailable: 2,
        },
        {
            title: 'Вестник Субботы',
            publicationDate: '2023/01/05',
            amountAvailable: 4,
        },
    ],
    magazines: [
        {
            title: 'В мире наук',
            publicationDate: '2018/10/30',
            amountAvailable: 4,
        },
        {
            title: 'Медицина с нами',
            publicationDate: '2019/01/22',
            amountAvailable: 1,
        },
        {
            title: 'Будни хирурга',
            publicationDate: '2021/10/09',
            amountAvailable: 2,
        },
        {
            title: 'На страже здоровья',
            publicationDate: '2017/09/12',
            amountAvailable: 2,
        },
        {
            title: 'Когда если не сегодня',
            publicationDate: '2023/01/05',
            amountAvailable: 4,
        },
    ],
};
