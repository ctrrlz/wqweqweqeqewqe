import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service'

@Component({
  selector: 'app-regirest',
  templateUrl: './regirest.component.html',
  styleUrls: ['./regirest.component.css']
})
export class RegisterComponent {
    username: string = '';
    passvord: string = '';

  constructor(private authService: AuthService){}

 regirest(): void{
  if(this.authService.regirest(this.username, this.passvord)){
  // this.router.navigate(['/login'])
  }
  
 }

  
}
