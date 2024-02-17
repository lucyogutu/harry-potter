import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './character';
import { allCharactersUrl, characterByIdUrl } from './character_urls';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(allCharactersUrl);
  }
  // async getCharacterById(id: string): Promise<Character[] | undefined> {
  //   const data = await fetch(`${characterByIdUrl}/${id}`);
  //   return (await data.json()) ?? [];
  // }

  getCharacterById(id: string): Observable<Character[]> {
    return this.http.get<Character[]>(characterByIdUrl + '/' + id);
  }
}
