import { NgModule } from '@angular/core';

import { ValidationComponent } from './validation.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ValidationComponent],
  declarations: [ValidationComponent]
})
export class ValidationModule {
}
