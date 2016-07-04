"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getPagination;
function getPagination(params) {
    var activePage = params.activePage;
    var items = params.items;
    var maxButton = params.maxButton;
    var ellipsis = params.ellipsis;
    var floor = Math.floor;
    var ceil = Math.ceil;

    var begin = 1,
        end = items,
        leftEllipsis = false,
        rightEllipsis = false;
    var leftSize = maxButton % 2 === 0 ? maxButton / 2 : floor(maxButton / 2);
    var rightSize = ceil(maxButton / 2) - 1;

    if (items <= maxButton) {
        begin = 1;
        end = items;
    } else if (activePage <= leftSize) {
        begin = 1;
        end = maxButton;
    } else if (activePage + rightSize >= items) {
        begin = items - maxButton + 1;
        end = items;
    } else {
        begin = activePage - leftSize <= 0 ? 1 : activePage - leftSize;
        end = activePage + rightSize > items ? items : activePage + rightSize;
    }
    leftEllipsis = begin === 1 ? false : true;
    rightEllipsis = end === items ? false : true;
    if (!ellipsis) {
        leftEllipsis = rightEllipsis = false;
    }
    return {
        begin: begin, end: end, leftEllipsis: leftEllipsis, rightEllipsis: rightEllipsis
    };
}