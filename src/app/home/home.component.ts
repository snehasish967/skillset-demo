import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  skillCount : number = 0;
  addBtnTxt : string = "Add a skill";
  skill : string = "";
  skillSet = [];

  addSkill(){
  	this.skillSet.push(this.skill);
  	this.skill="";
    this.skillCount = this.skillSet.length;
    this._data.changeSkillSet(this.skillSet);
  }

  removeSkill(i){
  	this.skillSet.splice(i,1);
    this.skillCount = this.skillSet.length;
    this._data.changeSkillSet(this.skillSet);

  }

  constructor( private _data : DataService) { }

  ngOnInit() {
    
    this._data.skillSet.subscribe(res => this.skillSet=res);
    this.skillCount=this.skillSet.length;
    this._data.changeSkillSet(this.skillSet);

  }

}
