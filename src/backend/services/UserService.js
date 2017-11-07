import UserDAO from '../dao/UserDAO';
import ResultModel from '../models/ResultModel';
import EmailUtils from '../utils/email';

class UserService {
    constructor() {
        this.dao = new UserDAO();
    }
    queryUserById(id) {
        return this.dao.queryUserById(id);
    }
    createUser(data) {
        return this.dao.save(data);
    }
    async login(body) {
        try{
            const response = await this.dao.findOne({
                attributes: { exclude: ['password', 'avatarFileId', 'is_del', 'avatar_file_id'] },
                where: { email: { '$eq': body.email }, password:{ '$eq': body.password}},
                include: [{
                    association: 'Avatar',
                    attributes: {exclude: ['is_del', 'id', 'create_dt', 'update_dt']},
                }]
            })
            
            if(response === null) {
                return new ResultModel(ResultModel.Error, '用户名密码错误')
            } else {
                return new ResultModel(ResultModel.Success, '', response)
            }
            return result;
        } catch(e) {
            return new ResultModel(ResultModel.Error, e.message)
        }
    }

    async register(body, srvUrl) {
        try{
            const existUser = await this.dao.findOne({
                where: {
                    '$or': [
                        {email:  body.email },
                        {username: body.username}
                    ]
                }
            })
            if(existUser) {
                return new ResultModel(ResultModel.Error, '用户名或者邮箱已经存在')
            }
            body.is_active = false;
            body.token = parseInt(Math.random()*4097).toString(16).padStart(4, '0');
            const user = await this.dao.save(body);
            console.log(user);
            // 发邮件
            const activeUserUrl = `http://${srvUrl.host}/user/active?user_id=${user.id}&token=${body.token}`
            const isSuccess = await EmailUtils.sendMail(body.email, '用户激活', [
                '<div>',
                    '<p>您正在OAuth2 Server注册账户，如果是您本人注册，请点击如下链接进行账户激活。</p>',
                    `<p>${activeUserUrl}</p>`,
                '</div>'
            ].join(''))

            return new ResultModel(ResultModel.Success, '创建用户成功', user)
        } catch(e) {
            return new ResultModel(ResultModel.Error, e.message)
        }
    }
}

export default UserService;