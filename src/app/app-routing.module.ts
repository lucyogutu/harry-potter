import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './character/character-details/character-details.component';
import { CharactersComponent } from './character/characters/characters.component';
import { SpellsComponent } from './character/spells/spells.component';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: CharactersComponent },
  { path: 'character/details/:id', component: CharacterDetailsComponent },
  { path: 'spells', component: SpellsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
