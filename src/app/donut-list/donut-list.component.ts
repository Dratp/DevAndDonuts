import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutList, Donut } from '../donuts';
import { DonutService } from '../services/donut.service';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.css']
})
export class DonutListComponent implements OnInit {

  donutList: DonutList;

  constructor(private route: ActivatedRoute, private donutService: DonutService) { }

  ngOnInit(): void {
    this.donutService.getDonutList().subscribe(
      (data: DonutList) =>
      this.donutList = data
    );
  }

}
