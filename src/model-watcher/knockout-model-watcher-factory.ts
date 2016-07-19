import {IModelWatcherFactory, IModelWatcher} from "treacherous";
import {KnockoutModelWatcher} from "./knockout-model-watcher";
import {KnockoutPropertyResolver} from "./knockout-property-resolver";

export class KnockoutModelWatcherFactory implements IModelWatcherFactory
{
    constructor(private propertyResolver: KnockoutPropertyResolver)
    {}

    public createModelWatcher():IModelWatcher
    {
        return new KnockoutModelWatcher(this.propertyResolver);
    }
}