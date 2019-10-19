
import { ICoordinate } from '../../classes/coordinatesClass';

const getMap = ():google.maps.Map => {
  return new google.maps.Map(document.getElementById('map'));
}

export const initMap = ():void => {
  let coordinates = new ICoordinate(24.34, -100.2);
  let map = new google.maps.Map(document.getElementById('map'),{
    center: coordinates,
    zoom: 4
  });
  return;
} 

const placeMarker = (coordinates:ICoordinate, map:google.maps.Map):void => {
    let marker = new google.maps.Marker({
    position: coordinates,
    map: map,
  })
  } 


export const moveLocation = (coordinates):void =>{
  let map = getMap();
  map.setCenter (coordinates);
  map.setZoom(8);
  placeMarker(coordinates,map);
}
