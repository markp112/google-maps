import IGeography from './geographyClass';
import  { IMapReferences }  from './maReferencesClass';
import { IArea } from './areaClass';

export default class ICountry {
  name: string;
  _introduction: string;
  _geography: IGeography;
  _mapReferences: IMapReferences;
  _areas: IArea;

  constructor(name: string) {
    this.name = name
  }

  set introduction(introduction: string) {
    this._introduction = introduction;
  }

  set geography(geography: IGeography) {
    this._geography = geography;
  }

  set mapReferences(mapReference:IMapReferences) {
    this._mapReferences = mapReference;
  }

  set areas(areas: IArea) {
    this._areas = areas;
  }

  get introduction():string {
    return this._introduction;
  }

  get geography():IGeography {
    return this._geography;
  }

  get mapReferences():IMapReferences {
    return this._mapReferences;
  }

  get areas():IArea {
    return this._areas;
  }
}


