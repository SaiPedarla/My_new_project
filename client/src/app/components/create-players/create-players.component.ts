import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Players } from 'src/app/models/players';
import { PlayerService } from 'src/app/services/players.service';

@Component({
    selector: 'app-create-players',
    templateUrl: './create-players.component.html',
    styleUrls: ['./create-players.component.scss'],
})
export class CreatePlayerComponent implements OnInit {
    playerForm: FormGroup;
    title = 'Create Players';
    id: string | null | undefined;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private toastr: ToastrService,
        private playerService: PlayerService,
        private aRoute: ActivatedRoute,
        private ngZone: NgZone
    ) {
        this.playerForm = this.fb.group({
            name: ['', Validators.required],
            category: ['', Validators.required],
            location: ['', Validators.required],
            price: ['', Validators.required],
        });
        this.id = this.aRoute.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
        this.isEdit();
    }

    addPlayer() {
        const PLAYERS: Players = {
            name: this.playerForm.get('name')?.value,
            category: this.playerForm.get('category')?.value,
            location: this.playerForm.get('location')?.value,
            price: this.playerForm.get('price')?.value,
        };

        if (this.id !== null && this.id !== undefined) {
            this.playerService.editPlayer(this.id, PLAYERS).subscribe({
                next: () => {
                    this.toastr.success(
                        'Players Updated Successfully!',
                        'Players Saved!'
                    );
                    this.ngZone.run(() => this.router.navigate(['/'])).then();
                },
            });
        } else {
            this.playerService.createPlayer(PLAYERS).subscribe({
                next: () => {
                    this.toastr.success(
                        'Players Registered Successfully!',
                        'Players Saved!'
                    );
                    this.ngZone.run(() => this.router.navigate(['/'])).then();
                },
            });
        }
    }

    isEdit() {
        if (this.id !== null && this.id !== undefined) {
            this.title = 'Edit Players';
            this.playerService.getPlayer(this.id).subscribe((data) => {
                this.playerForm.setValue({
                    name: data.name,
                    category: data.category,
                    location: data.location,
                    price: data.price,
                });
            });
        }
    }
}
