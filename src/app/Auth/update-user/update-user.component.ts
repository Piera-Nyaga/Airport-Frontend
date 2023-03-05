import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppState } from 'src/app/State/appState';
import { Store } from '@ngrx/store';
import { updateUser } from 'src/app/State/Actions/userActions';
import { getSingleBooking } from 'src/app/State/Reducers/bookingReducer';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  // show=false
  // id!:string
  // form!:FormGroup
  // constructor(private fb:FormBuilder,private route:ActivatedRoute,private router:Router, private store:Store<AppState>){

  // }

  // ngOnInit(): void {
     
  //   this.form = this.fb.group({
  //     Name:[null, Validators.required],
  //     Email:[null, [Validators.required, Validators.email]],
  //     Password:[null, Validators.required]
  //   })
  //   // this.bookingService.getUserBooking()

  //   this.route.params.subscribe((param:Params)=>{
  //     this.id=param['id']
  //     })

  //     this.store.select(getSingleBooking).subscribe(res=>{
  //       if(res){
  //         // let date =new Date(res.TravelDate).toISOString().slice(0,10)         
  //         this.form.setValue({
  //           Name:res.Name,
  //           Email:res.Email,
  //           Password:res.Password
  //       })
  //       }
  //     })
    
  // }

  // submitForm(){
  //   // this.bookingService.updateBooking(this.id, this.form.value).subscribe()
  //   this.store.dispatch(updateUser({updatedUser:this.form.value, id:this.id}))
  //   this.router.navigate(['../'],{relativeTo:this.route})
  //   // this.bookingService.getUserBooking()
    
  // }

}
