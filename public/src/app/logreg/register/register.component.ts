import { Component, OnInit } from '@angular/core';
import { LogregService } from './../logreg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _logregService: LogregService,
    private _router:Router,
  ) { }

  ngOnInit() {
  }
  register(formData){
    this._logregService.register(formData.value)
    .then(()=>{
      alert("Successfully registered!");
      formData.reset();
    })
    .catch((err)=>{
      console.log(err);
      alert("Entered username already exists.");
      formData.reset();
    })
  }

}
