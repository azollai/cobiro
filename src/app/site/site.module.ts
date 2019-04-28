import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from './site-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [CommonModule, SiteRoutingModule],
  exports: [],
  declarations: [ListComponent],
  providers: [],
})
export class SiteModule {}
