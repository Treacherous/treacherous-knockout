import { IPropertyResolver } from "treacherous";
export declare class KnockoutPropertyResolver implements IPropertyResolver {
    private indexRegex;
    private splitRegex;
    resolveProperty: (model: any, propertyChain: string) => any;
    decomposePropertyRoute(propertyRoute: string): Array<string>;
    getPropertyRouteSection(propertyRoute: string, sectionIndex?: number): string;
    buildPropertyRoute(propertySections: Array<string>): string;
}
