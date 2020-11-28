import { Component, Input, OnInit } from '@angular/core';
import { faCoffee, faInfo, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-metric-card',
  templateUrl: './metric-card.component.html',
  styleUrls: ['./metric-card.component.scss']
})
export class MetricCardComponent implements OnInit {
  DEFAULT_ICON = faInfo;
  @Input() title: string = ""
  @Input() count: number = 0;
  @Input() icon: IconDefinition = faInfo

  constructor() { }

  ngOnInit(): void {
  }

}
