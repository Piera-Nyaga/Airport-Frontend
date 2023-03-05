import { createAction, props } from '@ngrx/store';
import { LoginSuccess, LoginUser, User } from '../../Interfaces';



// login
export const loginUser = createAction('[User]-loginUser',props<{ userlogged:LoginUser}>());
export const loginUserSuccess = createAction('[User]-loginUserSuccess', props<{loginSuccess:LoginSuccess}>());
export const loginUserFailure = createAction('[User]-loginUserFailure', props<{errorMessage: string}>());

// export const getLoggedUser= createAction( '[User]getLoggedUser', props<LoginSuccess>());

// update profile
export const updateUser = createAction('[User]-updateUser', props<{updatedUser: User,id:string}>());
export const updateUserSuccess = createAction('[User-updateUserSuccess', props<{user: User}>());
export const updateUserFailure = createAction('[User]-updateUserFailure', props<{error: string}>());
