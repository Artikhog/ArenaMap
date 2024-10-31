import ArenaMap from "./ArenaMap";
import {ArenaMapConfiguration} from "./ArenaMap/types/ArenaMap.types";

const root = document.getElementById('ArenaMap');

const mapConfiguration: ArenaMapConfiguration = {
    width: 11,
    height: 11,
}

const arenaMap = new ArenaMap(
    root,
    mapConfiguration,
    {},
);