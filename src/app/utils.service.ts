import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
      ) { }

  // getServices(pathparams) {
  //   return this.http.get(this.url + pathparams);
  // }

  // postServices(pathparams, postdata) {
  //   return this.http.post(this.url + pathparams, JSON.stringify(postdata));
  // }

}
