import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent {
  @Input() character!: Character;
  date: number = new Date().getFullYear();
}
