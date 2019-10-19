import axios from 'axios';
import ICountry from '../../classes/countryClass';
import IGeography from '../../classes/geographyClass';
import {ICoordinate} from '../../classes/coordinatesClass';
import {moveLocation} from '../maps/map';

const getCoordinates = (data: any): ICoordinate => {
  let coordinate = new ICoordinate(data.lat, data.lng);
  return coordinate;
}

const getGeography = (data: any): IGeography => {
  let geography = new IGeography(data.location);
  if('_coordinates' in data)  {
    geography.coordinates = getCoordinates(data._coordinates)
  };
  return geography;
}
// create an instance of Icountry from the data received
// input data as object structured as an Icountry object
// returns an ICountry object containing the data passed in
const createCountryClass = (data: any): ICountry => {
  let countryData: any = data;
  let country = new ICountry(countryData.name);
  country.introduction = countryData._introduction;
  country.geography = getGeography(data._geography);
  return country;
}

const displayIntroduction =(introduction:string):void => {
  document.querySelector('.data').innerHTML = introduction;
}

const putCountryOnMap =(country:ICountry):void => {
  // let map = new google.maps.Map
  moveLocation(country.geography.coordinates);
  displayIntroduction(country.introduction)
}

const displayCountry = (country: string): Promise<any> => {
  console.log('country :', country);
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