import { Component, Input, OnInit } from '@angular/core';
import { faCoffee, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-metric-card',
  templateUrl: './metric-card.component.html',
  styleUrls: ['./metric-card.component.scss']
})
export class MetricCardComponent implements OnInit {

  @Input() title: string = ""
  @Input() count: number = 0;
  @Input() icon: IconDefinition = faCoffee

  constructor() { }

  ngOnInit(): void {
  }

}
