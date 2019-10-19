import IGeography from './geographyClass';

export default class ICountry {
  name: string;
  _introduction: string;
  _geography: IGeography;

  constructor(name: string) {
    this.name = name
  }

  set introduction(introduction: string) {
    this._introduction = introduction;
  }

  set geography(geography) {
    this._geography = geography;
  }

  get introduction() {
    return this._introduction;
  }

  get geography() {
    return this._geography;
  }
}


