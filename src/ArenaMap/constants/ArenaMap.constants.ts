import {MapObjectFactoryConfig} from "../model/MapObjects/types/MapObjectsFactory.types";
import {START_DEFAULT_CONFIG} from "./Objects/Start.constants";
import {CHARGER_DEFAULT_CONFIG} from "./Objects/Charger.constants";

export const DEFAULT_OBJECTS_CONFIG: Map<string, MapObjectFactoryConfig> = new Map([
    // ['Pioneer', PIONEER_DEFAULT_CONFIG],
    ['Start', START_DEFAULT_CONFIG],
    ['Charger', CHARGER_DEFAULT_CONFIG],
]);