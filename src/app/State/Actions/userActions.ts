import { createAction, props } from '@ngrx/store';
import { LoginSuccess, LoginUser, User } from '../../Interfaces';

export const getSingleUser= createAction('[User]Single User',props<{email:string}>())

// login
export const loginUser = createAction('[User]Login', props<{ userlogged:LoginUser}>());
// export const getUser= createAction('[Single-Booking]-getSingleBookingId',props<{id:string}>())
export const loginUserSuccess = createAction('[User]Login Success', props<{loginSuccess:LoginSuccess}>());
export const loginUserFailure = createAction('[User]Login Failure', props<{errorMessage: string}>());


// update profile
export const updateUser = createAction('[User]Update Profile', props<{updatedUser: User}>());
export const updateUserSuccess = createAction('[User]Update Profile Success', props<{user: User}>());
export const updateUserFailure = createAction('[User]Update Profile Failure', props<{errorMessage: string}>());

// export const addbooking = createAction('[addbooking]-addbooking',props<{newbooking:AddBooking}>())

// export const addbookingSuccess = createAction('[addbooking]-addbookingSuccess', props<{message:Message}>())

// export const addbookingFail= createAction('[addbooking]-addbookingFail',props<{error:string}>())



// export const updateBooking = createAction('[updateBooking]-updateBooking',props<{updatedBooking:AddBooking, id:string}>())

// export const updateBookingSuccess = createAction('[updateBooking]-updateBookingSuccess', props<{booking:Booking}>())

// export const updateBookingFail= createAction('[updateBooking]-updateBookingFail',props<{error:string}>())