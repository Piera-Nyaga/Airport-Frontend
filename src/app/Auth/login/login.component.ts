import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { ErrorComponent } from 'src/app/error/error.component';
import { userState } from 'src/app/State/Reducers/userReducers';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loginUser } from 'src/app/State/Actions/userActions';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,ErrorComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup
  login$!:Observable<userState[]>
  error=null
  constructor(private fb:FormBuilder, private authentication:AuthenticationService, private auth :AuthService,
    private router:Router, private store:Store<userState>
    ){

  }
  ngOnInit(): void {
    this.form = this.fb.group({
      Email:[null, [Validators.required, Validators.email]],
      Password:[null, Validators.required]
    })
  }

  submitForm(){
    this.authentication.loginUser(this.form.value).subscribe(response=>{
      this.auth.setRole(response.role)
      this.auth.setName(response.name)
      this.auth.login()
      localStorage.setItem('token', response.token)
      if(response.token){
        this.router.navigate(['book'])
      }
    },(error)=>{
    this.error=error.error
    })
    this.store.dispatch(loginUser({userlogged:this.form.value}))
    console.log(this.form.value)
  }

  Close(){
    this.error=null
  }
}
