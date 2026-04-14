import { Component, OnInit } from '@angular/core';
import { SharedModules } from '../../shared/shared-modules';
import { ConvertPipe } from '../../pipes/convert-pipe';

@Component({
  selector: 'app-users-page',
  imports: [...SharedModules, ConvertPipe],
  templateUrl: './users-page.html',
  styleUrl: './users-page.scss',
})
export class UsersPage implements OnInit{
  public userList: any[] = [
    {name: 'Anati Aziz', email: 'nopenope@gmail.com', phone: '123-456-7890', height: 155 },
    {name: 'Dania Azmi', email: 'danziaz@gmail.com', phone: '123-456-7890', height: 165 },
    {name: 'Qayleef LOL', email: 'qayleeflol@gmail.com', phone: '123-456-7890', height: 170 },
    {name: 'Anneisha Akson', email: 'any@gmail.com', phone: '123-456-7890', height: 165 },
    {name: 'Test User', email: 'testuser@gmail.com', phone: '123-456-7890', height: 155 },
  ];


  ngOnInit(): void {
    // TODO: Fetch users from API
  }
}
