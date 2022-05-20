import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesPagesComponent } from './pages/heroes-pages/heroes-pages.component';
import { DragonballPageComponent } from './pages/dragonball-page/dragonball-page.component';
import { FormsModule } from '@angular/forms';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { FormPersonajeComponent } from './components/form-personaje/form-personaje.component';

@NgModule({
  declarations: [HeroesPagesComponent, DragonballPageComponent, ListaPersonajesComponent, FormPersonajeComponent],
  imports: [CommonModule, HeroesRoutingModule, FormsModule],
})
export class HeroesModule {}
