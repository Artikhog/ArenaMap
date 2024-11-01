import {IObjectParser} from "./ObjectParser.interface";
import {MapObject} from "../MapObjects/MapObject";
import AbstractMapObjectsFactory from "../MapObjects/MapObjectsFactory";


export class ObjectParser implements IObjectParser{
    objects: Array<MapObject>;

    createObjects(objectsInfo: any) {

    }

    updateObjects(objectsInfo: any) {

    }
}