import { Component, Input, OnInit } from '@angular/core';
import { DevicesService } from 'src/app/core/services/devices.service';
import { PointsService } from 'src/app/core/services/points.service';
import { Devices } from 'src/app/core/types/type';
import { Points } from 'src/app/core/types/type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  devices!: Devices[];
  constructor(private service: DevicesService){

  }
  ngOnInit(): void {
      this.service.listar().subscribe(
        res => {
          this.devices = res;
        }
      )
  }
}
