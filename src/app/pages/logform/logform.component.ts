import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login, SignUp } from 'src/app/data-type';
import { LogServicesService } from 'src/app/services/log-services.service';

@Component({
  selector: 'app-logform',
  templateUrl: './logform.component.html',
  styleUrls: ['./logform.component.css']
})
export class LogformComponent {

  constructor(private userServ:LogServicesService, private router:Router){}
  showlogin :boolean = true;



  signUp(user:SignUp):void{
     console.log(user);
     this.userServ.userSignUp(user);
     alert("Data Registered Successfully");
     this.router.navigate(['/']);
     this.showlogin = false
  }

  onLogin(data:Login){
     console.warn(data);
     this.userServ.userLogin(data);
     alert("User loggedIn")
     this.router.navigate(['/layout'])
     }
  

}
