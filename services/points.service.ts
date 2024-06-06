import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class PointsService{
    private points: number = 0;
    setPoints(points:number):void{
        this.points =  this.points+points;
    }
    getPoints(){
        return this.points;
    }
}