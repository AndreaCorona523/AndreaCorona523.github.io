import { Component } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {
  languagesList : Array<any> = [];
  constructor() {}
  ngOnInit(): void {
    let lan1 = {
      nombre : "Español",
      nivel: "Nativo",
    }
    let lan2 = {
      nombre : "Inglés",
      nivel: "B2",
    }
    let lan3 = {
      nombre : "Francés",
      nivel: "B2",
    }

    this.languagesList.push(lan1);  
    this.languagesList.push(lan2); 
    this.languagesList.push(lan3); 
  }

}

