import { Component, OnInit, inject } from '@angular/core';
import { Spell } from '../spell';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css'],
})
export class SpellsComponent implements OnInit {
  spellList: Spell[] = [];
  characterService: CharacterService = inject(CharacterService);

  ngOnInit() {
    this.characterService.getAllSpells().then((data: Spell[]) => {
      this.spellList = data;
    });
  }
}
