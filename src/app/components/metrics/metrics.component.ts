import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {
  metrics = [
    {name: 'Sample', count: 14, icon: ''},
    {name: 'Sample', count: 14, icon: ''},
    {name: 'Sample', count: 14, icon: ''},
    {name: 'Sample', count: 14, icon: ''},
    {name: 'Sample', count: 14, icon: ''},
    {name: 'Sample', count: 14, icon: ''},
    {name: 'Sample', count: 14, icon: ''}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
