import {Color} from "./types/MapObject.types";

export class MapObject{
    public color: Color;
    public x: number;
    public y: number;
    public z: number;
    public angle: number;

    constructor(color: Color) {
        this.color = color;
    }

    update({x, y, z, angle}) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.angle = angle;
    }
}