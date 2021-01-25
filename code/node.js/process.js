/**
 * 获取命令行参数
 * @returns {Array<String>}
 */
function getArgs () {
    return process.argv.slice(2);
}

module.exports = {
    getArgs
};