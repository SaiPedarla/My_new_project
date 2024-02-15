import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlayersComponent } from './list-players.component';
import { PlayerService } from 'src/app/services/players.service';
import { ToastrModule } from 'ngx-toastr';
import { PlayerServiceStub } from 'src/app/mocks/players.service.mock';
import { of } from 'rxjs';
import {
    deleteMsg,
    playerMock,
    playersMock,
} from 'src/app/mocks/players.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';

describe('ListPlayersComponent', () => {
    let component: ListPlayersComponent;
    let fixture: ComponentFixture<ListPlayersComponent>;
    let playerService: PlayerService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ListPlayersComponent],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule.withRoutes(routes),
                ToastrModule.forRoot(),
            ],
            providers: [
                { provide: PlayerService, useClass: PlayerServiceStub },
            ],
        });
        playerService = TestBed.inject(PlayerService);
        fixture = TestBed.createComponent(ListPlayersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get players on init', () => {
        jest.spyOn(playerService, 'getPlayers').mockReturnValue(
            of(playersMock)
        );

        component.ngOnInit();

        expect(playerService.getPlayers).toHaveBeenCalled();
    });

    it('should call delete', () => {
        jest.spyOn(playerService, 'deletePlayer').mockReturnValue(
            of(deleteMsg)
        );

        component.deletePlayer(playerMock._id);

        expect(playerService.deletePlayer).toHaveBeenCalledWith(
            playerMock._id
        );
    });
});
