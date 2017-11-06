import Sequelize from 'sequelize';
import proccess from 'process'

const Op = Sequelize.Op;

const operatorsAliases = {
    $eq: Op.eq,
    $ne: Op.ne,
    $gte: Op.gte,
    $gt: Op.gt,
    $lte: Op.lte,
    $lt: Op.lt,
    $not: Op.not,
    $in: Op.in,
    $notIn: Op.notIn,
    $is: Op.is,
    $like: Op.like,
    $notLike: Op.notLike,
    $iLike: Op.iLike,
    $notILike: Op.notILike,
    $regexp: Op.regexp,
    $notRegexp: Op.notRegexp,
    $iRegexp: Op.iRegexp,
    $notIRegexp: Op.notIRegexp,
    $between: Op.between,
    $notBetween: Op.notBetween,
    $overlap: Op.overlap,
    $contains: Op.contains,
    $contained: Op.contained,
    $adjacent: Op.adjacent,
    $strictLeft: Op.strictLeft,
    $strictRight: Op.strictRight,
    $noExtendRight: Op.noExtendRight,
    $noExtendLeft: Op.noExtendLeft,
    $and: Op.and,
    $or: Op.or,
    $any: Op.any,
    $all: Op.all,
    $values: Op.values,
    $col: Op.col
};

export default {
    Connect: async ()=>{
        const sequelize = new Sequelize('mysql://root:12345678@localhost:3306/oauth-db',{ operatorsAliases });
        // 预链接
        try {
            await sequelize.authenticate();

            global.Sequelize = Sequelize;
            global.sequelize = sequelize;
            return true
        } catch(err) {
            proccess.exit(-1)
            return false;
        }
    },
    InitTable: async ()=> {
        const UserModel = require('../models/UserModel').default
        const DeveloerModel = require('../models/DeveloperModel').default
        const ApplicationModel = require('../models/ApplicationModel').default
        const CodeModel = require('../models/CodeModel').default
        const TokenModel = require('../models/TokenModel').default
        const FileModel = require('../models/FileModel').default
        try {
            await sequelize.sync({force: true})
            return true;
        } catch(err) {
            return false
        }
    },
    InitData: async ()=> {
        const UserModel = require('../models/UserModel').default
        const DeveloerModel = require('../models/DeveloperModel').default
        const ApplicationModel = require('../models/ApplicationModel').default
        const CodeModel = require('../models/CodeModel').default
        const TokenModel = require('../models/TokenModel').default
        const FileModel = require('../models/FileModel').default

        await UserModel.create({
            username: "liuhong1happy",
            email: "liuhong1.happy@163.com",
            password: '123456',
            age: 26,
            gender: 1,
            token: '123456',
            is_active: true,
            Avatar: {
                name: '1.jpg',
                md5: 'Fmo7XUWAhj-VzZeeqmOGCGpAmmnA',
                size: 27496,
                width: 411,
                height: 411
            }
        },{
            include: [ { association: 'Avatar' } ]
        });

        await DeveloerModel.create({
            username: "liuhong1happy",
            email: "liuhong1.happy@163.com",
            password: '123456',
            token: '123456',
            is_active: true,
            Avatar: {
                name: '1.jpg',
                md5: 'Fmo7XUWAhj-VzZeeqmOGCGpAmmnA',
                size: 27496,
                width: 411,
                height: 411
            }
        },{
            include: [ { association: 'Avatar' } ]
        })

        await ApplicationModel.create({
            app_name: "今日头条",
            app_key: '23087',
            app_home: 'http://www.baidu.com',
            developer_id: 1,
            Icon: {
                name: '1.jpg',
                md5: 'Fmo7XUWAhj-VzZeeqmOGCGpAmmnA',
                size: 27496,
                width: 411,
                height: 411
            }
        },{
            include: [ { association: 'Icon' } ]
        })
    }
}