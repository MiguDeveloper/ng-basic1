import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifPageComponent } from '@module/gifs/pages/gif-page/gif-page.component';

const routes: Routes = [
  {
    path: 'heroes',
    loadChildren: () =>
      import('@module/heroes/heroes.module').then((m) => m.HeroesModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('@module/gifs/gifs.module').then((m) => m.GifsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
