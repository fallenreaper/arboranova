import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blueprint } from '../classes/blueprint';


@Injectable({
  providedIn: 'root'
})
export class BlueprintService {

  constructor( private _http: HttpClient) { }

  getAll() {
    return []
  }

  getBlueprintById(id: number){

  }

  getBlueprintMaterialsByName(name: string) {
    return this._http.get("http://localhost:5000/api/blueprint?item=Orca").toPromise().then( data => {
      console.log("Data", data)
      const bp = Blueprint.fromJson({
        name,
        requiredItems: data
      })
      return bp;
    })
  }
}
