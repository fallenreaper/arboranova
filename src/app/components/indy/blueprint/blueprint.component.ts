import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blueprint',
  templateUrl: './blueprint.component.html',
  styleUrls: ['./blueprint.component.scss']
})
export class BlueprintComponent implements OnInit {
  @Input() id = null;
  constructor() { }

  ngOnInit(): void {
  }

}
