import {Injectable} from '@angular/core';
import {Calculator} from "./calculator";

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  // 12 x 8 cm = 500g
  // 96cm2 = 500g
  constructor() { }

  forWeight(weight: number){
    return new Calculator(weight)
  }

  forSize(x: number, y:number){
    return new Calculator((x * y)*(500/96))
  }

}
