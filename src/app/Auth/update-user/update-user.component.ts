import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppState } from 'src/app/State/appState';
import { Store } from '@ngrx/store';
import { updateUser } from 'src/app/State/Actions/userActions';
import { getSingleBooking } from 'src/app/State/Reducers/bookingReducer';
import { User } from 'src/app/Interfaces';
import { getSingleUser } from 'src/app/State/Reducers/userReducers';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  show=false
  id!:string
  form!:FormGroup
  constructor(private fb:FormBuilder,private route:ActivatedRoute,private router:Router, private store:Store<AppState>){

  }

  ngOnInit(): void {
     
    this.form = this.fb.group({
      Name:[null, Validators.required],
      Email:[null, [Validators.required, Validators.email]],
      Password:[null, Validators.required]
    })
    
      this.store.select(getSingleUser).subscribe(res=>{
        if(res){
         this.id=res.id    
          this.form.setValue({
            Name:res.name,
            Email:res.email,
            Password:res.password
        })
        }
      })
    
  }

  submitForm(){
    this.store.dispatch(updateUser({id:this.id, updatedUser:this.form.value}))
    this.router.navigate(['../'],{relativeTo:this.route}) 
  }
}

