import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-form',
  templateUrl: './app-sidebar-form.component.html'
})
export class AppSidebarFormComponent {

  value:string = '';

  constructor(private router: Router) { }

  search(): void {
    this.router.navigate(['/content/machines/machines-search/' + this.value]);
    this.value = '';
  }


}
