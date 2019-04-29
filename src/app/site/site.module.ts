import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from './site-routing.module';
import { ListComponent } from './list/list.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSnackBarModule,
  MatTableModule
} from '@angular/material';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationModule } from '../validation/validation.module';
import { SiteService } from './site.service';

@NgModule({
  imports: [
    CommonModule,
    SiteRoutingModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,

    FormsModule,
    ReactiveFormsModule,
    ValidationModule
  ],
  declarations: [ListComponent, DetailsComponent],
  providers: [SiteService]
})
export class SiteModule {}
