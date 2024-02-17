import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './character/characters/characters.component';
import { CharacterComponent } from './character/character/character.component';
import { CharacterDetailsComponent } from './character/character-details/character-details.component';
import { HttpClientModule } from '@angular/common/http';
import { SpellsComponent } from './character/spells/spells.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterComponent,
    CharacterDetailsComponent,
    SpellsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
