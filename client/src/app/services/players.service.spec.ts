import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { deleteMsg, playerMock, playersMock } from '../mocks/players.mock';
import { ErrorMsg } from '../models/error';
import { Players } from '../models/players';
import { PlayerService } from '../services/players.service';

describe('PlayerServiceMock', () => {
    let service: PlayerService;
    let httpSpy: {
        get: jest.Mock;
        delete: jest.Mock;
        put: jest.Mock;
        post: jest.Mock;
    };

    beforeEach(() => {
        httpSpy = {
            get: jest.fn(),
            delete: jest.fn(),
            put: jest.fn(),
            post: jest.fn(),
        };

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [{ provide: HttpClient, useValue: httpSpy }],
        });

        service = TestBed.inject(PlayerService);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('getPlayers should...', () => {
        httpSpy.get.mockReturnValue(of(playersMock));

        service.getPlayers().subscribe((data: Players[]) => {
            expect(data[0].name).toBe('Coca-Cola');
        });
    });

    it('getPlayer should...', () => {
        httpSpy.get.mockReturnValue(of(playerMock));

        service.getPlayer(playerMock._id).subscribe((data: Players) => {
            expect(data.name).toBe('Coca-Cola');
        });
    });

    it('deletePlayer should...', () => {
        httpSpy.delete.mockReturnValue(of(deleteMsg));

        service.deletePlayer(playerMock._id).subscribe((data: ErrorMsg) => {
            expect(data.msg).toBe('Players successfully deleted');
        });
    });

    it('createPlayer should...', () => {
        httpSpy.post.mockReturnValue(of(playerMock));

        service.createPlayer(playerMock).subscribe((data: Players) => {
            expect(data.name).toBe('Coca-Cola');
        });
    });

    it('editPlayer should...', () => {
        httpSpy.put.mockReturnValue(of(playerMock));

        service
            .editPlayer(playerMock._id, playerMock)
            .subscribe((data: Players) => {
                expect(data.name).toBe('Coca-Cola');
            });
    });
});
