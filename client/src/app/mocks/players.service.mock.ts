import { of } from 'rxjs';
import {
    deleteMsg,
    invalidId,
    playerMock,
    playersMock,
} from './players.mock';

export class PlayerServiceStub {
    getPlayers() {
        return of(playersMock);
    }

    deletePlayer() {
        return of(deleteMsg);
    }

    createPlayer() {
        return of(playerMock);
    }

    getPlayer(id: string) {
        if (id === playerMock._id) {
            return of(playerMock);
        } else {
            throw new Error(invalidId.msg);
        }
    }

    editPlayer() {
        return of(playerMock);
    }
}
