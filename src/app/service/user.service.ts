import { Injectable } from '@angular/core';
import { Home } from '../models/home';
import { listUser } from '../models/list.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers() : Observable<Home[]> {
    return of(listUser);
  }
  constructor() { }
}
