import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogServicesService } from 'src/app/services/log-services.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  loggedUser:any;
   
  constructor(private router:Router, private logServ:LogServicesService){
       const localUser = localStorage.getItem('user');
       if(localUser != null){
        this.loggedUser = JSON.parse(localUser)
       }
  }

  onLogout(){
    // localStorage.removeItem('user');
    this.logServ.logOut()
    this.router.navigate(['/'])
      
  }


}
