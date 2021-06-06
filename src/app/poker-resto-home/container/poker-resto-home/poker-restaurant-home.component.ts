import { Component, OnInit } from '@angular/core';
import {LocationMap} from '../../../shared/model/location/LocationMap.model';
import {MapService} from '../../../shared/service/Map.service';

@Component({
  selector: 'app-poker-restaurant-home',
  templateUrl: './poker-restaurant-home.component.html',
  styleUrls: ['./poker-restaurant-home.component.scss']
})
export class PokerRestaurantHomeComponent implements OnInit {

  zoom: number;
  center: LocationMap;
  options: google.maps.MapOptions;

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.zoom = this.mapService.getDefaultZoom();
    this.options = this.mapService.buildMapOption();
    this.center = this.mapService.getDefaultLocation();

  }



}
