import {createRoot, Root} from "react-dom/client";
import ArenaMapComponent from "./components/ArenaMap.component";
import {DEFAULT_OBJECTS_CONFIG} from "./constants/ArenaMap.constants";
import {IObjectParser} from "./types/interfaces/ObjectParser.interface";
import {ObjectParser} from "./model/ObjectParser";
import {ArenaMapConfiguration} from "./types/ArenaMap.types";


class ArenaMap {
    private root: Root;
    private objectsConfig;
    private objectParser;
    constructor(rootElement: HTMLElement,
                mapConfig: ArenaMapConfiguration,
                objectsConfig: any,
                objectParser?: IObjectParser) {
        this.root = createRoot(rootElement);
        this.objectParser = objectParser ?? new ObjectParser();
        this.objectsConfig = Object.assign(DEFAULT_OBJECTS_CONFIG, objectsConfig);
        this.render();
    }
    private render(){
        this.root.render(
            <ArenaMapComponent
                objects={this.objectParser.objects}
            />
        )
    }
}

export default ArenaMap;