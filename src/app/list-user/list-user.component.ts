import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {user} from '../model/user.model'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})

export class ListUserComponent implements OnInit {
  

  users: user[];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
     
      this.userService.getUsers().subscribe(data=>{
            this.users=data;
      });
  
  }

  addUser(): void {
    this.router.navigate(['add-user']);
  };
}