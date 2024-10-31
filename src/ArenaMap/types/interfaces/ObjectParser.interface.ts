import {MapObject} from "../../model/MapObject";


export interface IObjectParser {
    objects: Array<MapObject>;
    createObjects: (arg: object) => void;
    updateObjects: (arg: object) => void;
}