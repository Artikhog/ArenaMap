import {MapObject} from "../MapObject";
import {Color} from "../types/MapObject.types";


export class Start extends MapObject {
    public startNumber: number;

    constructor(color: Color, startNumber: number) {
        super(color);
        this.startNumber = startNumber;
    }
}