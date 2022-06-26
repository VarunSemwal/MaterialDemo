import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alertdemo',
  templateUrl: './alertdemo.component.html',
  styleUrls: ['./alertdemo.component.css']
})
export class AlertdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public onClosedChange(event: boolean): void {
    alert(`Alert closed with: ${event}`);
  }

}
