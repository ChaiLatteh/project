import { Component, OnInit } from '@angular/core';
import { LogregService } from './../logreg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _logregService: LogregService,
    private _router: Router,
  ) { }

  ngOnInit() {
  }
  login(formData){
    this._logregService.login(formData.value)
    .then(()=>this._router.navigate(['/']))
    .catch(()=>{
      alert("Entered username or password is incorrect.");
    })
  }

}
