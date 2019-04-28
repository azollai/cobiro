import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: 'validation.component.html',
  styleUrls: ['validation.component.sass']
})
export class ValidationComponent {
  @Input('control') formControl: FormControl;
}
