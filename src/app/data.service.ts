import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private skills = new BehaviorSubject<any>(['Angular 5']);
  skillSet = this.skills.asObservable();

  changeSkillSet(updatedSkillSet) {
    this.skills.next(updatedSkillSet);
  }


  constructor() { }
}
