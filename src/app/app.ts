import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from "./components/toolbar/toolbar";
import { Misc } from './services/misc';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App implements OnInit {
  protected readonly title = signal('angular-inter');
  constructor (private misc: Misc) {}
  
  ngOnInit(): void {
    this.misc.initNetworkListener();
  }
}