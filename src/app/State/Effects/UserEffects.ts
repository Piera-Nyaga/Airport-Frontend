import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { loginUser, loginUserSuccess, loginUserFailure, updateUserSuccess, updateUserFailure, updateUser } from '../Actions/userActions';
import { LoginSuccess, LoginUser, User } from '../../Interfaces';
import { AuthenticationService } from '../../Services/authentication.service';
import * as UserActions from '../Actions/userActions'
@Injectable()


export class userEffects {
    constructor(private actions$: Actions, private authService: AuthenticationService ) {}

  login$ = createEffect(()=>{
    return  this.actions$.pipe( ofType(loginUser),
    tap(action =>{console.log(action.userlogged)}),
    concatMap(action=>{
      return this.authService.loginUser(action.userlogged).pipe(
        
        map((loginsuccess:LoginSuccess) => loginUserSuccess({ loginSuccess:loginsuccess})),
          catchError((error) => of(loginUserFailure(error)))
      )
  })
    )
  }
   
  );

  updateUser= createEffect(()=>{
    return this.actions$.pipe(
        ofType(UserActions.updateUser),
        concatMap(action=>{
            return  this.authService.updateUser(action.id,action.updatedUser).pipe(
                map(successresponse=>{
                    return UserActions.updateUserSuccess({user:successresponse})
                }),
                catchError(error=>of(UserActions.updateUserFailure(error.error.message)))
            )
        })
    )
})



}
