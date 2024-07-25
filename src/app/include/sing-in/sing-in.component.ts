import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.css'
})
export class SingInComponent implements OnInit{

  constructor(private fb:FormBuilder, private router: Router){}
  loginForm : FormGroup;
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username : [],
      password : []
    })
  }
  
  onLogin()
  {
    alert("User Not Login...!!")
    console.log(this.loginForm.value)
    
    let un = this.loginForm.controls['username'].value;
    let ps = this.loginForm.controls['password'].value;

    if(un === 'admin' && ps === 'admin123')
    {
      this.router.navigateByUrl("/dash")
      alert('User Auth')
    }else{
      alert("Enter valid credentials...!")
    }
  }

}
