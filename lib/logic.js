'use strict';
/**
 *Track the trade of a commodity from one trader to another
 @param {org.acme.biznet.Trade} trade -the trade to be proccesed
 @transaction
 */

 function tradeCommodity (trade) {
     trade.commodity.owner = trade.newOwner;
     return getAssetRegistery('org.acme.biznet.Commodity')
        .then(function (assestRegistry) {
            return assestRegistry.update(trade.commodity);
        });
 }
