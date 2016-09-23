import { IModelWatcher, Ruleset } from "treacherous";
import { EventHandler } from "event-js";
export declare class KnockoutModelWatcher implements IModelWatcher {
    private propertyResolver;
    private watchCache;
    private watchCacheKeys;
    private watcherInterval;
    private model;
    private ruleset;
    scanInterval: any;
    onPropertyChanged: EventHandler;
    constructor(propertyResolver?: any);
    setupWatcher: (model: any, ruleset: Ruleset, scanInterval?: number) => void;
    changeWatcherTarget: (model: any) => void;
    startWatching: () => void;
    stopWatching: () => void;
    private updateAndNotifyDifferences;
    private watchProperty;
    private cacheWatchTargets;
    private scanProperties;
}
