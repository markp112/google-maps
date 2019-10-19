import { ICoordinate } from "./coordinatesClass";

export default class IGeography {
  location: string;
  _coordinates: ICoordinate;

  constructor(location: string) {
    this.location = location
  }
  set coordinates(coord: ICoordinate) {
    this._coordinates = coord;
  }
  get coordinates() {
    return this._coordinates;
  }

}
