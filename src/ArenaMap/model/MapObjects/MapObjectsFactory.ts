import {MapObject} from "./MapObject";
import {MapObjectFactoryConfig} from "./types/MapObjectsFactory.types";
import {DEFAULT_OBJECTS_CONFIG} from "../../constants/ArenaMap.constants";


class MapObjectsFactory {
    private mapObjectsConfig: Map<string, MapObjectFactoryConfig>;

    constructor() {
        this.mapObjectsConfig = DEFAULT_OBJECTS_CONFIG;
    }

    registerMapObject(type: string, config: MapObjectFactoryConfig) {
        if (this.mapObjectsConfig.has(type)) {
            const previousConfig = this.mapObjectsConfig.get(type);
            this.mapObjectsConfig.set(type, {...previousConfig, ...config});
            return;
        }
        this.mapObjectsConfig.set(type, config)
    };

    getObject(type: string) {
        if (!this.mapObjectsConfig.has(type)) return null;
        const objectConfig = this.mapObjectsConfig.get(type);
        const MapObject = objectConfig.classReference;
        return new MapObject();
    };
}

export default new MapObjectsFactory()