import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private hc: HttpClient) { }

  login(username: string, password: string): Observable<User> {
    return this.hc.post<User>('http://localhost:8080/project2/login', {
      'username': username,
      'password': password
    }, {
      withCredentials: true
    });
  }

  checkIfAlreadyLoggedIn(): Observable<User> {
    return this.hc.get<User>('http://localhost:8080/project2/currentuser', {
      withCredentials: true
    });
  }

  logout(){
    return this.hc.post('http://localhost:8080/project2/logout', {}, {
      withCredentials: true
    });
  }
}
