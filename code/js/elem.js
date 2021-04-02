/**
 * 检查节点是否在窗口的可视区域内
 * @param {HTMLElement} elem
 * @returns 
 */
function canSee (elem) {
    const { innerHeight, innerWidth } = window;
    const { top, right, bottom, left } = elem.getBoundingClientRect();
    const topBottomCanSee = (top >= 0 && top <= innerHeight) || (bottom >= 0 && bottom <= innerHeight);
    const leftRightCanSee = (left >= 0 && left <= innerWidth) || (right >= 0 && right <= innerWidth);
    return topBottomCanSee && leftRightCanSee;
}
