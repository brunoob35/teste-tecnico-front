import { DevicesService } from './../../core/services/devices.service';
import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor( private DevicesService: DevicesService ){

  }
  ngOnInit(): void {
    this.DevicesService.listar()
      .subscribe(
        resposta => {
          console.log(resposta)
        }
      )
  }
}