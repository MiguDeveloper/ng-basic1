import { PrimengModule } from './../primeng/primeng.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarPaisComponent } from './components/sidebar-pais/sidebar-pais.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [SidebarComponent, SidebarPaisComponent, MenuComponent],
  imports: [CommonModule, RouterModule, PrimengModule],
  exports: [SidebarComponent, SidebarPaisComponent, MenuComponent],
})
export class SharedModule {}
