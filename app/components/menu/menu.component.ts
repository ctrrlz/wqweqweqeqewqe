import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PointsService } from '../../../services/points.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  category: string = '';
  points: number = 0;
  constructor(private route:ActivatedRoute, private pointsService: PointsService){}
   ngOnInit(): void{
     //this.route.params.subscribe(params => {
     // this.category = params['type']
    // });
     this.points = this.pointsService.getPoints();

   }
   showCoupon(price: number):void{
     alert(`yspeshno na ${price} ballov`);
   }
}
