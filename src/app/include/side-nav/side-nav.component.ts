import { Component, OnInit } from '@angular/core';
import { UserOptions } from '../../model/user-options';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit{

  constructor(private router:Router){}
  userButtons:any[];
   userType:string;
  ngOnInit(): void {
     this.userButtons=  UserOptions.userRoles;
       
     let userJson:string =localStorage.getItem('user');
     let user:any=JSON.parse(userJson);
     console.log(user);
     this.userType=user.userType;

  }
  navigateTo(link:string)
  { 
  
    this.router.navigateByUrl('dash/'+this.userType+'/'+link)

  }
}
