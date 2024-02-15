import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PlayerService } from '../services/players.service';
import { Players } from '../models/players';
import { deleteMsg, playerMock, playersMock } from './players.mock';
import { of } from 'rxjs';
import { ErrorMsg } from '../models/error';
import { PlayerServiceStub } from './players.service.mock';

describe('PlayerServiceMock', () => {
    let service: PlayerService;
    let httpSpy: { get: jest.Mock };

    beforeEach(() => {
        httpSpy = {
            get: jest.fn(),
        };

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                { provide: HttpClient, useValue: httpSpy },
                { provide: PlayerService, useClass: PlayerServiceStub },
            ],
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

    it('deletePlayer should...', () => {
        httpSpy.get.mockReturnValue(of(deleteMsg));

        service.deletePlayer(playerMock._id).subscribe((data: ErrorMsg) => {
            expect(data.msg).toBe('Players successfully deleted');
        });
    });
    it('createPlayer should...', () => {
        const players: Players = {
            name: 'Coca-Cola',
            category: 'Fruit',
            location: 'Somewhere',
            price: 3,
        };
        httpSpy.get.mockReturnValue(of(playerMock));

        service.createPlayer(players).subscribe((data: Players) => {
            expect(data.name).toBe('Coca-Cola');
        });
    });

    it('getPlayer should...', () => {
        httpSpy.get.mockReturnValue(of(playerMock));

        service.getPlayer(playerMock._id).subscribe((data: Players) => {
            expect(data.name).toBe('Coca-Cola');
        });
    });

    it('editPlayer should...', () => {
        const players: Players = {
            name: 'Coca-Cola',
            category: 'Fruit',
            location: 'Somewhere',
            price: 3,
        };
        httpSpy.get.mockReturnValue(of(playerMock));

        service
            .editPlayer(playerMock._id, players)
            .subscribe((data: Players) => {
                expect(data.name).toBe('Coca-Cola');
            });
    });
});
