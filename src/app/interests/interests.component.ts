import { Component } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent {
  interestsList : Array<any> = [];
  constructor() {}
  ngOnInit(): void {
    let int1 = {
      nombre : "Sustainability"
    }
    let int2 = {
      nombre : "Artificial Intelligence"
    }
    let int3 = {
      nombre : "Machine Learning"
    }

    this.interestsList.push(int1);  
    this.interestsList.push(int2);  
    this.interestsList.push(int3);  
  }

}
