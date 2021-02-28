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

  getBlueprintMetadatabyName(name: string) {
    return this._http.get(`http://localhost:5000/api/blueprint?name=${name}`).toPromise().then( data => {
      console.log("Data", data)
      const bp = Blueprint.fromJson(data)
      return bp;
    })
  }

  getBlueprintMaterialsByName(name: string) {
    return this._http.get(`http://localhost:5000/api/blueprintmaterials?name=${name}`).toPromise().then( data => {
      console.log("Data", data)
      // const bp = Blueprint.fromJson({
      //   name,
      //   requiredItems: data
      // })
      return data;
    })
  }
}
