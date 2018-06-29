import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../user.service"

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router) { }
  addForm:FormGroup;

  ngOnInit() {
    this.addForm=this.formBuilder.group({
      id:[5],
      email:['',Validators.required],
      name:['',Validators.required]
    })
  }

  onSubmit(){
    this.userService.createUser(this.addForm.value).subscribe(data=>{
      this.router.navigate(['list-user']);
    })
  }

}
