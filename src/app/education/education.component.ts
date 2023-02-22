import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  educationExperience : Array<any> = [];
  constructor() {}
  ngOnInit(): void {
    let ed1 = {
      fecha : "2021-2022",
      titulo: "Ingenieria en Tecnologias Computacionales",
      escuela: "Tec de Monterrey",
    }

    this.educationExperience.push(ed1);  
  }

}

