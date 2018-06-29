import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor() { }
  
  fakeusers=[
    {id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
    {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
    {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
    {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
  ];

  getUsers() {
    return this.fakeusers;
    
  }

  deleteUser(id:number){
    this.fakeusers.map((user)=>{
      if(user.id==id){
        this.fakeusers.splice(this.fakeusers.indexOf(user),1);
      }
    })
    return this.fakeusers;
  }

}
