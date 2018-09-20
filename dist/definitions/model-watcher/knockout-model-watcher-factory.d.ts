import { IModelWatcherFactory, IModelWatcher } from "@treacherous/core";
import { KnockoutPropertyResolver } from "./knockout-property-resolver";
export declare class KnockoutModelWatcherFactory implements IModelWatcherFactory {
    private propertyResolver;
    constructor(propertyResolver: KnockoutPropertyResolver);
    createModelWatcher(): IModelWatcher;
}
