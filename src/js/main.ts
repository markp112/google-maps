import { initMap } from './maps/map';
import { populateCountryList } from './data/country';

window.onload =() =>{
  console.log('initmap')
  populateCountryList();
  initMap();
  console.log('back from init map');
 
}