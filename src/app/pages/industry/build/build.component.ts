import { stringify } from '@angular/compiler/src/util';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Blueprint } from 'src/app/classes/blueprint';
import { BlueprintService } from 'src/app/services/blueprint.service';
@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss'],
})
export class BuildComponent implements OnInit {
  bp: Blueprint = null;
  constructor(private _bpService: BlueprintService) {}

  ngOnInit(): void {}

  async getBlueprint(name: string) {
    console.log(`Attempting to get Materials for ${name}`);
    // this._bpService
    let _bp: Blueprint = null;
    await this._bpService.getBlueprintMetadatabyName(name).then((data) => {
      _bp = Blueprint.fromJson(data);
    });
    // await this._bpService
    //   .getBlueprintMaterialsByName(name)
    //   .then((result: { id: number; name: string; quantity: number }[]) => {
    //     console.log('TEst', result);
    //     // bp = new Blueprint()
    //     _bp.requiredItems = result;
    //   });
    this.bp = _bp
    console.log('Result', this.bp);
  }
}
