export default function getPagination(params) {

    let {activePage,items,maxButton,ellipsis} = params;
    let {floor,ceil} = Math;
    let begin = 1, end = items, leftEllipsis = false, rightEllipsis = false;
    let leftSize = maxButton % 2 === 0 ? maxButton / 2 : floor(maxButton / 2);
    let rightSize = ceil(maxButton / 2) - 1;

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
        begin, end, leftEllipsis, rightEllipsis
    }
}