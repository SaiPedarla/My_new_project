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
    name: 'Siva',
    category: 'Football',
    location: 'Hyderbad',
    price: 3.2,
    dateCreation: '2024-01-14T01:09:33.780Z',
};

export const editPlayerMock: Players = {
    name: 'Siva',
    category: 'Football',
    location: 'Hyderbad',
    price: 3.2,
};

export const playersMock: Players[] = [
    {
        _id: '65a3346c9271da1ff3efad6f',
        name: 'Siva',
        category: 'Football',
        location: 'Hyderbad',
        price: 3.2,
        dateCreation: '2024-01-14T01:09:33.780Z',
    }
];
