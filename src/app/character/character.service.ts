import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './character';
import { allCharactersUrl } from './character_urls';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(allCharactersUrl);
  }
}
