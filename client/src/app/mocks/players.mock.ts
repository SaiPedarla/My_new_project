import { Players } from '../models/players';

export const deleteMsg = {
    msg: 'Players successfully deleted',
};

export const invalidId = {
    msg: 'Players does not exist',
};

export const errorMsg = {
    msg: 'Error',
};

export const playerMock: Players = {
    _id: '65a3346c9271da1ff3efad6f',
    name: 'Coca-Cola',
    category: 'Drinks',
    location: 'Madrid',
    price: 3.2,
    dateCreation: '2024-01-14T01:09:33.780Z',
};

export const editPlayerMock: Players = {
    name: 'Coca-Cola',
    category: 'Drinks',
    location: 'Madrid',
    price: 3.2,
};

export const playersMock: Players[] = [
    {
        _id: '65a3346c9271da1ff3efad6f',
        name: 'Coca-Cola',
        category: 'Drinks',
        location: 'Madrid',
        price: 3.2,
        dateCreation: '2024-01-14T01:09:33.780Z',
    },
    {
        _id: '65a336559271da1ff3efad73',
        name: 'Pepsi',
        category: 'Drinks',
        location: 'Salsipuedes',
        price: 3,
        dateCreation: '2024-01-14T01:09:33.780Z',
    },
    {
        _id: '65a977d88fe3305b18c23f85',
        name: 'Shimmy',
        category: 'Desserts',
        location: 'Fridge',
        price: 1.5,
        dateCreation: '2024-01-17T22:14:12.030Z',
    },
];
