import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor() { }

  logger(msg: string) {
    console.log(msg)
  }
}
