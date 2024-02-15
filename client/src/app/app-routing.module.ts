import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { ListPlayersComponent } from './components/list-players/list-players.component';
import { CreatePlayerComponent } from './components/create-players/create-players.component';

export const routes: Routes = [
    { path: '', component: ListPlayersComponent },
    { path: 'create-players', component: CreatePlayerComponent },
    { path: 'edit-players/:id', component: CreatePlayerComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
