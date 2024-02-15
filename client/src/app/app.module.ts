import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CreatePlayerComponent } from './components/create-players/create-players.component';
import { ListPlayersComponent } from './components/list-players/list-players.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent, CreatePlayerComponent, ListPlayersComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
