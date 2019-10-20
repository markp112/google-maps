
export class IArea {
  _globalRank: number;
  _areas: Array<any>;

  constructor(globalRank: number) {
    this._globalRank = globalRank;
    this._areas = [];
  }

  addArea(type: string, value: number, units: string, ) {
    let area = { type: type, value: value, units: units };
    this._areas.push(area);
  }

  get areas() {
    return this._areas;
  }

  getArea(type: string) {
    return this._areas.filter(area => area.type === type);
  }

  get globalRank() {
    return this._globalRank;
  }
  getZoomLevel():number {
    let zoomLevel = 12;
    if(this._globalRank <= 200) zoomLevel = 10;
    console.log('this._globalRank :', this._globalRank);
    if(this._globalRank <= 150) zoomLevel = 8;
    if(this._globalRank <= 100) zoomLevel = 6;
    if(this._globalRank <= 50) zoomLevel = 4;
    return zoomLevel;
  }
}