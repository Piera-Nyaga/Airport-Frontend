import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User,Message,LoginUser,LoginSuccess} from '../Interfaces/index'
import{Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  registerUser(user:User):Observable<Message>{
    console.log(user);
    return this.http.post<Message>('http://localhost:4000/auth/register',user)
  }

  loginUser(user:LoginUser):Observable<LoginSuccess>{
    return this.http.post<LoginSuccess>('http://localhost:4000/auth/login',user)
  }

  updateUser(id:string,updatedUser:User):Observable<User>{
      return this.http.put<User>(`http://localhost:4000/auth/user/${id}`,updatedUser)
     }
}
