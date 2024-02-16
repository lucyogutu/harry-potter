import { Component, OnInit, inject } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characterList: Character[] = [];
  characterService: CharacterService = inject(CharacterService);

  ngOnInit() {
    this.characterService.getCharacters().subscribe((data: Character[]) => {
      this.characterList = data;
    });
  }
}
