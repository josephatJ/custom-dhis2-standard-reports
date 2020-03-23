import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { pages } from './pages';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { StandardReportComponent } from './pages/components/standard-report/standard-report.component';
import { CustomStandardReportsRoutingModule } from './custom-standard-reports-routing.module';

@NgModule({
  declarations: [...pages, StandardReportComponent],
  imports: [
    CommonModule,
    SharedModule,
    CustomStandardReportsRoutingModule,
    ...reducers,
    EffectsModule.forFeature(effects)
  ]
})
export class CustomStandardReportsModule {}
