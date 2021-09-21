import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// /** @title Form field with prefix & suffix */
// @Component({
//   selector: 'form-field-prefix-suffix-example',
//   templateUrl: 'form-field-prefix-suffix-example.html',
//   styleUrls: ['form-field-prefix-suffix-example.css'],
// })
export class FormFieldPrefixSuffixExample {
  hide = true;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // form: FormGroup;
  // constructor(private authService:AuthSeerviceService) { }
  

  ngOnInit(): void {

  }
  initForm(){}
  

}
