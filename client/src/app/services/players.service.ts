import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Players } from '../models/players';
import { ErrorMsg } from '../models/error';

@Injectable({
    providedIn: 'root',
})
export class PlayerService {
    url = 'http://localhost:4000/api/players/';

    constructor(private http: HttpClient) {}

    getPlayers(): Observable<Players[]> {
        return this.http.get<Players[]>(this.url);
    }

    deletePlayer(id: string | null | undefined): Observable<ErrorMsg> {
        return this.http.delete<ErrorMsg>(this.url + id);
    }

    createPlayer(players: Players): Observable<Players> {
        return this.http.post<Players>(this.url, players);
    }

    getPlayer(id: string | null | undefined): Observable<Players> {
        return this.http.get<Players>(this.url + id);
    }

    editPlayer(
        id: string | null | undefined,
        players: Players
    ): Observable<Players> {
        return this.http.put<Players>(this.url + id, players);
    }
}
