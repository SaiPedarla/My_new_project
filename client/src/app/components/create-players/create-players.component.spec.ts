import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { of } from 'rxjs';
import { routes } from 'src/app/app-routing.module';
import {
    editPlayerMock,
    invalidId,
    playerMock,
} from 'src/app/mocks/players.mock';
import { PlayerServiceStub } from 'src/app/mocks/players.service.mock';
import { Players } from 'src/app/models/players';
import { PlayerService } from 'src/app/services/players.service';
import { CreatePlayerComponent } from './create-players.component';

describe('CreatePlayerComponent', () => {
    let component: CreatePlayerComponent;
    let fixture: ComponentFixture<CreatePlayerComponent>;
    let playerService: PlayerService;
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CreatePlayerComponent],
            imports: [
                HttpClientTestingModule,
                ToastrModule.forRoot(),
                FormsModule,
                ReactiveFormsModule,
                RouterTestingModule.withRoutes(routes),
                NoopAnimationsModule,
            ],
            providers: [
                { provide: PlayerService, useClass: PlayerServiceStub },
            ],
        });
        playerService = TestBed.inject(PlayerService);
        fixture = TestBed.createComponent(CreatePlayerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        router = TestBed.get(Router);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('form invalid when empty', () => {
        expect(component.playerForm.valid).toBeFalsy();
    });

    it('submitting a form with new players trigger save players API', () => {
        const navigateSpy = jest.spyOn(router, 'navigate');
        const players: Players = {
            name: 'Lemon',
            category: 'Fruit',
            location: 'Somewhere',
            price: 3,
        };
        expect(component.playerForm.valid).toBeFalsy();
        component.playerForm.controls['name'].setValue('Lemon');
        component.playerForm.controls['category'].setValue('Fruit');
        component.playerForm.controls['location'].setValue('Somewhere');
        component.playerForm.controls['price'].setValue(3);
        component.id = null;
        expect(component.playerForm.valid).toBeTruthy();

        jest.spyOn(playerService, 'createPlayer').mockReturnValue(
            of(playerMock)
        );
        jest.spyOn(router, 'navigate');
        // Trigger the addPlayer function
        component.addPlayer();

        expect(navigateSpy).toHaveBeenCalledWith(['/']);
        expect(playerService.createPlayer).toHaveBeenCalledWith(players);
    });

    it('submitting a form with edit players trigger update players API', async () => {
        const navigateSpy = jest.spyOn(router, 'navigate');
        component.id = playerMock._id;

        jest.spyOn(playerService, 'getPlayer').mockReturnValue(
            of(playerMock)
        );
        jest.spyOn(playerService, 'editPlayer').mockReturnValue(
            of(playerMock)
        );
        jest.spyOn(router, 'navigate');

        await component.isEdit();
        component.addPlayer();

        expect(component.playerForm.valid).toBeTruthy();
        expect(playerService.getPlayer).toHaveBeenCalledWith(component.id);
        expect(playerService.editPlayer).toHaveBeenCalledWith(
            component.id,
            editPlayerMock
        );
        expect(navigateSpy).toHaveBeenCalledWith(['/']);
    });

    it('submitting a form with edit players with invalid ID', () => {
        component.id = '123invalidID';
        expect(() => {
            component.isEdit();
        }).toThrow(invalidId.msg);
        expect(component.playerForm.pristine).toBeTruthy();
    });
});
