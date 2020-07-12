// 操作数据的 API 文件模块

const fs = require('fs');
const path = require('path');

const dbPath = path.resolve(__dirname, '../../db.json');

/**
 * 获取用户列表
 */
// 传入回调函数，来获取异步处理的数据结果
const getUserList = (callback) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        } else {
            callback(null, JSON.parse(data).userInfoList);
        }
    })
}

/**
 * 创建用户
 */
const createUser = (newUserInfo, callback) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        } else {
            const resultData = JSON.parse(data).userInfoList;
            newUserInfo.id = resultData.length + 1;
            resultData.push(newUserInfo);
            const obj = JSON.stringify({
                userInfoList: resultData,
            });
            fs.writeFile(dbPath, obj, (err) => {
                if (err) {
                    return callback(err);
                } else {
                    callback(null);
                }
            })
        }
    })
}

const getUserInfo = (id, callback) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        } else {
            const resultData = JSON.parse(data).userInfoList;
            const userInfo = resultData.find((item) => {
                return item.id === parseInt(id);
            });
            callback(null, userInfo);
        }
    })
}

/**
 * 更新用户信息
 */
const updateUser = (updateUserInfo, callback) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        } else {
            const resultData = JSON.parse(data).userInfoList;
            const userInfo = resultData.find((item) => {
                return item.id === parseInt(updateUserInfo.id);
            });
            Object.keys(userInfo).forEach((key) => {
                if (key !== 'id') {
                    userInfo[key] = updateUserInfo[key];
                }
            });
            const obj = JSON.stringify({
                userInfoList: resultData,
            });
            fs.writeFile(dbPath, obj, (err) => {
                if (err) {
                    return callback(err);
                } else {
                    callback(null);
                }
            })
        }
    })
}

/**
 * 删除用户
 */
const deleteUser = () => {
    
}

module.exports = {
    getUserList,
    createUser,
    getUserInfo,
    updateUser,
    deleteUser
}
