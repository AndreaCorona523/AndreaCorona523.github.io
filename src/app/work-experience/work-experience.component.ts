import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExperience : Array<any> = [];
  constructor() {}
  ngOnInit(): void {
    let work1 = {
      fecha : "2021-2022",
      ubicacion: "Toluca, Edo. Mex.",
      puesto: "Vicepresidenta",
      empresa: "Fetec",
      logros: [
        { descripcion: "Recoleccion de fondos"},
        { descripcion: "Contacto con personas"},
      ]
    }

    let work2 = {
      fecha : "2022-",
      ubicacion: "Toluca, Edo. Mex.",
      puesto: "Mentora",
      empresa: "Tecnolochicas",
      logros: [
        { descripcion: "Dar cursos a niñas de secundaria"},
      ]
    }

    this.workExperience.push(work1);  
    this.workExperience.push(work2);  
  }

}
