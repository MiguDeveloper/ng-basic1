import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsRoutingModule } from './gifs-routing.module';
import { GifPageComponent } from './pages/gif-page/gif-page.component';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';

@NgModule({
  declarations: [GifPageComponent, SearchComponent, ResultsComponent],
  imports: [CommonModule, GifsRoutingModule],
})
export class GifsModule {}
