import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AddBooking, Booking, Message, User } from '../Interfaces';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor( private http:HttpClient) { }
  booking$=new Subject<Booking[]>()

  addBooking(booking:AddBooking):Observable<Message>{
    return this.http.post<Message>('http://localhost:4000/flights',booking)
  }
  
  getUserBooking():Observable<Booking[]>{
    return this.http.get<Booking[]>('http://localhost:4000/flights/booking/emails');
  }

  getOneBooking(id:string):Observable<Booking>{
   return  this.http.get<Booking>(`http://localhost:4000/flights/${id}`)
  }

  deleteBooking(id:string):Observable<Message>{
    return  this.http.delete<Message>(`http://localhost:4000/flights/${id}`)
   }

   updateBooking(id:string,updatedBooking:AddBooking):Observable<Booking>{
    return  this.http.put<Booking>(`http://localhost:4000/flights/${id}`, updatedBooking)
   }
 

  //  updateUser(id:string,updatedUser:loginUser):Observable<User>{
  //   return  this.http.put<User>(`http://localhost:4000/auth/${id}`, updatedBooking)
  //  }
 


}
