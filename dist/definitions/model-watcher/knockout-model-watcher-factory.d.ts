import { IModelWatcherFactory, IModelWatcher } from "treacherous";
import { KnockoutPropertyResolver } from "./knockout-property-resolver";
export declare class KnockoutModelWatcherFactory implements IModelWatcherFactory {
    private propertyResolver;
    constructor(propertyResolver: KnockoutPropertyResolver);
    createModelWatcher(): IModelWatcher;
}
