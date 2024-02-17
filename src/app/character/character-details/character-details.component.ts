import { Component, Input, inject } from '@angular/core';
import { Character } from '../character';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  characterService: CharacterService = inject(CharacterService);

  character: Character | undefined;

  constructor() {
    const characterId: string = this.route.snapshot.params['id'];
    // this.characterService.getCharacterById(characterId).then((character) => {
    //   this.character = character;
    // });
    this.characterService.getCharacterById(characterId).subscribe((character) => {
      this.character = character;
    });
  }
}
