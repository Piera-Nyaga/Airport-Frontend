import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { loginUser, loginUserSuccess, loginUserFailure } from '../Actions/userActions';
import { LoginSuccess, LoginUser, User } from '../../Interfaces';
import { AuthenticationService } from '../../Services/authentication.service';
import  * as UserActions from '../Actions/userActions'
@Injectable()


export class AuthEffects {
    constructor(private actions$: Actions, private userService: AuthenticationService) { }

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginUser),
            tap(action => { console.log(action.userlogged) }),
            concatMap(action => {
                return this.userService.loginUser(action.userlogged).pipe(
                    map((loginsuccess: LoginSuccess) => loginUserSuccess({ loginSuccess: loginsuccess })),
                    catchError((error) => of(loginUserFailure(error)))
                )
            })
        )
    }
    );

    // updateUser= createEffect(()=>{
    //     return this.actions$.pipe(
    //         ofType(UserActions.updateUser),
    //         concatMap(action=>{
    //             return  this.bookingService.updateUser(action.id,action.updatedBooking).pipe(
    //                 map(successresponse=>{
    //                     return UserActions .updateUserSuccess({User:successresponse})
    //                 }),
    //                 catchError(error=>of(UserActions .updateUserFailure({error:error.message})))
    //             )
    //         })
    //     )
    // })
}