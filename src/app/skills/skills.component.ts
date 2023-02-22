import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillsList : Array<any> = [];
  constructor() {}
  ngOnInit(): void {
    let skill1 = {
      nombre : "Python",
      nivel: "50%",
    }
    let skill2 = {
      nombre : "C++",
      nivel: "100%",
    }
    let skill3 = {
      nombre : "React",
      nivel: "80%",
    }

    let skill4 = {
      nombre : "Swift",
      nivel: "5%",
    }

    this.skillsList.push(skill1);  
    this.skillsList.push(skill2);
    this.skillsList.push(skill3);    
    this.skillsList.push(skill4); 
  }

}
