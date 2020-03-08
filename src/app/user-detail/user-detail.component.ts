import { Component, OnInit, Input } from '@angular/core';
import { Home } from '../models/home';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() selectedUser: Home;

  constructor() { }

  ngOnInit(): void {
  }

}
