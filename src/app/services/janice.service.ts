import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JaniceService {
  private _url = 'https://janice.e-351.com/api/rpc/v1?m=Appraisal.create';
  private _meta = {
    id: 4100,
    method: 'Appraisal.create',
    params: {
      marketId: 5,
      designation: 100,
      pricing: 200,
      pricePercentage: 1,
      input: 'Pyerite 100\nTritanium 100000',
      comment: '',
      compactize: true,
    },
  };
  constructor(private _http: HttpClient) {}

  query(itemStringArray: string[]) {
    const _input = itemStringArray.join("\n");
    const body = this._meta;
    body.params.input= _input;
    this._http.post(this._url, body ).toPromise().then( d => {
      console.log("D", d)
    })
  }
}
