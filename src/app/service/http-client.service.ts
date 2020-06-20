import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<User[]>('http://localhost:8080/users');
  }

  addUser(newUser: User) {
    return this.httpClient.post<User>('http://localhost:8080/addUser', newUser);
  }
}
