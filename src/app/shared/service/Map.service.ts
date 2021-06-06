import {map} from '../../../environments/environment';
import {Injectable} from '@angular/core';
import {LocationMap} from '../model/location/LocationMap.model';

@Injectable({providedIn: 'root'})
export class MapService {

  public getDefaultLocation(): LocationMap {
    return {
      lat: map.latitude,
      lng: map.longitude
    };
  }

  public getDefaultZoom(): number {
    return map.zoom;
  }

  public buildMapOption(): google.maps.MapOptions {
    return {
      mapTypeId: 'hybrid',
      zoomControl: false,
      scrollwheel: true,
      disableDoubleClickZoom: true,
      maxZoom: map.maxZoom,
      minZoom: map.minZoom
    };
  }
}
