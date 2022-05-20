import { DragonballPageComponent } from './pages/dragonball-page/dragonball-page.component';
import { HeroesPagesComponent } from './pages/heroes-pages/heroes-pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HeroesPagesComponent,
  },
  {
    path: 'dbz',
    component: DragonballPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
