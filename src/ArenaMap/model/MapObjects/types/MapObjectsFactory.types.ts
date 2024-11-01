import {MapObject} from "../MapObject";

export type MapObjectFactoryConfig = {
    size: {
        height: number,
        width: number,
    }
    svg: string,
    visible: boolean,
    classReference: MapObject;
}