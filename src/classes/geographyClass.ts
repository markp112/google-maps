import ICoordinate from "./coordinatesClass";

export default class IGeography  {
  location:string;
  _coordinates:ICoordinate;

  constructor (location:string) {
    this.location = location
  }
  
  set coordinates(coordinates:ICoordinate) {
    this._coordinates = coordinates;
  }
  get coordinates () {
    return this.coordinates;
  }
  
}
