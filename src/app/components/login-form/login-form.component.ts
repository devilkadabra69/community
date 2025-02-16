import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login-form',
  imports: [
    FloatLabelModule,
    InputTextModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
  standalone: true
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get fun() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      alert("form is valid don't worry");
      console.log(this.loginForm.value);
    }
  }

}
