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
        return this.dao.queryUserByOptions({
            attributes: {
                exclude: ['password', 'avatarFileId', 'is_del', 'avatar_file_id']
            },
            where: {
                email: {
                    '$eq': body.email || "",
                },
                password:{
                    '$eq': body.password || ''
                }
            },
            include: [
                { 
                    association: 'Avatar',
                    attributes: {
                        exclude: ['is_del', 'id', 'create_dt', 'update_dt']
                    },
                }
            ]
        })
    }
}

export default UserService;