import { Component, OnInit, Input } from '@angular/core';
import { Dev } from '../devs';

@Component({
  selector: 'app-developer-view',
  templateUrl: './developer-view.component.html',
  styleUrls: ['./developer-view.component.css']
})
export class DeveloperViewComponent implements OnInit {
  @Input() theDev: Dev;
  isHidden = true;

  constructor() { }

  ngOnInit(): void {
  }

  HideAndSeek(){
    this.isHidden = !this.isHidden;
  }

  IsHidden(){
    if(this.isHidden == true){
      return {Hidden: true};
    }
      else{
        return {Hidden: false};
      }
  }

}
