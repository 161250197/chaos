const fs = require('fs');

/**
 * 检查目标路径是否为目录
 * @param {fs.PathLike} path 
 * @returns {boolean}
 */
function isFolder (path) {
    if (!fs.existsSync(path))
    {
        return false;
    }
    const target = fs.statSync(path);
    return target.isDirectory();
}

module.exports = {
    isFolder
};