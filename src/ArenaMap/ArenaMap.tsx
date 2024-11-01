import {createRoot, Root} from "react-dom/client";
import ArenaMapComponent from "./components/ArenaMap.component";
import {IObjectParser} from "./model/Parser/ObjectParser.interface";
import {ObjectParser} from "./model/Parser/ObjectParser";
import {ArenaMapConfiguration} from "./types/ArenaMap.types";
import MapObjectsFactory from "./model/MapObjects/MapObjectsFactory";

class ArenaMap {
    private root: Root;
    private objectParser;
    constructor(rootElement: HTMLElement,
                mapConfig: ArenaMapConfiguration,
                objectParser?: IObjectParser) {
        this.root = createRoot(rootElement);
        this.objectParser = objectParser ?? new ObjectParser();
        this.render();
        return this;
    }
    public setObjectsConfig(objectsConfig: any) {
        //В фабрике обновляется конфиг для создания объектов;
        return this;
    }
    public createObjects(objectsInfo: any) {
        this.objectParser.createObjects(objectsInfo);
    }
    public updateObjects(objectsInfo: any) {
        this.objectParser.updateObjects(objectsInfo);
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