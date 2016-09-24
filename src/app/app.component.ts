import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from'@angular/forms';
import { validateCSSColor } from'./validators/cssColor.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pwaForm: FormGroup;
  themeColorCtrl: FormControl;
  title = 'Angular 2 Custom Validator Demo';

  constructor(private fb: FormBuilder) {
    this.themeColorCtrl = this.fb.control('', [Validators.required, validateCSSColor]);
    this.pwaForm = this.fb.group({
      themeColor: this.themeColorCtrl,
    });
  }
}
