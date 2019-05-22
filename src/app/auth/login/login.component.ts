import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  particlesStyle: object = {};
  particlesParams: object = {};
  particlesWidth = 100;
  particlesHeight = 100;

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      workSpace: [null, Validators.required]
    });

   }

  ngOnInit() {


    this.particlesStyle = {
        'position': 'fixed',
        'width': '100%',
        'height': '100%',
        'background-color': '#00d1b2',
        '-webkit-box-shadow': 'inset 24px 4px 64px -24px rgba(71,71,71,1)',
        '-moz-box-shadow': 'inset 24px 4px 64px -24px rgba(71,71,71,1)',
        'box-shadow': 'inset 24px 4px 64px -24px rgba(71,71,71,1)'
    };
    this.particlesParams = {
      particles: {
          number: {
              value: 120,
          },
          color: {
              value: '#0e9aa7'
          },
          shape: {
              type: 'polygon',
          },
      },
      interactivity: {
        onhover: {
          enable: true,
          mode: 'repulse'
        }

      }
    };

  };


  // * Login Logic //

  doLogIn(){

  };

  authenticateLogin(){

  };

}
