import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'por-pais',
    component: PorPaisComponent,
  },
  {
    path: 'por-region',
    component: PorRegionComponent,
  },
  {
    path: 'por-capital',
    component: PorCapitalComponent,
  },
  {
    path: ':id',
    component: VerPaisComponent,
  },
  {
    path: '**',
    redirectTo: 'por-pais',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaisRoutingModule {}
