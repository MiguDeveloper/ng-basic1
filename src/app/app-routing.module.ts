import { PipeMainComponent } from './modules/pipes/pipe-main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@module/home/pages/home-page/home-page.component';
import { PaisMainComponent } from '@module/pais/pais-main.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'pais',
    component: PaisMainComponent,
    loadChildren: () =>
      import('./modules/pais/pais.module').then((m) => m.PaisModule),
  },
  {
    path: 'pipe',
    component: PipeMainComponent,
    loadChildren: () =>
      import('./modules/pipes/pipes.module').then((m) => m.PipesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
