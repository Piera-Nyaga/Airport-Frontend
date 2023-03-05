import { createReducer, on } from '@ngrx/store';
// import { AuthState, initialAuthState } from './authState';
import { loginUser, loginUserSuccess, loginUserFailure, getSingleUser } from '../Actions/userActions'
import { LoginSuccess, User } from "../../Interfaces";

export interface userState {
    isLoggedIn: boolean
    loading: false
    Name: string,
    Email: string, 
    Password: string,
    user: LoginSuccess | null
    errorMessage: string | null
}

export const initialUserState: userState= {
    isLoggedIn: false,
    loading: false,
    Name: '',
    Email: '',
    Password: '',
    user: null,
    errorMessage: null,
    // updateError: '',
};

export const authReducer = createReducer<userState>(
initialUserState,
    // on(login, (state,actions) => ({ ...state, error: null })),  
    on(loginUserSuccess, (state, actions): userState => ({
        ...state, 
        isLoggedIn: true,
        user: actions.loginSuccess,
        errorMessage: null,
    })),

    on(loginUserFailure, (state, actions): userState => ({
        ...state,
        isLoggedIn: false,
        user: null,
        errorMessage: actions.errorMessage,

    })),

    // on(getSingleUser,(state,actions):userState=>{
    //     return{
    //         ...state,
    //         bookingId:actions.id
    //     }
    //  }),

    // on(updateUserProfileSuccess, (state, action): AuthState => {
    //     const updatedUser = state.user.(item => {
    //         return item.Email === action.user.Email ? action.user : item
    //     })
    //     return {
    //         ...state,
    //         errorMessage: '',
    //         user: updatedUser
    //     }
    // }),

    // on(logout, () => initialUserState),
);
