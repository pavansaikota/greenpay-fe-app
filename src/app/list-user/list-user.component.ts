import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";

interface User{
  id: number, 
  firstName: string, 
  lastName: string, 
  email: string
}

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})

export class ListUserComponent implements OnInit {
  

  users: User[];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    
     
      this.users = this.userService.getUsers();
  
  }

  deleteUser(user: User): void {
    
        this.users =this.userService.deleteUser(user.id) ;
  };

  editUser(user: User): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };
}