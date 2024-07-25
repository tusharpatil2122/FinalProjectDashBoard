import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css'
})
export class UserHeaderComponent  implements OnInit {

  user:any;
  ngOnInit(): void {
    let userJson:string= localStorage.getItem('user');
      this.user   =JSON.parse(userJson);
  }

}
