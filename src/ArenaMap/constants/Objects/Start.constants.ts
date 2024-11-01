import {MapObjectFactoryConfig} from "../../model/MapObjects/types/MapObjectsFactory.types";
import {Start} from "../../model/MapObjects/PolygonObjects/Start";


export const START_DEFAULT_CONFIG: MapObjectFactoryConfig = {
    svg: '<svg width="190" height="190" viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '      <path class="body" d="M5 167.929V22.0711L22.0711 5H167.929L185 22.0711V167.929L167.929 185H22.0711L5 167.929Z" fill="#0500FF" stroke="#FFFF00" stroke-width="10"/>\n' +
        '      <circle cx="95" cy="95" r="65.5" stroke="white" stroke-width="5" stroke-dasharray="10 10"/>\n' +
        '    </svg>',
    size: {
        width: 0.8,
        height: 0.8,
    },
    visible: true,
    classReference: Start,
}