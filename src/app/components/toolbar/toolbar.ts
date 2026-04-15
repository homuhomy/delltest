import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, Router } from '@angular/router';
import { Misc } from '../../services/misc';
import { SharedModules } from '../../shared/shared-modules';
import { Data } from '../../services/data';


@Component({
  selector: 'app-toolbar',
  imports: [...SharedModules, RouterLink, MatToolbarModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})

export class Toolbar implements OnInit{
  public showLogoutButton: boolean | undefined;

  constructor(
    private misc: Misc, 
    private dataService: Data,
    private router: Router
  ){
    
  }

  ngOnInit(): void {
    this.misc.observeLoginEvent().subscribe((data: any) => {
      this.showLogoutButton = data;
    });
  }

  onLogout() {
    this.dataService.deleteStorage('token');
    this.misc.publishLoginEvent(false);
    this.router.navigateByUrl('/login');
  }
}
