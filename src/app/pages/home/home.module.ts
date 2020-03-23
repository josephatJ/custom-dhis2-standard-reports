import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { pages } from './pages';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { StandardReportComponent } from './pages/components/standard-report/standard-report.component';

@NgModule({
  declarations: [...pages, StandardReportComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    ...reducers,
    EffectsModule.forFeature(effects)
  ]
})
export class HomeModule {}
