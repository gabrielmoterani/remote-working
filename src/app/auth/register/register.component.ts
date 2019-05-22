import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  particlesStyle: object = {};
	particlesParams: object = {};
	particlesWidth: number = 100;
	particlesHeight: number = 100;
  constructor() { }

  ngOnInit() {
    this.particlesStyle = {
        'position': 'fixed',
        'width': '100%',
        'height': '100%',
        'z-index': '-1',
        'top': '0',
        'left': '0',
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
  }

}
