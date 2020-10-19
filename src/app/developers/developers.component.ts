import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Devs } from '../devs';
import { DevService } from '../services/dev.service';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {

  devList: Devs;

  constructor(private route: ActivatedRoute, private devService: DevService) { }

  ngOnInit(): void {
    this.devService.getDevs().subscribe(
      (data: Devs) =>
      this.devList = data
    );
  }

}
