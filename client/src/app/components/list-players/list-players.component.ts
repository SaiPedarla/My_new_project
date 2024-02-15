import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Players } from 'src/app/models/players';
import { PlayerService } from 'src/app/services/players.service';

@Component({
    selector: 'app-list-players',
    templateUrl: './list-players.component.html',
    styleUrls: ['./list-players.component.scss'],
})
export class ListPlayersComponent implements OnInit {
    listPlayers: Players[] = [];

    constructor(
        private playerService: PlayerService,
        private toastr: ToastrService
    ) {}

    ngOnInit(): void {
        this.getPlayers();
    }

    getPlayers() {
        this.playerService.getPlayers().subscribe({
            next: (data: Players[]) => {
                this.listPlayers = data;
            },
        });
    }

    deletePlayer(id: string | null | undefined) {
        this.playerService.deletePlayer(id).subscribe({
            next: () => {
                this.toastr.error(
                    'Players Deleted Successfully',
                    'Players Deleted'
                );
                this.getPlayers();
            },
        });
    }
}
