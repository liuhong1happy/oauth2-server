import UserDAO from '../dao/UserDAO';

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
    login(body) {
        try{
            const response = this.dao.findOne({
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
                return new ResultModel(ResultModel.Error, '', response)
            }
            return result;
        } catch(e) {
            return new ResultModel(ResultModel.Error, e.message)
        }
    }
}

export default UserService;