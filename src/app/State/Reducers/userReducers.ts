 import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
 import { loginUser, loginUserSuccess, loginUserFailure, updateUserSuccess } from '../Actions/userActions'
 import { LoginSuccess, User } from "../../Interfaces";

 export interface userState {
     isLoggedIn: boolean,
     Id:string,
     Name:string,
     Email:string,
     Password:string,
     user: LoginSuccess |null,
     errorMessage: string | null 
 }

 export const initialUserState: userState= {
     isLoggedIn: false,
     Id:'',
     Name: '',
     Email: '',
     Password: '',
     user: null,
     errorMessage: null,
 };

 const userSliceState= createFeatureSelector<userState>('profile')

  export const profile= createSelector(userSliceState, state=>state.user)
  const myId= createSelector(userSliceState, state=>state.Id)


  export const getSingleUser=createSelector(profile,myId,(state)=>{
      return state
  })

 export const userReducer = createReducer<userState>(
 initialUserState, 
     on(loginUserSuccess, (state, actions): userState => (
         {
         ...state, 
         isLoggedIn: true,
         user: actions.loginSuccess,
         errorMessage: null,
     })),

     on(loginUserFailure, (state, actions): userState => (
         {
         ...state,
         isLoggedIn: false,
         user:null,
         errorMessage: actions.errorMessage,

     })),


      on(updateUserSuccess, (state, action): userState => {
          const updatedUser = state.user

          return {
              ...state,
              errorMessage: '',
              user: updatedUser
          }
      }),

 )
