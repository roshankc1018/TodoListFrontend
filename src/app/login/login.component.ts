import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  submitted = false;
  isLoading = false;

  error: string = '';

  loginform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
  });
  constructor(private router: Router, private authService: AuthenticationService, private dataService: DataService) {}

  ngOnInit() {}

  onLogin() {
    this.submitted = true;

    if (this.loginform.valid) {
      const name = this.loginform.value.name;
      const password = this.loginform.value.password;
      this.isLoading = true;
      this.authService
        .login(name, password)
        .then(response => {
          if (response) {
            this.isLoading = false;
            this.dataService.getname(name);
            this.router.navigate([name]);
            //this.router.navigate(['projects']);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
