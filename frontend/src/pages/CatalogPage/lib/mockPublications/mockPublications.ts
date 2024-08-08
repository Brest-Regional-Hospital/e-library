import { Categories } from 'features/Filters/lib/categories';

export type Publication = {
    id?: number;
    bookNumber?: string;
    title: string;
    genre?: string;
    author?: string;
    publicationDate?: string;
    amountAvailable: number;
    type: string;
};

export const mockPublications: Publication[] = [
    {
        id: 1,
        bookNumber: '223-332',
        title: 'Цветы для Элджернона',
        genre: 'Детективная книга',
        author: 'Даниель Киз',
        amountAvailable: 3,
        type: Categories.Book,
    },
    {
        id: 2,
        bookNumber: '111-222',
        title: 'Капитанская дочка',
        genre: 'Художественная книга',
        author: 'Александр Пушкин',
        amountAvailable: 5,
        type: Categories.Book,
    },
    {
        id: 3,
        bookNumber: '233-674',
        title: 'Мастер и Маргарита',
        genre: 'Детективная книга',
        author: 'Михаил Булгаков',
        amountAvailable: 2,
        type: Categories.Book,
    },
    {
        id: 4,
        bookNumber: '098-334',
        title: 'Гордость и предупеждение',
        genre: 'Научная книга',
        author: 'Джейн Остен',
        amountAvailable: 3,
        type: Categories.Book,
    },
    {
        id: 5,
        bookNumber: '111-111',
        title: 'Портрет Дориана Грея',
        genre: 'Научная книга',
        author: 'Оскар Уайлд',
        amountAvailable: 3,
        type: Categories.Book,
    },
    {
        id: 6,
        bookNumber: '223-218',
        title: 'Тихий Дон',
        genre: 'Художественная книга',
        author: 'Михаил Шолохов',
        amountAvailable: 3,
        type: Categories.Book,
    },
    {
        id: 7,
        bookNumber: '223-217',
        title: 'Тихий Дон',
        genre: 'Художественная книга',
        author: 'Михаил Шолохов',
        amountAvailable: 3,
        type: Categories.Book,
    },
    {
        id: 8,
        title: 'Вечерний Минск',
        publicationDate: '2018/10/30',
        amountAvailable: 4,
        type: Categories.Newspaper,
    },
    {
        id: 9,
        title: 'Брест Сегодня',
        publicationDate: '2019/01/22',
        amountAvailable: 1,
        type: Categories.Newspaper,
    },
    {
        id: 10,
        title: 'Новостные Будни',
        publicationDate: '2021/10/09',
        amountAvailable: 2,
        type: Categories.Newspaper,
    },
    {
        id: 11,
        title: 'Медицина Экспресс',
        publicationDate: '2017/09/12',
        amountAvailable: 2,
        type: Categories.Newspaper,
    },
    {
        id: 12,
        title: 'Вестник Субботы',
        publicationDate: '2023/01/05',
        amountAvailable: 4,
        type: Categories.Newspaper,
    },
    {
        id: 13,
        title: 'В мире наук',
        publicationDate: '2018/10/30',
        amountAvailable: 4,
        type: Categories.Newspaper,
    },
    {
        id: 14,
        title: 'Медицина с нами',
        publicationDate: '2019/01/22',
        amountAvailable: 1,
        type: Categories.Magazine,
    },
    {
        id: 15,
        title: 'Будни хирурга',
        publicationDate: '2021/10/09',
        amountAvailable: 2,
        type: Categories.Magazine,
    },
    {
        id: 16,
        title: 'На страже здоровья',
        publicationDate: '2017/09/12',
        amountAvailable: 2,
        type: Categories.Magazine,
    },
    {
        id: 17,
        title: 'Когда если не сегодня',
        publicationDate: '2023/01/05',
        amountAvailable: 4,
        type: Categories.Magazine,
    },
];
