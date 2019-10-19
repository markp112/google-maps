import { initMap } from './maps/map';
import { populateCountryList } from './init/country';


window.onload =() =>{
  console.log('initmap')
  populateCountryList();
  initMap();
  console.log('back from init map');
 
}