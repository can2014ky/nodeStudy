// 操作数据的 API 文件模块

const fs = require('fs');

const dbPath = '../../db.json';

/**
 * 获取用户列表
 */
export const getUser = (callback) => {  // 传入回调函数，来获取异步处理的数据结果
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            callback(err)
        } else {
            callback(null, JSON.parse(data));
        }
    })
}

/**
 * 创建用户
 */
export const createUser = () => {
    
}

/**
 * 更新用户信息
 */
export const updateUeser = () => {
    
}

/**
 * 删除用户
 */
export const deleteUser = () => {
    
}