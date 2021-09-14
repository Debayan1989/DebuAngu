import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soham',
  templateUrl: './soham.component.html',
  styleUrls: ['./soham.component.css']
})
export class SohamComponent implements OnInit {
  a = 2;
  b = 3;
  c= (this.a+this.b);

  constructor() { }

  ngOnInit(): void {
  }

}
