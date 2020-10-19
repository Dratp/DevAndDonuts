import { Component, Input, OnInit } from '@angular/core';
import { Donut } from '../donuts';
import { DonutService } from '../services/donut.service';

@Component({
  selector: 'app-donut-view',
  templateUrl: './donut-view.component.html',
  styleUrls: ['./donut-view.component.css']
})
export class DonutViewComponent implements OnInit {

  @Input() theDonut:string
  donut: Donut;

  isHidden = true;

  constructor(private donutService: DonutService) { }

  ngOnInit(): void {
    this.donutService.getDonut(this.theDonut).subscribe(
      (data: Donut) =>
      this.donut = data
    )
  };

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
