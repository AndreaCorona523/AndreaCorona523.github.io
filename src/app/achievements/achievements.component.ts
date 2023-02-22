import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent {
  achievementsList : Array<any> = [];
  constructor() {}
  ngOnInit(): void {
    let ach1 = {
      nombre : "Ganador de ExpoIngenierias en Clasificacion Impacto Social",
      anio: "2022",
      descripcion: "Desarrollo de una aplicacion para medir la presion arterial"
    }

    this.achievementsList.push(ach1);  
  }

}
