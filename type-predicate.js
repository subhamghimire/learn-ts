"use strict";
exports.__esModule = true;
exports.isDraftInvoice = exports.isFinalInvoice = void 0;
var isFinalInvoice = function (invoice) {
    return invoice.__typename == "FinalInvoice";
};
exports.isFinalInvoice = isFinalInvoice;
var isDraftInvoice = function (invoice) {
    return invoice.__typename == "DraftInvoice";
};
exports.isDraftInvoice = isDraftInvoice;
var myInovoice = {
    __typename: "FinalInvoice",
    createdAt: "2022-04-02",
    createdby: {},
    items: { name: "subham", sn: 22 }
};
console.log((0, exports.isFinalInvoice)(myInovoice));
