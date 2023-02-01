import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
   visibleSidebar1

   constructor(private authService:AuthService){}
   


   Logout(){
    this.authService.logout()
    window.location.reload();
   }

}
