import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatButtonModule, RouterLink],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})

export class Toolbar {}
