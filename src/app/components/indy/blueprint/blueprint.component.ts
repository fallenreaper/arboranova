import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blueprint',
  templateUrl: './blueprint.component.html',
  styleUrls: ['./blueprint.component.scss']
})
export class BlueprintComponent implements OnInit {
  @Input() blueprint = null;
  computedItems = {}
  Object = Object
  constructor() { }

  ngOnInit(): void {
  }

  adjustBlueprintME(materialLevel: number) {
    this.blueprint.materialEffeciencyLevel = materialLevel
    this.blueprint.computedMineralCost().forEach( item => {
      this.computedItems[item.id] = item;
    })
    console.log(this.computedItems)
  }
}
