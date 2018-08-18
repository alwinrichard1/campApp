import { Http } from '@angular/http';
import { UtilsService } from './../../utils.service';
import { Injectable } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AutocompletePlacesService {

  constructor(
    private _utilsService: UtilsService,
    private _http: Http
  ) { }

  // fetchDistricts() {
  //   return this._http
  //     .get('https://api.data.gov.in/resource/20138aa5-e53f-4d83-a7e2-f280688b11cc?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10');

  //     return this._http.get('people.json')
  //     .subscribe((res: Response) => this.people = res.json());
  // }
}
