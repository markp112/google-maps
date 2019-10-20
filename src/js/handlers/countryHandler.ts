import axios from 'axios';
import ICountry from '../../classes/countryClass';
import IGeography from '../../classes/geographyClass';
import { ICoordinate } from '../../classes/coordinatesClass';
import { moveLocation } from '../maps/map';
import { IMapReferences } from '../../classes/maReferencesClass';
import { IArea } from '../../classes/areaClass';


const delimitNumbers = (str:number):string => {
  return (str + "").replace(/\b(\d+)((\.\d+)*)\b/g, (a, b, c) => {
    return (b.charAt(0) > 0 && !(c || ".").lastIndexOf(".") ? b.replace(/(\d)(?=(\d{3})+$)/g, "$1,") : b) + c;
  });
}


const getCoordinates = (data: any): ICoordinate => {
  return new ICoordinate(data.lat, data.lng);
}

const getGeography = (data: any): IGeography => {
  let geography = new IGeography(data.location);
  if ('_coordinates' in data) {
    geography.coordinates = getCoordinates(data._coordinates)
  };
  return geography;
}

const getMapReferences = (data: any): IMapReferences => {
  return new IMapReferences(data._region);
}

const getAreas = (data: any): IArea => {
  let area = new IArea(data._globalRank);
  data._areas.forEach(a => area.addArea(a.type, a.value, a.units));
  return area
}
// create an instance of Icountry from the data received
// input data as object structured as an Icountry object
// returns an ICountry object containing the data passed in
const createCountryClass = (data: any): ICountry => {
  let countryData: any = data;
  let country = new ICountry(countryData.name);
  country.introduction = countryData._introduction;
  country.geography = getGeography(data._geography);
  country.mapReferences = getMapReferences(data.mapReference);
  country.areas = getAreas(data.area);
  return country;
}

// put the country introduction on the screen
const displayIntroduction = (introduction: string): void => {
  document.querySelector('.data-area').innerHTML = introduction;
}

//put land area facts on map
const displayArea = (area: IArea): void => {
  document.querySelector('#total-area span').innerHTML = `${delimitNumbers(area.areas[0].value)} ${area.areas[0].units}`;
  document.querySelector('#land-mass span').innerHTML = `${delimitNumbers(area.areas[1].value)} ${area.areas[1].units}`;
  document.querySelector('#water-mass span').innerHTML = `${delimitNumbers(area.areas[2].value)} ${area.areas[2].units}`;
}

// move the map to this country and place a marker
// inputs country as an Icountry
// output none
const putCountryOnMap = (country: ICountry): void => {
  // let map = new google.maps.Map
  moveLocation(country.geography.coordinates, country.areas.getZoomLevel());
  displayIntroduction(country.introduction);
  displayArea(country.areas);
}

// retrieve the country information from the getCountry API
// and display the content
const displayCountry = (country: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:8085/getCountry/?country=${country}`)
      .then(resp => {
        let countryClass: ICountry = createCountryClass(resp.data);
        putCountryOnMap(countryClass);
        console.log('countryClass :', countryClass);
        resolve(countryClass);
      })
      .catch(err => {
        reject(err);
      });
  })
}

export const displayCountrySelected = (e: Event): void => {
  let country: string = (<HTMLSelectElement>document.getElementById('country-list')).value;
  displayCountry(country);
}