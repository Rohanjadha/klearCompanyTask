import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, SignUp } from '../data-type';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogServicesService {

  constructor(private https: HttpClient, private router: Router) { }

  userSignUp(user: SignUp) {

    return this.https.post("http://localhost:3000/user", user, { observe: 'response' })
      .subscribe((result) => {
        console.log(result);
        if (result) {
          localStorage.setItem('user', JSON.stringify(result.body));
          this.router.navigate(['home'])
        }
      })

  }

  userLogin(data: Login) {

    return this.https.get<SignUp[]>(`http://localhost:3000/user?email=${data.email}&password=${data.password}`,
      { observe: 'response' }).subscribe((result) => {
        if (result && result.body) {
          console.warn(result);
          localStorage.setItem('user', JSON.stringify(result.body[0]));
          this.router.navigate(['layout'])
        }
      })

  }


  private loggedOut = new BehaviorSubject<boolean>(true);
     
  logOut():Observable<boolean>{
       return this.loggedOut.asObservable();
  }

}
