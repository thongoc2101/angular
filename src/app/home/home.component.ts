import { Component, OnInit } from '@angular/core';
import { Home } from '../models/home';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    UserService
  ]
})
export class HomeComponent implements OnInit {

  user: Home = {
    id: 1,
    name: "Phan Thi Ngoc Cam",
    email: "ngoccam210195@gmail.com",
    phoneNumber: '0985309873345'
  }

  users: Home[];
  selected: Home;


  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.getListUsers();
  }

  selectedUser(user: Home) {
    this.selected = user;
  }

  getListUsers(): void {
    this.userService.getUsers().subscribe(
      (updateUser) => {
        this.users = updateUser;
      }
    );
  }

}
