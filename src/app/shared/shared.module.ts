import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarPaisComponent } from './components/sidebar-pais/sidebar-pais.component';

@NgModule({
  declarations: [SidebarComponent, SidebarPaisComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, SidebarPaisComponent],
})
export class SharedModule {}
