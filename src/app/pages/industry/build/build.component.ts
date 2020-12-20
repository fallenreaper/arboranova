import { Component, OnInit } from '@angular/core';
import {BlueprintService} from 'src/app/services/blueprint.service'
@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildComponent implements OnInit {
  materials = []
  constructor(private _bpService: BlueprintService) { }

  ngOnInit(): void {
  }

    async getMaterials(name: string){
    console.log(`Attempting to get Materials for ${name}`)
    // this._bpService
    let bp;
    await Promise.all([ this._bpService.getBlueprintMaterialsByName(name).then( _bp => { console.log("TEst", _bp); bp = _bp})])
    console.log("Result", bp)
    this.materials = bp.requiredItems
  }

}
