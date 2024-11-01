import {MapObject} from "../MapObjects/MapObject";


export interface IObjectParser {
    objects: Array<MapObject>;
    createObjects: (arg: object) => void;
    updateObjects: (arg: object) => void;
}