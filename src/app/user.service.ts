import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {user} from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient) { }
  baseUrl:string='http://localhost:8080/user/';
  
  getUsers() {
    return this.http.get<user[]>(this.baseUrl);
  }

  createUser(user:user){
    return this.http.post(this.baseUrl,user);
  }

}
