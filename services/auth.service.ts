import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    private iaAuth: boolean = false;
    private points: number = 0;

    constructor(){}

    regirest(username:string, passvord: string){
        localStorage.setItem('user', JSON.stringify({username,passvord}))
        return true;
    }

    login(username:string, passvord: string){
        const user= JSON.parse(localStorage.getItem('user') || '{}')
        if(passvord === user.passvord && username === user.username){
            this.iaAuth = true;
            this.points = user.points;
            return true
        }
        return false
    }
        
    setPoints(points:number):void{
        this.points = points;
        const user= JSON.parse(localStorage.getItem('user') || '{}')
        user.points = points;
    }
    getPoints(){
        return this.points;
    }

    logout():void{
        this.iaAuth = false;
    }
}