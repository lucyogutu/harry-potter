import { Component, Input, OnDestroy, inject } from '@angular/core';
import { Character } from '../character';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent implements OnDestroy {
  route: ActivatedRoute = inject(ActivatedRoute);
  characterService: CharacterService = inject(CharacterService);

  character: Character | undefined;
  date: number = new Date().getFullYear();
  characterId: string = '';
  paramsObservable;

  constructor() {
    // const characterId: string = this.route.snapshot.params['id'];
    // const characterId: string = this.route.snapshot.paramMap.constget('id');
    this.paramsObservable = this.route.params.subscribe((data) => {
      this.characterId = data['id'];
    });

    // this.characterService.getCharacterById(characterId).then((character: Character[]) => {
    //   this.character = character[0];
    // });
    this.characterService
      .getCharacterById(this.characterId)
      .subscribe((character: Character[]) => {
        this.character = character[0];
      });
  }

  ngOnDestroy() {
    this.paramsObservable.unsubscribe();
  }
}
