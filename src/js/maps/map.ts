// functions to interact with googlemaps
import { ICoordinate } from '../../classes/coordinatesClass';
import { mapStyle } from './mapStyle';

const getMap = (): google.maps.Map => {
  return new google.maps.Map(document.getElementById('map'));
}

export const initMap = (): void => {
  let coordinates = new ICoordinate(24.34, -100.2);
  // let styledMapType = new google.maps.StyledMapType(stlyes)
  let map = new google.maps.Map(document.getElementById('map'), {
    center: coordinates,
    zoom: 4,
    styles: mapStyle
  });
  return;
}

const placeMarker = (coordinates: ICoordinate, map: google.maps.Map): void => {
  let marker = new google.maps.Marker({
    position: coordinates,
    map: map,
  })
}


export const moveLocation = (coordinates: ICoordinate, zoomLevel: number): void => {
console.log('zoomLevel :', zoomLevel);
  let map = getMap();
  map.setCenter(coordinates);
  map.setZoom(zoomLevel);
  placeMarker(coordinates, map);
}
