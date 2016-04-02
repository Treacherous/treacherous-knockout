import * as ko from "knockout";

export class KnockoutPropertyResolver
{
    private indexRegex = /\[(\d)]/;
    private splitRegex =  /\./;

    public resolveProperty = (model: any, propertyChain: string): any => {
        var check = null, chain = [ ], lastkey = '';

        if( typeof propertyChain !== 'string' ) {
            throw new TypeError("propertyChain is not a string");
        }

        var processChain = (key: string) =>
        {
            var arrayIndex: any = -1;
            if(this.indexRegex.test(key))
            {
                arrayIndex = this.indexRegex.exec(key)[1];
                key = key.replace(this.indexRegex, "");
            }

            if( check )
            {
                if( typeof check === 'object' )
                {
                    if(arrayIndex >= 0) {
                        if(arrayIndex < ko.unwrap(check[key]).length)
                        {
                            chain.push(check = ko.unwrap(check[key])[arrayIndex]);
                            lastkey = key[arrayIndex];
                        }
                        else
                        { throw new TypeError('cannot find index "' + arrayIndex + '" in ' + lastkey); }
                    }
                    else
                    {
                        if( key in check )
                        {
                            chain.push( check = ko.unwrap(check[ key ]) );
                            lastkey = key;
                        }
                        else
                        { throw new TypeError( 'cannot resolve "' + key + '" in ' + lastkey); }
                    }
                }
                else
                { throw new TypeError( '"' + check + '" ' + ' does not seem to be an object' ); }
            }
            else
            {
                if(arrayIndex >= 0) {
                    if(key.length == 0)
                    {
                        chain.push(check = ko.unwrap(model)[arrayIndex]);
                        lastkey = arrayIndex;
                    }
                    else
                    {
                        chain.push(check = ko.unwrap(model[key])[arrayIndex]);
                        lastkey = key[arrayIndex];
                    }
                }
                else
                {
                    lastkey = key;
                    chain.push(check = ko.unwrap(model[key]));
                }
            }
        };

        var propertyRouteSections = propertyChain.split(this.splitRegex);
        propertyRouteSections.forEach(processChain);
        return ko.unwrap(chain[chain.length - 1]);
    };

    public decomposePropertyRoute(propertyRoute: string): Array<string> {
        var routeComponents = [];
        var arrayIndex;
        var splitRoutes = propertyRoute.split(this.splitRegex);
        for(var i=0; i<splitRoutes.length; i++){
            if(this.indexRegex.test(splitRoutes[i]))
            {
                arrayIndex = this.indexRegex.exec(splitRoutes[i])[1];
                routeComponents.push(splitRoutes[i].replace(this.indexRegex, ""));
                routeComponents.push(`[${arrayIndex}]`);
            }
            else
            {
                routeComponents.push(splitRoutes[i]);
            }
        }
        return routeComponents;
    }

    public getPropertyRouteSection(propertyRoute: string, sectionIndex = 0) {
        var routeComponents = this.decomposePropertyRoute(propertyRoute);
        return routeComponents[sectionIndex];
    }

    public buildPropertyRoute(propertySections: Array<string>) {
        var propertyRoute = "";
        for(var i=0; i<propertySections.length; i++)
        {
            if(propertyRoute.length == 0)
            {
                propertyRoute += propertySections[i];
                continue;
            }

            if(propertySections[i].indexOf("[") >= 0)
            {
                propertyRoute += `${propertySections[i]}`;
                continue;
            }

            propertyRoute += `.${propertySections[i]}`;
        }
        return propertyRoute;
    }
}