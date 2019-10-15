import { ICoordinate } from './coordinateClass';

export const initMap = ():void => {
  console.log('initMap called');

  let coordinates = new ICoordinate(-24.34, -100.2);

  let map = new google.maps.Map(document.getElementById('map'),{
    center: coordinates,
    zoom: 8
  });

} 

