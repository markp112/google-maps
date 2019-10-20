export class IMapReferences {
  _region: string;

  constructor(region: string) {
    this._region = region;
  }
  get region() {
    return this.region;
  }
}