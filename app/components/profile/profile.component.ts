import { Component } from '@angular/core';
import { PointsService } from '../../../services/points.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  code: number = 0; 
  points: number = 0;
  amount: number = 0;

  constructor(private pointsService: PointsService){}

  calculateCode():void{
    this.code = Math.floor(Math.random() * (9999999 - 1000000) + 1000000);
  }

  calculatePoints():void{
    this.points = this.points+this.amount*10;
    this.pointsService.setPoints(this.points)
  }

  ngOnInit(): void{
    this.points = this.pointsService.getPoints();
  }

  
}
