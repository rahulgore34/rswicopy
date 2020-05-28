import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  flag = false;
  username = '';
  passWord = '';

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      useremail: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      localStorage.setItem('userDetails', JSON.stringify(this.loginForm.value.useremail));
      let res = localStorage.getItem('registerEmployer');
      console.log(this.loginForm.value);
      let f = false;
      if (res !== null) {
        JSON.parse(res).forEach((item) => {
          if (item.email === this.loginForm.value.useremail && item.password === this.loginForm.value.password) {
            console.log('yes');
            f = true;
          } else {
            console.log('no');
          }
        });
        if (f === false) {
          this.flag = true;
        } else {
          this.router.navigate(['/employerProfile', this.loginForm.value.useremail]);
        }
      }
    }
    let resCan = localStorage.getItem('registerCandidate');

    console.log(this.loginForm.value);
    let f = false;
    if (resCan !== null) {
      JSON.parse(resCan).forEach((item) => {
        if (item.email === this.loginForm.value.useremail && item.password === this.loginForm.value.password) {
          console.log('yes');
          f = true;
          this.flag = false;

        } else {
          console.log('no');
        }
      });
      if (f === false) {
        this.flag = true;
      } else {
        this.router.navigate(['/candidateProfile', this.loginForm.value.useremail]);
        // this.router.na vigateByUrl('/candidateProfile', );
      }
    }
  }


}
