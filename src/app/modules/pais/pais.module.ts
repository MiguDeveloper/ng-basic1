import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisRoutingModule } from './pais-routing.module';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PaisMainComponent } from './pais-main.component';
import { PaisTableComponent } from './components/pais-table/pais-table.component';
import { PaisFormComponent } from './components/pais-form/pais-form.component';

@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisMainComponent,
    PaisTableComponent,
    PaisFormComponent,
  ],
  imports: [
    CommonModule,
    PaisRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule,
  ],
})
export class PaisModule {}
