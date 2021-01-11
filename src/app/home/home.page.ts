import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
  
  @Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  first;
  second;
  result;

  constructor(public navcontrol : NavController) {}

  addition(){
    this.result = parseInt(this.first) + parseInt(this.second);
  }

  subraction(){
    this.result = parseInt(this.first) - parseInt(this.second);
  }

  multiplied(){
    this.result = parseInt(this.first) * parseInt(this.second);
  }

  division(){
    this.result = parseInt(this.first) / parseInt(this.second);
  }

}
