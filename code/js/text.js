/**
 * 复制文本到剪贴板
 * @param {String} str 
 */
function copyToClipboard (str) {
    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    textarea.value = str;
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

module.exports = {
    copyToClipboard
};